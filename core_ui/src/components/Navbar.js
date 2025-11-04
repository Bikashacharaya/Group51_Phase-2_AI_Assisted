// AI-ASSISTED REFACTOR (ChatGPT – GPT-5)
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const nav = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    nav("/login");
  };

  return (
    <nav className="nav">
      <div className="left">
        <Link to="/dashboard" className="logo">EquipLend</Link>
      </div>
      <div className="right">
        {user ? (
          <>
            <span className="user">
              Hi, {user.username} ({user.role})
            </span>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/my-loans">My Loans</Link>
            {(user.role === "admin" || user.role === "staff") && (
              <>
                <Link to="/pending">Pending</Link>
                <Link to="/approved">Approved</Link>
              </>
            )}
            {user.role === "admin" && <Link to="/equipment/new">Add Item</Link>}
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
