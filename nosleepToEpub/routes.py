from flask import send_from_directory
from werkzeug.exceptions import NotFound
from nosleepToEpub import app


@app.route('/')
def index():
    try:
        return send_from_directory('../frontend/build/', 'index.html')
    except NotFound:
        return (
            "Frontend not yet implemented,",
            "working as an API or someone forgot to run npm build"
        )
