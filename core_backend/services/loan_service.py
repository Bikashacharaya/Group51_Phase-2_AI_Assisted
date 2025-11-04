# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from models.loan_model import LoanModel
from models.equipment_model import EquipmentModel
from bson import ObjectId
from datetime import datetime

class LoanService:
    """Handles loan workflows"""

    @staticmethod
    def create_request(user_id, equipment_id):
        equipment = EquipmentModel.get_by_id(ObjectId(equipment_id))
        if not equipment or equipment["available"] <= 0:
            raise ValueError("Equipment unavailable")

        LoanModel.create_loan({
            "equipment_id": ObjectId(equipment_id),
            "user_id": ObjectId(user_id)
        })
        EquipmentModel.update(ObjectId(equipment_id), {"available": equipment["available"] - 1})
        return True

    @staticmethod
    def get_pending():
        loans = LoanModel.get_pending()
        for l in loans:
            l["_id"] = str(l["_id"])
        return loans

    @staticmethod
    def approve_request(loan_id, approver_id):
        LoanModel.update_status(ObjectId(loan_id), "APPROVED", {
            "approved_by": ObjectId(approver_id),
            "approved_date": datetime.utcnow()
        })
        return True

    @staticmethod
    def reject_request(loan_id):
        LoanModel.update_status(ObjectId(loan_id), "REJECTED")
        return True

    @staticmethod
    def mark_returned(loan_id):
        LoanModel.update_status(ObjectId(loan_id), "RETURNED", {"return_date": datetime.utcnow()})
        return True

    @staticmethod
    def get_approved():
        from flask import current_app
        return list(current_app.mongo.db.loans.find({"status": "APPROVED"}))

    @staticmethod
    def get_by_user(user_id):
        from flask import current_app
        loans = list(current_app.mongo.db.loans.find({"user_id": ObjectId(user_id)}))
        for l in loans:
            l["_id"] = str(l["_id"])
        return loans
