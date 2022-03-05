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

@app.route("/react/signup_restaurant", methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def signup_restaurant():
    # return {
    #     "home": "true"
    # }
    if request.method == 'POST' or request.method == 'GET':
        data = json.loads(str(request.data, 'utf-8'))
        print(data)
    return "restaurant signup"

@app.route("/react/signin", methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def signin_here():
    # return {
    #     "home": "true"
    # }
    if request.method == 'POST' or request.method == 'GET':
        data = json.loads(str(request.data, 'utf-8'))
        print(data)
    return "signin"

@app.route("/react/search_result", methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def search_result():
    # return {
    #     "home": "true"
    # }
    res = []
    if request.method == 'POST' or request.method == 'GET':
        data = json.loads(str(request.data, 'utf-8'))
        print(data)
        res = {"data" : [
            {
                "restaurant": "macdonald",
                "zip": "32608",
            },
            {
                "restaurant": "kfc",
                "zip": "32608",
            },
            {
                "restaurant": "tacobell",
                "zip": "32608",
            },
            {
                "restaurant": "popeyes",
                "zip": "32608",
            },
            {
                "restaurant": "xxx",
                "zip": "32608",
            },
            {
                "restaurant": "xxccccx",
                "zip": "328808",
            },
        ]}
    return res

@app.route("/react/menu", methods=['GET', 'POST'])
@cross_origin(origin='*',headers=['Content-Type','Authorization'])
def menu():
    # return {
    #     "home": "true"
    # }
    res = []
    if request.method == 'POST' or request.method == 'GET':
        data = json.loads(str(request.data, 'utf-8'))
        print(data)
        res = {"data" : [
            {
                "name": "burger",
                "price": 2.99,
            },
            {
                "name": "fries",
                "price": 1.99,
            },
            {
                "name": "chicken tenders",
                "price": 3.99,
            },
            {
                "name": "soft drink",
                "price": 1.59,
            },
            {
                "name": "ice cream",
                "price": 0.99,
            },
            {
                "name": "hot wings",
                "price": 7.99,
            },
            {
                "name": "salmon sushi",
                "price": 6.99,
            },
        ]}
    return res
# app = Flask(__name__)
