from flask import Flask


app = Flask(__name__, static_folder='../frontend/build/')
from nosleepToEpub import routes