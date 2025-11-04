// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import { apiPost } from "../api/api";
import NotificationBar from "../components/NotificationBar";

export default function EquipmentForm() {
  const [form, setForm] = useState({ name: "", category: "", condition: "Good", quantity: 1 });
  const [msg, setMsg] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    try {
      await apiPost("/equipment", form);
      setMsg("✅ Equipment added successfully");
      setForm({ name: "", category: "", condition: "Good", quantity: 1 });
    } catch (err) {
      setMsg(err.response?.data?.error || "Failed to add equipment");
    }
  }

  return (
    <div>
      <h3>Add Equipment</h3>
      {msg && <NotificationBar message={msg} type="success" />}
      <form onSubmit={submit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="category" placeholder="Category" value={form.category} onChange={handleChange} required />
        <select name="condition" value={form.condition} onChange={handleChange}>
          <option>Good</option><option>Fair</option><option>Poor</option>
        </select>
        <input type="number" name="quantity" min="1" value={form.quantity} onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
