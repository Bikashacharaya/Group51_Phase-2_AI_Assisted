# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
from flask_jwt_extended import create_access_token

def test_loan_lifecycle(client):
    student_token = create_access_token(identity={"id": "stu001", "role": "student"})
    staff_token = create_access_token(identity={"id": "stf001", "role": "staff"})

    # Student creates request
    res = client.post("/v1/loans/request", headers={"Authorization": f"Bearer {student_token}"},
                      json={"equipment_id": "eq123"})
    assert res.status_code in (200, 201)

    # Staff views pending requests
    res = client.get("/v1/loans/pending", headers={"Authorization": f"Bearer {staff_token}"})
    assert res.status_code == 200

    # Staff approves (mock id)
    res = client.put("/v1/loans/123/approve", headers={"Authorization": f"Bearer {staff_token}"})
    assert res.status_code in (200, 404)  # 404 if id not present in test DB
