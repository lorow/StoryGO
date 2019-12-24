from flask import Flask


app = Flask(__name__, static_folder='../frontend/build/static')
from nosleepToEpub import routes