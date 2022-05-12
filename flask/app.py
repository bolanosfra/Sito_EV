from flask import Flask, request, jsonify, Response
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from bson import json_util
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://sac:Camera1@cluster0-shard-00-00.x1eis.mongodb.net:27017,cluster0-shard-00-01.x1eis.mongodb.net:27017,cluster0-shard-00-02.x1eis.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-20bimn-shard-0&authSource=admin&retryWrites=true&w=majority"

mongo = PyMongo(app)

# Per rispondere alle chiamate cross origin
CORS(app)
api = API(app)

@app.route("/dati")
def get():
        uss = mongo.db.geoStazioni.find()
        resp = json_util.dumps(uss)
        return Response(resp, mimetype = 'application/json') 

@app.route('/')
def index():
    return "HOME"

if __name__ == '__main__':
    app.run()