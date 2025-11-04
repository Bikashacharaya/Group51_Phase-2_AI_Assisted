# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "supersecretkey")
    JWT_SECRET_KEY = os.getenv("JWT_SECRET_KEY", "jwt-secret")
    MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017/equipment_lending_db")
    CORS_HEADERS = "Content-Type"
