# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask_pymongo import PyMongo
from flask_jwt_extended import JWTManager
from flask_cors import CORS

mongo = PyMongo()
jwt = JWTManager()

def init_extensions(app):
    CORS(app)
    mongo.init_app(app)
    jwt.init_app(app)
