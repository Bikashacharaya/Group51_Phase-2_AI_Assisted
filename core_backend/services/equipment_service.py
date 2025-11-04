# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from models.equipment_model import EquipmentModel
from bson import ObjectId

class EquipmentService:
    """Encapsulates all equipment operations"""

    @staticmethod
    def get_all():
        items = EquipmentModel.get_all()
        for item in items:
            item["_id"] = str(item["_id"])
        return items

    @staticmethod
    def add_equipment(data):
        required = ["name", "category", "condition", "quantity"]
        if not all(k in data for k in required):
            raise ValueError("Missing fields")
        data["available"] = data["quantity"]
        EquipmentModel.insert(data)
        return True

    @staticmethod
    def update_equipment(equipment_id, updates):
        EquipmentModel.update(ObjectId(equipment_id), updates)
        return True

    @staticmethod
    def delete_equipment(equipment_id):
        EquipmentModel.delete(ObjectId(equipment_id))
        return True
