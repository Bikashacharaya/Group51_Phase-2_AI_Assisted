// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { apiPut } from "../api/api";
import NotificationBar from "../components/NotificationBar";

export default function PendingRequests() {
  const { data: requests, loading, setData } = useFetch("/loans/pending");
  const [msg, setMsg] = useState("");

  async function handleAction(id, action) {
    try {
      await apiPut(`/loans/${id}/${action}`);
      setMsg(`✅ Request ${action}ed`);
      setData((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      setMsg(err.response?.data?.error || "Action failed");
    }
  }

  if (loading) return <div>Loading requests…</div>;

  return (
    <div>
      <h2>Pending Requests</h2>
      {msg && <NotificationBar message={msg} type="success" />}
      <table className="table">
        <thead><tr><th>ID</th><th>User</th><th>Equipment</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {requests.length === 0 && <tr><td colSpan="5">No pending requests</td></tr>}
          {requests.map((r) => (
            <tr key={r._id}>
              <td>{r._id}</td>
              <td>{r.user_id}</td>
              <td>{r.equipment_id}</td>
              <td>{r.status}</td>
              <td>
                <button onClick={() => handleAction(r._id, "approve")}>Approve</button>
                <button onClick={() => handleAction(r._id, "reject")}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
