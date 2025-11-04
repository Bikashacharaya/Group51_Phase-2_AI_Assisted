// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import { apiPost } from "../api/api";
import { useNavigate } from "react-router-dom";
import NotificationBar from "../components/NotificationBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    try {
      const data = await apiPost("/auth/login", { email, password });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      nav("/dashboard");
    } catch (err) {
      setMsg(err.response?.data?.error || "Login failed");
    }
  }

  return (
    <div>
      <h3>Login</h3>
      {msg && <NotificationBar message={msg} type="error" />}
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
