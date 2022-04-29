from flask import Flask, request, jsonify, Response
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from bson import json_util
import pandas as pd

from flask_pymongo import PyMongo

app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://sac:Camera1@cluster0-shard-00-00.x1eis.mongodb.net:27017,cluster0-shard-00-01.x1eis.mongodb.net:27017,cluster0-shard-00-02.x1eis.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-20bimn-shard-0&authSource=admin&retryWrites=true&w=majority"

mongo = PyMongo(app)

CORS(app)
api = Api(app)

class UsersApi(Resource):
    def get(self):
        uss = mongo.db.Stations.find()
        resp = json_util.dumps(uss)
        return Response(resp, mimetype = 'application/json') 
    def post(self):
        user = request.json["user"]
        informatica = request.json["informatica"]
        matematica = request.json["matematica"]
        arte = request.json["arte"]
        if user and informatica and matematica and arte:
            id = mongo.db.Prova1.insert_one(
                {
                'user': user,
                'informatica': informatica,
                'matematica': matematica,
                'arte': arte 
                }
            )
            resp = {
                "id" : str(id),
                'user': user,
                'informatica': informatica,
                'matematica': matematica,
                'arte': arte 
            }
            return resp
        else:
            return {'message': 'received'}

api.add_resource(UsersApi, '/users')


class UsersRecommendation(Resource):
    def get(self):
        uss = mongo.db.Prova1.find()
        resp = json_util.dumps(uss)
        return Response(resp, mimetype = 'application/json') 
    def post(self):
        user = request.json["user"]
        informatica = request.json["informatica"]
        matematica = request.json["matematica"]
        arte = request.json["arte"]
        if user and informatica and matematica and arte:
            id = mongo.db.Prova1.insert_one(
                {
                'user': user,
                'informatica': informatica,
                'matematica': matematica,
                'arte': arte 
                }
            )
            resp = {
                "id" : str(id),
                'user': user,
                'informatica': informatica,
                'matematica': matematica,
                'arte': arte 
            }
            userdata = pd.DataFrame(data=resp, index=[0])
            result = mongo.db.tabella.find()
            tab = pd.DataFrame(list(result))
            userdata = userdata.drop('user',axis= 1)
            userProfile = userdata.transpose()
            userProfile = userProfile.iloc[1: , :]
            userProfile = userProfile.squeeze()
            genreTable = tab.set_index(tab['idScuola'])
            #And drop the unnecessary information
            #And drop the unnecessary information
            genreTable = tab.drop('scuola', axis=1).drop('idScuola', axis=1).drop("orientation" , axis=1)
            recommendationTable_df = ((genreTable*userProfile.astype(float)).sum(axis=1))/(userProfile.astype(float).sum())
            recommendationTable_df = recommendationTable_df.sort_values(ascending=False)
            #Just a peek at the values
            c = recommendationTable_df.index[0]
            #The final recommendation table
            df2 = tab[tab['idScuola'] == c].drop("_id" , axis=1)
            result = {}
            for index, row in df2.iterrows():
                #result[index] = row.to_json() 
                result[index] = dict(row)
            return result


api.add_resource(UsersRecommendation, '/usersRec')

if __name__ == '__main__':
    app.run()