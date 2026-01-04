// src/App.js
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Login from "./routes/login";
import Signup from "./routes/Signup";
import Packages from "./components/Packages";
import UserDashboard from "./routes/UserDashboard";
import AdminDashboard from "./routes/AdminDashboard";
import ForgotPassword from "./routes/ForgotPassword"; // New route

function App() {
  // Persistent login state
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || "");

  // Sync state with localStorage
  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("role", userRole);
    } else {
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("role");
      setUserRole(""); // reset role
    }
  }, [isLoggedIn, userRole]);

  return (
    <div className="App">
      <Router>
        {/* Navbar props */}
        <Navbar
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          setUserRole={setUserRole}
        />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} setUserRole={setUserRole} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} /> {/* New route */}

          {/* Protected Routes */}
          <Route
            path="/dashboard"
            element={
              isLoggedIn ? (
                userRole === "admin" ? (
                  <AdminDashboard setIsLoggedIn={setIsLoggedIn} />
                ) : (
                  <UserDashboard setIsLoggedIn={setIsLoggedIn} />
                )
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />

          <Route
            path="/packages"
            element={isLoggedIn ? <Packages /> : <Navigate to="/login" replace />}
          />

          {/* Catch-all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
