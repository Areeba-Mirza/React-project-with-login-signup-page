// src/routes/ForgotPassword.js
import React, { useState } from "react";
import "./ForgotPassword.css"; // New CSS file

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleReset = () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="forgot-password-page">
      <div className="forgot-password-card">
        <h2 className="title">Forgot Password?</h2>
        <p className="subtitle">
          Enter your email address below and we'll send you a link to reset your password.
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="email-input"
        />
        <button className="reset-btn" onClick={handleReset}>
          Reset Password
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
