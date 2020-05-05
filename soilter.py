from flask import Flask
from flask import send_from_directory
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy
from werkzeug.exceptions import NotFound


app = Flask(__name__, static_folder="./frontend/build/")
app.config.from_object("nosleepToEpub.config.DevelopmentConfig",)
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# import the models so thatt they are known to flask
from nosleepToEpub import db as nosleepModels  # noreorder # noqa


@app.route("/")
def index():
    try:
        return send_from_directory("./frontend/build/", "index.html")
    except NotFound:
        return (
            "Frontend not yet implemented,",
            "working as an API or someone forgot to run npm build",
        )


if __name__ == "__main__":
    app.run()
