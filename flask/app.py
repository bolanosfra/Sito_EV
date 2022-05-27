from flask import Flask, request, jsonify, Response
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from bson import json_util
from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://sac:Camera1@cluster0-shard-00-00.x1eis.mongodb.net:27017,cluster0-shard-00-01.x1eis.mongodb.net:27017,cluster0-shard-00-02.x1eis.mongodb.net:27017/Progetto_Sito?ssl=true&replicaSet=atlas-20bimn-shard-0&authSource=admin&retryWrites=true&w=majority"

mongo = PyMongo(app)
CORS(app)

@app.route('/')
def get():
    uss = mongo.db.Stazioni.find()
    resp = json_util.dumps(uss)
    return Response(resp, mimetype='application/json')

@app.route('/search/<string>', methods=['GET'])
def onedata(string):
    # Il metodo 'GET' 
    if request.method == 'GET':
        data = mongo.db.Stazioni.find({'$or': [{"Station_Name": string}, {"City": string}]})
        # data = mongo.db.Stazioni.find({'$and': [{'$or': [{"Station_Name": string}, {"City": string}]}, {'$or': [{"State": string}, {"EV_Network": string}]}]})
        resp = json_util.dumps(data)
        return Response(resp, mimetype = 'application/json')

if __name__ == '__main__':
    app.run()