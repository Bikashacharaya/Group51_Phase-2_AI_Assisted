// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import { apiPost } from "../api/api";
import { useNavigate } from "react-router-dom";
import NotificationBar from "../components/NotificationBar";

export default function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "", role: "student" });
  const [msg, setMsg] = useState("");
  const nav = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    try {
      await apiPost("/auth/signup", form);
      setMsg("✅ User created successfully");
      setTimeout(() => nav("/login"), 1200);
    } catch (err) {
      setMsg(err.response?.data?.error || "Signup failed");
    }
  }

  return (
    <div>
      <h3>Signup</h3>
      {msg && <NotificationBar message={msg} type="success" />}
      <form onSubmit={submit}>
        <input name="username" placeholder="Username" onChange={handleChange} value={form.username} />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} value={form.email} />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} value={form.password} />
        <select name="role" onChange={handleChange} value={form.role}>
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
