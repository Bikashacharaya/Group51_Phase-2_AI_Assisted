# AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
def test_signup_and_login_flow(client):
    # Signup
    res = client.post("/v1/auth/signup", json={
        "username": "tester",
        "email": "tester@example.com",
        "password": "12345",
        "role": "student"
    })
    assert res.status_code in (200, 201)

    # Login
    res = client.post("/v1/auth/login", json={
        "email": "tester@example.com",
        "password": "12345"
    })
    data = res.get_json()
    assert res.status_code == 200
    assert "token" in data
    assert data["user"]["role"] == "student"
