// AI-ASSISTED SECTION (Generated using ChatGPT – GPT-5)
import React from "react";

export default function NotificationBar({ message, type = "info" }) {
  if (!message) return null;
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
}
