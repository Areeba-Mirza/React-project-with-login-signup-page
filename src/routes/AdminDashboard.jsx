import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  LineChart, Line
} from "recharts";

const AdminDashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  // Dummy data for charts
  const bookingData = [
    { month: "Jan", Bookings: 30, Revenue: 5000 },
    { month: "Feb", Bookings: 45, Revenue: 7000 },
    { month: "Mar", Bookings: 60, Revenue: 8000 },
    { month: "Apr", Bookings: 40, Revenue: 6000 },
  ];

  const stats = [
    { title: "Total Users", value: "350" },
    { title: "Total Bookings", value: "120" },
    { title: "Packages", value: "24" },
    { title: "Revenue", value: "$18k" },
  ];

  const recentBookings = [
    { user: "Ali", pkg: "Hunza Tour", status: "Confirmed" },
    { user: "Sara", pkg: "Skardu Trip", status: "Pending" },
  ];

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ marginBottom: "20px" }}>Admin Dashboard 👩‍💼</h1>

      {/* STATS CARDS */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {stats.map((item) => (
          <div
            key={item.title}
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              width: "200px",
              textAlign: "center",
              transition: "transform 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h4 style={{ color: "#888", marginBottom: "10px" }}>{item.title}</h4>
            <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>{item.value}</h2>
          </div>
        ))}
      </div>

      {/* CHARTS */}
      <div style={{ display: "flex", gap: "30px", marginTop: "40px", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: "300px", height: "300px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ marginBottom: "10px" }}>Monthly Bookings</h3>
          <ResponsiveContainer width="100%" height="80%">
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Bookings" fill="#4e73df" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ flex: 1, minWidth: "300px", height: "300px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <h3 style={{ marginBottom: "10px" }}>Revenue Trends</h3>
          <ResponsiveContainer width="100%" height="80%">
            <LineChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Revenue" stroke="#e74c3c" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RECENT BOOKINGS TABLE */}
      <div style={{ marginTop: "40px", background: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "15px" }}>Recent Bookings</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "center" }}>
          <thead style={{ background: "#2c3e50", color: "#fff" }}>
            <tr>
              <th style={{ padding: "10px" }}>User</th>
              <th>Package</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.map((row, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: "10px" }}>{row.user}</td>
                <td>{row.pkg}</td>
                <td style={{ color: row.status === "Confirmed" ? "green" : "orange" }}>{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button
        onClick={logout}
        style={{
          marginTop: "30px",
          padding: "10px 20px",
          background: "#e74c3c",
          border: "none",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#c0392b")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#e74c3c")}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminDashboard;
