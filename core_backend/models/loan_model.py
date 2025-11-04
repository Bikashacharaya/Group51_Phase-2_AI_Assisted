# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import current_app
from datetime import datetime

class LoanModel:
    """CRUD for loan collection"""

    @staticmethod
    def create_loan(data):
        data["status"] = "PENDING"
        data["request_date"] = datetime.utcnow()
        current_app.mongo.db.loans.insert_one(data)
        return data

    @staticmethod
    def get_pending():
        return list(current_app.mongo.db.loans.find({"status": "PENDING"}))

    @staticmethod
    def update_status(loan_id, status, extra_fields=None):
        update_data = {"status": status}
        if extra_fields:
            update_data.update(extra_fields)
        current_app.mongo.db.loans.update_one({"_id": loan_id}, {"$set": update_data})
        return True
