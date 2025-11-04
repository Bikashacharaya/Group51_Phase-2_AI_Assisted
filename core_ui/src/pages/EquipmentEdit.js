// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { apiGet, apiPut } from "../api/api";
import NotificationBar from "../components/NotificationBar";

export default function EquipmentEdit() {
  const { id } = useParams();
  const [form, setForm] = useState({ name: "", category: "", condition: "Good", quantity: 1 });
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    async function fetchEquipment() {
      try {
        const data = await apiGet(`/equipment/${id}`);
        setForm(data);
      } catch (err) {
        setMsg(err.response?.data?.error || "Failed to load equipment");
      } finally {
        setLoading(false);
      }
    }
    fetchEquipment();
  }, [id]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    try {
      await apiPut(`/equipment/${id}`, form);
      setMsg("✅ Equipment updated successfully!");
      setTimeout(() => nav("/dashboard"), 1500);
    } catch (err) {
      setMsg(err.response?.data?.error || "Update failed");
    }
  }

  if (loading) return <div>Loading equipment details…</div>;

  return (
    <div>
      <h3>Edit Equipment</h3>
      {msg && <NotificationBar message={msg} type="success" />}
      <form onSubmit={submit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
        />
        <select
          name="condition"
          value={form.condition}
          onChange={handleChange}
        >
          <option>Good</option>
          <option>Fair</option>
          <option>Poor</option>
        </select>
        <input
          type="number"
          name="quantity"
          min="1"
          value={form.quantity}
          onChange={handleChange}
        />
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
