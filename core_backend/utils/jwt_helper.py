# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from datetime import timedelta

def generate_token(user_id, role):
    """Generate a JWT token with user ID and role"""
    token = create_access_token(
        identity={"id": str(user_id), "role": role},
        expires_delta=timedelta(hours=6)
    )
    return token
