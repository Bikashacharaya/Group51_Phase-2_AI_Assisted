# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask import current_app

class EquipmentModel:
    """CRUD for equipment collection"""

    @staticmethod
    def get_all():
        return list(current_app.mongo.db.equipment.find())

    @staticmethod
    def get_by_id(equipment_id):
        return current_app.mongo.db.equipment.find_one({"_id": equipment_id})

    @staticmethod
    def insert(data):
        current_app.mongo.db.equipment.insert_one(data)
        return data

    @staticmethod
    def update(equipment_id, updates):
        current_app.mongo.db.equipment.update_one({"_id": equipment_id}, {"$set": updates})
        return True

    @staticmethod
    def delete(equipment_id):
        current_app.mongo.db.equipment.delete_one({"_id": equipment_id})
        return True
