# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import Blueprint, jsonify, request
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.loan_service import LoanService

loan_bp = Blueprint("loan", __name__)

@loan_bp.post("/request")
@jwt_required()
def request_loan():
    user = get_jwt_identity()
    data = request.get_json()
    LoanService.create_request(user["id"], data["equipment_id"])
    return jsonify({"message": "Loan request submitted"}), 201


@loan_bp.get("/pending")
@jwt_required()
def get_pending():
    user = get_jwt_identity()
    if user["role"] not in ["staff", "admin"]:
        return jsonify({"error": "Unauthorized"}), 403
    loans = LoanService.get_pending()
    return jsonify(loans), 200


@loan_bp.put("/<string:loan_id>/approve")
@jwt_required()
def approve_loan(loan_id):
    user = get_jwt_identity()
    if user["role"] not in ["staff", "admin"]:
        return jsonify({"error": "Unauthorized"}), 403
    LoanService.approve_request(loan_id, user["id"])
    return jsonify({"message": "Loan approved"}), 200


@loan_bp.put("/<string:loan_id>/reject")
@jwt_required()
def reject_loan(loan_id):
    user = get_jwt_identity()
    if user["role"] not in ["staff", "admin"]:
        return jsonify({"error": "Unauthorized"}), 403
    LoanService.reject_request(loan_id)
    return jsonify({"message": "Loan rejected"}), 200


@loan_bp.put("/<string:loan_id>/return")
@jwt_required()
def return_loan(loan_id):
    user = get_jwt_identity()
    if user["role"] not in ["staff", "admin"]:
        return jsonify({"error": "Unauthorized"}), 403
    LoanService.mark_returned(loan_id)
    return jsonify({"message": "Loan marked as returned"}), 200


@loan_bp.get("/approved")
@jwt_required()
def approved_loans():
    user = get_jwt_identity()
    if user["role"] not in ["staff", "admin"]:
        return jsonify({"error": "Unauthorized"}), 403
    loans = LoanService.get_approved()
    return jsonify(loans), 200


@loan_bp.get("/my")
@jwt_required()
def my_loans():
    user = get_jwt_identity()
    loans = LoanService.get_by_user(user["id"])
    return jsonify(loans), 200
