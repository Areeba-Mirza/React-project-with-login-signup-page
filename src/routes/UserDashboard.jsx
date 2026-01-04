// src/routes/UserDashboard.js
import React from "react";
import Dashboard from "./Dashboard";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, ResponsiveContainer } from "recharts";

const sampleData = [
  { name: "Jan", bookings: 30, revenue: 400 },
  { name: "Feb", bookings: 20, revenue: 300 },
  { name: "Mar", bookings: 27, revenue: 500 },
  { name: "Apr", bookings: 18, revenue: 200 },
];

const UserDashboard = ({ setIsLoggedIn }) => {
  return (
    <Dashboard setIsLoggedIn={setIsLoggedIn}>
      <div style={{ padding: "20px" }}>
        <h2>Welcome Back, User!</h2>

        <div style={{ display: "flex", gap: "30px", flexWrap: "wrap", marginTop: "20px" }}>
          {/* Bar Chart */}
          <div style={{ flex: 1, minWidth: "300px", height: "300px", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h4>Monthly Bookings</h4>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="bookings" fill="#4CAF50" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Line Chart */}
          <div style={{ flex: 1, minWidth: "300px", height: "300px", background: "#fff", padding: "20px", borderRadius: "12px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <h4>Revenue Trend</h4>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={sampleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="revenue" stroke="#2196F3" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </Dashboard>
  );
};

export default UserDashboard;

