import os

basedir = os.path.abspath(os.path.dirname(__file__))


class Config(object):
    SQLALCHEMY_TRACK_MODIFICATIONS = True
    DEBUG = False
    CSRF_ENABLED = True
    SECRET_KEY = "not going to do that again"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "postgresql://postgres:tandeta23@/soliter")


class ProductionConfig(Config):
    DEBUG = False
    CSRF_ENABLED = True


class DevelopmentConfig(Config):
    DEBUG = True
    FLASK_ENV = "development"
