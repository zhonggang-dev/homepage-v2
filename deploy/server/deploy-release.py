#!/usr/local/bin/python3.11
"""Installed by an administrator; invoked by the unprivileged CI SSH user."""
import fcntl
import json
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import tempfile

sys.path.insert(0, "/usr/local/lib/unipat-deploy")
from bundle import unpack

BASE = Path("/opt/unipat-official")


def main():
    if len(sys.argv) != 2 or not re.fullmatch(r"[0-9a-f]{40}", sys.argv[1]):
        raise SystemExit("Usage: unipat-deploy-release COMMIT_SHA")
    os.umask(0o022)
    commit = sys.argv[1]
    with (BASE / "incoming/deploy.lock").open("a") as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        archive = BASE / "incoming" / (commit + ".tar.gz")
        release_root = BASE / "releases/ci"
        target = release_root / commit
        previous = (BASE / "current").resolve()
        if target.exists():
            manifest = json.loads((target / "release.json").read_text())
            if manifest["commit"] != commit:
                raise RuntimeError("Existing release has the wrong commit")
        else:
            staging = Path(tempfile.mkdtemp(prefix=".incoming-", dir=release_root))
            try:
                unpack(archive, staging, commit)
                staging.chmod(0o755)
                staging.rename(target)
            finally:
                if staging.exists():
                    shutil.rmtree(staging)
        env = dict(os.environ, CDN_URL="", PIP_NO_INPUT="1", PYTHONDONTWRITEBYTECODE="1")
        python = target / ".venv/bin/python"
        # Re-running an already active commit must not mutate its live environment.
        if target.resolve() != previous:
            subprocess.run(["/usr/local/bin/python3.11", "-m", "venv", str(target / ".venv")], check=True, env=env)
            subprocess.run([str(python), "-m", "pip", "install", "--disable-pip-version-check", "--no-compile", "-r", "requirements-production.txt"], cwd=target, env=env, check=True)
        subprocess.run([str(python), "deploy/validate.py"], cwd=target, env=env, check=True)
        subprocess.run(["sudo", "-n", "/usr/local/sbin/unipat-activate-release", commit], check=True)
        archive.unlink(missing_ok=True)
        # Keep the five most recent CI releases plus the active and previous ones.
        releases = sorted((p for p in release_root.iterdir() if re.fullmatch(r"[0-9a-f]{40}", p.name)), key=lambda p: p.stat().st_mtime, reverse=True)
        keep = {p.resolve() for p in releases[:5]} | {target.resolve(), previous}
        for release in releases:
            if not release.is_symlink() and release.resolve() not in keep:
                shutil.rmtree(release)
        print("Deployed", commit, "to https://unipat.ai", flush=True)


if __name__ == "__main__":
    main()
