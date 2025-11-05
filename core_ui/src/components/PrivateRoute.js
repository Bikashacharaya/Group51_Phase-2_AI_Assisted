// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, roles }) {
  const user = JSON.parse(localStorage.getItem("user"));
  if (!user) return <Navigate to="/login" />;
  if (roles && !roles.includes(user.role)) return <Navigate to="/dashboard" />;
  return children;
}
