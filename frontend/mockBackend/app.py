from flask import Flask, request
from datetime import datetime
import json

import re
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app, resources={r"/foo": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

# app = Flask(__name__)
app.config['TESTING'] = True


@app.route("/")
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def home():
    return "Hello, Flask!!"

@app.route("/home")
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def hello_there():
    return {
        "home": "true"
    }

@app.route("/react/signup", methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def signup_here():
    # return {
    #     "home": "true"
    # }
    if request.method == 'POST' or request.method == 'GET':
        data = json.loads(str(request.data, 'utf-8'))
        print(data)
    return "signup"


# app = Flask(__name__)
