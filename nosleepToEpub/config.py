import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    DEBUG = False
    CSRF_ENABLED = True
    SECRET_KEY = "not going to do that again"
    SQLALCHEMY_DATABASE_URI = os.environ["DATABASE_URL"]


class ProductionConfig(Config):
    DEBUG = False
    CSRF_ENABLED = True


class DevelopmentConfig(Config):
    DEBUG = True
    FLASK_DEBUG = True
