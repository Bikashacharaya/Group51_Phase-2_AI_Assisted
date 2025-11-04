# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from models.user_model import UserModel

class AuthService:
    """Handles signup & login logic"""

    @staticmethod
    def register_user(data):
        required = ["username", "email", "password", "role"]
        if not all(k in data for k in required):
            raise ValueError("Missing required fields")
        return UserModel.create_user(data)

    @staticmethod
    def login_user(email, password):
        return UserModel.verify_user(email, password)
