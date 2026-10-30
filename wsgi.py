"""Public-site entrypoint; review pages remain on the separate preview server."""
import json
from pathlib import Path

from flask import abort, jsonify, request
from werkzeug.middleware.proxy_fix import ProxyFix

from app import app

release_file = Path(__file__).with_name("release.json")
RELEASE = json.loads(release_file.read_text())["commit"] if release_file.exists() else "development"


@app.get("/_health")
def deployment_health():
    response = jsonify(status="ok", release=RELEASE)
    response.headers["Cache-Control"] = "no-store"
    return response


@app.before_request
def public_site_routes():
    if request.endpoint in {
        "design_index", "design_variant", "design_collection", "blog_preview"
    }:
        abort(404)


# Gunicorn listens only on loopback, behind the existing HTTPS Nginx server.
application = ProxyFix(app, x_for=1, x_proto=1)
