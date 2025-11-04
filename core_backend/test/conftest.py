# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import pytest
from app import create_app
from config import Config

class TestConfig(Config):
    TESTING = True
    MONGO_URI = "mongodb://localhost:27017/test_equipment_lending"
    JWT_SECRET_KEY = "test-jwt-secret"

@pytest.fixture()
def client(monkeypatch):
    """Create a test client with an isolated MongoDB."""
    app = create_app()
    app.config.from_object(TestConfig)
    with app.test_client() as client:
        yield client
