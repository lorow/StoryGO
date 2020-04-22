from flask import Flask, send_from_directory
from werkzeug.exceptions import NotFound

app = Flask(__name__)
app.config.from_object(
    'nosleepToEpub.config.DevelopmentConfig',
    static_folder='./frontend/build/'
)


@app.route('/')
def index():
    try:
        return send_from_directory('./frontend/build/', 'index.html')
    except NotFound:
        return (
            "Frontend not yet implemented,",
            "working as an API or someone forgot to run npm build"
        )


if __name__ == '__main__':
    app.run()
