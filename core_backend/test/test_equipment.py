# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask_jwt_extended import create_access_token

def test_add_and_get_equipment(client):
    token = create_access_token(identity={"id": "adminid", "role": "admin"})
    headers = {"Authorization": f"Bearer {token}"}

    # Add new equipment
    res = client.post("/v1/equipment/", headers=headers, json={
        "name": "Microscope",
        "category": "Lab",
        "condition": "Good",
        "quantity": 3
    })
    assert res.status_code in (200, 201)

    # Fetch equipment list
    res = client.get("/v1/equipment/", headers=headers)
    data = res.get_json()
    assert res.status_code == 200
    assert isinstance(data, list)
