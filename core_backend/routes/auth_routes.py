# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import Blueprint, request, jsonify
from services.auth_service import AuthService
from utils.jwt_helper import generate_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.post("/signup")
def signup():
    data = request.get_json()
    try:
        user = AuthService.register_user(data)
        if not user:
            return jsonify({"error": "Email already exists"}), 400
        return jsonify({"message": "User registered successfully"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@auth_bp.post("/login")
def login():
    data = request.get_json()
    try:
        user = AuthService.login_user(data["email"], data["password"])
        if not user:
            return jsonify({"error": "Invalid credentials"}), 401
        token = generate_token(user["_id"], user["role"])
        return jsonify({
            "token": token,
            "user": {
                "id": str(user["_id"]),
                "username": user["username"],
                "role": user["role"]
            }
        }), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500
