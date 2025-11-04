// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { apiPut } from "../api/api";
import NotificationBar from "../components/NotificationBar";

export default function ApprovedLoans() {
  const { data: loans, loading, setData } = useFetch("/loans/approved");
  const [msg, setMsg] = useState("");

  async function markReturned(id) {
    try {
      await apiPut(`/loans/${id}/return`);
      setMsg("✅ Loan marked returned");
      setData((prev) => prev.filter((l) => l._id !== id));
    } catch (err) {
      setMsg(err.response?.data?.error || "Failed to mark returned");
    }
  }

  if (loading) return <div>Loading approved loans…</div>;

  return (
    <div>
      <h2>Approved Loans</h2>
      {msg && <NotificationBar message={msg} type="success" />}
      <table className="table">
        <thead><tr><th>ID</th><th>Equipment</th><th>User</th><th>Approved By</th><th>Date</th><th>Actions</th></tr></thead>
        <tbody>
          {loans.length === 0 && <tr><td colSpan="6">No approved loans</td></tr>}
          {loans.map((l) => (
            <tr key={l._id}>
              <td>{l._id}</td>
              <td>{l.equipment_id}</td>
              <td>{l.user_id}</td>
              <td>{l.approved_by}</td>
              <td>{new Date(l.approved_date).toLocaleDateString()}</td>
              <td><button onClick={() => markReturned(l._id)}>Mark Returned</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
