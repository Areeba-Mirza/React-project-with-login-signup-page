// src/components/BookingForm.js
import React, { useState } from "react";

export default function BookingForm({ packageName }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    package: packageName
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Booking Successful!");
      } else {
        alert("Booking Failed!");
      }
    } catch (err) {
      console.error(err);
      alert("Error connecting to server!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 style={{ marginBottom: "10px" }}>Book: {packageName}</h2>
      <input name="name" placeholder="Your Name" onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "5px 0" }} />
      <input name="email" placeholder="Your Email" type="email" onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "5px 0" }} />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "5px 0" }} />
      <input name="date" type="date" onChange={handleChange} required style={{ width: "100%", padding: "8px", margin: "5px 0" }} />
      <button type="submit" style={{ padding: "10px 15px", backgroundColor: "#4CAF50", color: "#fff", border: "none", borderRadius: "5px", width: "100%", marginTop: "10px" }}>Submit Booking</button>
    </form>
  );
}
