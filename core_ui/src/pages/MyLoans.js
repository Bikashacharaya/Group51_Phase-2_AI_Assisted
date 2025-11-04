// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React from "react";
import useFetch from "../hooks/useFetch";

export default function MyLoans() {
  const { data: loans, loading, error } = useFetch("/loans/my");

  if (loading) return <div>Loading your loans…</div>;
  if (error) return <div>❌ Error loading loans</div>;

  return (
    <div>
      <h2>My Loan Requests</h2>
      <table className="table">
        <thead><tr><th>ID</th><th>Equipment</th><th>Status</th><th>Request Date</th><th>Return Date</th></tr></thead>
        <tbody>
          {loans.length === 0 && <tr><td colSpan="5">No loans found</td></tr>}
          {loans.map((l) => (
            <tr key={l._id}>
              <td>{l._id}</td>
              <td>{l.equipment_id}</td>
              <td>{l.status}</td>
              <td>{new Date(l.request_date).toLocaleDateString()}</td>
              <td>{l.return_date ? new Date(l.return_date).toLocaleDateString() : "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
