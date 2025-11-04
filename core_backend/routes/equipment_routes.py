# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from services.equipment_service import EquipmentService

equipment_bp = Blueprint("equipment", __name__)

@equipment_bp.get("/")
@jwt_required()
def get_equipment():
    items = EquipmentService.get_all()
    return jsonify(items), 200


@equipment_bp.post("/")
@jwt_required()
def add_equipment():
    identity = get_jwt_identity()
    if identity["role"] != "admin":
        return jsonify({"error": "Unauthorized"}), 403
    data = request.get_json()
    EquipmentService.add_equipment(data)
    return jsonify({"message": "Equipment added successfully"}), 201


@equipment_bp.put("/<string:item_id>")
@jwt_required()
def update_equipment(item_id):
    identity = get_jwt_identity()
    if identity["role"] != "admin":
        return jsonify({"error": "Unauthorized"}), 403
    data = request.get_json()
    EquipmentService.update_equipment(item_id, data)
    return jsonify({"message": "Equipment updated successfully"}), 200


@equipment_bp.delete("/<string:item_id>")
@jwt_required()
def delete_equipment(item_id):
    identity = get_jwt_identity()
    if identity["role"] != "admin":
        return jsonify({"error": "Unauthorized"}), 403
    EquipmentService.delete_equipment(item_id)
    return jsonify({"message": "Equipment deleted"}), 200
