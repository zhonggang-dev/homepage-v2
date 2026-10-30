#!/usr/local/bin/python3.11
"""Root-owned narrow sudo entrypoint; never execute repository scripts as root."""
from datetime import datetime, timezone
import fcntl
import hashlib
import json
import os
from pathlib import Path
import re
import subprocess
import sys
import time
import urllib.request

BASE = Path("/opt/unipat-official")
SERVICE = "unipat-homepage-v2.service"


def switch(target):
    link = BASE / (".current-" + str(os.getpid()))
    link.symlink_to(target)
    link.replace(BASE / "current")
    subprocess.run(["systemctl", "restart", SERVICE], check=True, timeout=45)


def local(path):
    request = urllib.request.Request("http://127.0.0.1:5003" + path, headers={"Host": "unipat.ai", "X-Forwarded-Proto": "https"})
    with urllib.request.urlopen(request, timeout=10) as response:
        return response.read()


def wait_for_service(commit=None):
    for attempt in range(25):
        try:
            if commit:
                assert json.loads(local("/_health"))["release"] == commit
            local("/")
            return
        except Exception:
            if attempt == 24:
                raise
            time.sleep(1)


def gateway(path):
    return subprocess.check_output(["curl", "--noproxy", "*", "--resolve", "unipat.ai:443:127.0.0.1", "-fsS", "--max-time", "15", "https://unipat.ai" + path])


def activate(target, commit, previous, manifest):
    try:
        switch(target)
        wait_for_service(commit)
        for path in ("/blog", "/benchmarks", "/joinus"):
            local(path)
        assert json.loads(gateway("/_health"))["release"] == commit
        for asset in ("static/site/site.css", "static/site/motion.js"):
            assert hashlib.sha256(gateway("/" + asset)).hexdigest() == manifest["files"][asset]
    except BaseException:
        print("Activation failed; restoring", previous.name, file=sys.stderr, flush=True)
        switch(previous)
        wait_for_service()
        raise


def main():
    if os.geteuid() != 0 or len(sys.argv) != 2 or not re.fullmatch(r"[0-9a-f]{40}", sys.argv[1]):
        raise SystemExit("Root activation requires one full commit SHA")
    commit = sys.argv[1]
    target = BASE / "releases/ci" / commit
    if target.resolve() != target or not (target / ".venv/bin/gunicorn").is_file():
        raise SystemExit("Release is not prepared")
    manifest = json.loads((target / "release.json").read_text())
    if manifest["commit"] != commit:
        raise SystemExit("Release commit mismatch")
    with Path("/run/lock/unipat-homepage-activation.lock").open("a") as lock:
        fcntl.flock(lock, fcntl.LOCK_EX)
        previous = (BASE / "current").resolve()
        activate(target, commit, previous, manifest)
        history = BASE / "deployment-history"
        history.mkdir(mode=0o755, exist_ok=True)
        stamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
        (history / (stamp + "-" + commit[:12] + ".json")).write_text(json.dumps({"commit": commit, "previous": str(previous), "current": str(target), "status": "healthy"}, indent=2) + "\n")
        print("Activated healthy release", commit, flush=True)


if __name__ == "__main__":
    main()
