# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import Flask
from config import Config
from extensions import init_extensions, mongo
from routes.auth_routes import auth_bp
from routes.equipment_routes import equipment_bp
from routes.loan_routes import loans_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    init_extensions(app)

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/v1/auth")
    app.register_blueprint(equipment_bp, url_prefix="/v1/equipment")
    app.register_blueprint(loans_bp, url_prefix="/v1/loans")

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(debug=True, host="0.0.0.0", port=18080)
