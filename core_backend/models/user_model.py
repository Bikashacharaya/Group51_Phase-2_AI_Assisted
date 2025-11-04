# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import current_app
from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    """Handles CRUD operations for Users collection"""

    @staticmethod
    def create_user(data):
        db = current_app.mongo.db
        existing = db.users.find_one({"email": data["email"]})
        if existing:
            return None
        data["password"] = generate_password_hash(data["password"])
        db.users.insert_one(data)
        return data

    @staticmethod
    def verify_user(email, password):
        db = current_app.mongo.db
        user = db.users.find_one({"email": email})
        if user and check_password_hash(user["password"], password):
            return user
        return None
