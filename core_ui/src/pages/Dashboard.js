// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { apiPost } from "../api/api";
import NotificationBar from "../components/NotificationBar";

export default function Dashboard() {
  const { data: items, loading, error, setData } = useFetch("/equipment");
  const [msg, setMsg] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  async function requestLoan(id) {
    try {
      await apiPost("/loans/request", { equipment_id: id });
      setMsg("✅ Loan request submitted");
    } catch (err) {
      setMsg(err.response?.data?.error || "Request failed");
    }
  }

  if (loading) return <div>Loading equipment…</div>;
  if (error) return <div>❌ Error loading equipment</div>;

  return (
    <div>
      <h2>Equipment Dashboard</h2>
      {msg && <NotificationBar message={msg} type="success" />}
      <table className="table">
        <thead>
          <tr>
            <th>Name</th><th>Category</th><th>Condition</th>
            <th>Qty</th><th>Available</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 && <tr><td colSpan="6">No equipment available</td></tr>}
          {items.map(it => (
            <tr key={it._id}>
              <td>{it.name}</td>
              <td>{it.category}</td>
              <td>{it.condition}</td>
              <td>{it.quantity}</td>
              <td>{it.available}</td>
              <td>
                {user.role === "student" && it.available > 0 &&
                  <button onClick={() => requestLoan(it._id)}>Request</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
