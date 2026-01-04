import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";

import Packages from "../components/Packages";
import Weather from "../components/Weather";
import MapView from "../components/Mapview";
import Hotels from "../components/Hotels";
import Cars from "../components/Cars";

import "../styles/dashboard.css";

export default function Dashboard({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <div className="dashboard">
      <Sidebar onLogout={handleLogout} />

      <div className="dashboard-main">
        <Navbar />

        {/* STATS SECTION */}
        <div className="stats">
          <StatCard title="Total Trips" value="120" />
          <StatCard title="Bookings" value="85" />
          <StatCard title="Users" value="60" />
          <StatCard title="Revenue" value="$12,500" />
        </div>

        {/* CONTENT CARDS */}
        <div className="card">
          <h3>Packages</h3>
          <Packages />
        </div>

        <div className="card">
          <h3>Weather</h3>
          <Weather city="Karachi" />
        </div>

        <div className="card">
          <h3>City Map</h3>
          <MapView lat={24.8607} lng={67.0011} />
        </div>

        <div className="card">
          <Hotels />
        </div>

        <div className="card">
          <Cars />
        </div>
      </div>
    </div>
  );
}
