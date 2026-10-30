# Deployment operations

## GitHub Actions

Repository: `zhonggang-dev/homepage-v2`; production branch: `main`.

Repository secrets:

- `DEPLOY_SSH_KEY`: dedicated Ed25519 private key for the `unipat-deploy` account.
- `DEPLOY_KNOWN_HOSTS`: independently verified SSH host key entry for the server.

Repository variables:

- `DEPLOY_HOST`: `47.236.21.40`.
- `DEPLOY_USER`: `unipat-deploy`.

Environment: `production`, URL `https://unipat.ai`.

Actions holds read-only repository permissions. The SSH user cannot log in with
the server administrator password; its only sudo entry runs the root-owned
activation helper for this website. Root never runs repository Python scripts.
The helpers under `deploy/server` are installed by an administrator, so changing
them in Git alone does not change the privileged server configuration.

## Server layout

- Service: `unipat-homepage-v2.service`, running as `unipat-web` on `127.0.0.1:5003`.
- Active symlink: `/opt/unipat-official/current`.
- CI releases: `/opt/unipat-official/releases/ci/<full-commit-sha>/`.
- Each CI release has a `.venv/` and a checksummed `release.json`.
- Uploads: `/opt/unipat-official/incoming/`.
- Activation history: `/opt/unipat-official/deployment-history/`.
- Public health check: `https://unipat.ai/_health`, returning the active commit.
- Existing Nginx continues to terminate HTTPS and serve `current/static/`.

Each workflow waits for checks, uploads a complete runtime archive and invokes
`/usr/local/bin/unipat-deploy-release COMMIT`. Preparation runs as `unipat-deploy`;
the narrow sudo helper atomically changes `current`, restarts only the v2 service,
checks its actual commit and verifies Nginx-served CSS/JS. It restores the prior
release if activation fails. Concurrent releases are serialized on the server.

## Roll back a new-site update

The usual source-based rollback is `git revert <bad-commit>` followed by a push to
`main`; it is checked and published by the same workflow. To activate a retained
release immediately, an administrator may run:

```sh
sudo /usr/local/sbin/unipat-activate-release <retained-full-commit-sha>
```

## Restore the original website

The original `/home/application/UniPat_Prod` and `unipat-prod.service` on port 5002
are separate and remain intact. Its source and configuration backup is:
`/opt/unipat-official/backups/20261030-170519-official/`.

After checking for subsequent Nginx changes, an administrator can restore the
original route:

```sh
cp /opt/unipat-official/backups/20261030-170519-official/unipat.conf /etc/nginx/conf.d/unipat.conf
nginx -t && systemctl reload nginx
```

The old repository's CI still targets the original service; this repository
exclusively publishes the new service. It does not modify staging or Echo.

## Existing page issues

The initial import preserves the current published UI. The source still has
lowercased sitemap slugs that do not match case-sensitive content filenames, and
ScienceVision has horizontal overflow at narrow mobile widths. These predate the
deployment integration; ordinary navigation and the ScienceVision 3D viewer work.
