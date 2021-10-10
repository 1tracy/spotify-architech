import time
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/time', methods=("GET", "POST"))
def get_current_time():
    return {'response': time.time()}

@app.route('/callback', methods=("GET", "POST"))
def get_callback():
    # get auth from spotify callback
    
    return ""