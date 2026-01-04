import React from "react";
import { useNavigate } from "react-router-dom";
import Packages from "../components/Packages";
import Weather from "../components/Weather";
import MapView from "../components/Mapview";
import Hotels from "../components/Hotels";
import Cars from "../components/Cars";

const Dashboard = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };

  // ================= STYLES =================
  const sidebarStyle = {
    width: "220px",
    background: "#2c3e50",
    color: "#fff",
    minHeight: "100vh",
    padding: "20px",
    position: "fixed",
    top: 0,
    left: 0,
  };

  const sidebarItemStyle = {
    padding: "10px 15px",
    cursor: "pointer",
    marginBottom: "10px",
    borderRadius: "5px",
  };

  const mainContentStyle = {
    marginLeft: "240px",
    padding: "20px",
    background: "#f4f6f8",
    minHeight: "100vh",
  };

  const cardStyle = {
    background: "#fff",
    borderRadius: "10px",
    padding: "20px",
    marginBottom: "25px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  };

  // ================= JSX =================
  return (
    <div>
      {/* ================= SIDEBAR ================= */}
      <aside style={sidebarStyle}>
        <h2 style={{ marginBottom: "30px" }}>Travel Dashboard</h2>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("dashboard")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Dashboard
        </div>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("packages")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Packages
        </div>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("weather")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Weather
        </div>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("map")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Map
        </div>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("hotels")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Hotels
        </div>

        <div
          style={sidebarItemStyle}
          onClick={() =>
            document
              .getElementById("cars")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          Cars
        </div>

        <button
          onClick={handleLogout}
          style={{
            marginTop: "30px",
            width: "100%",
            padding: "10px",
            background: "#e74c3c",
            border: "none",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main style={mainContentStyle}>

        {/* ===== DASHBOARD HOME ===== */}
        <div id="dashboard" style={{ marginBottom: "30px" }}>

          {/* HERO BANNER */}
          <div
            style={{
              height: "280px",
              background:
                "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "15px",
              color: "#fff",
              padding: "40px",
              marginBottom: "30px",
            }}
          >
            <h1 style={{ fontSize: "38px" }}>Travel Dashboard</h1>
            <p style={{ fontSize: "18px", maxWidth: "500px" }}>
              Manage tours, bookings, customers and destinations
            </p>
          </div>

          {/* SUMMARY CARDS */}
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginBottom: "30px",
            }}
          >
            {[
              { title: "Total Tours", value: "24" },
              { title: "Bookings", value: "120+" },
              { title: "Customers", value: "350+" },
              { title: "Revenue", value: "$18k" },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  flex: "1",
                  minWidth: "200px",
                  background: "#fff",
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
                }}
              >
                <h4 style={{ color: "#777" }}>{item.title}</h4>
                <h2>{item.value}</h2>
              </div>
            ))}
          </div>

          {/* SIMPLE CHART */}
          <div style={cardStyle}>
            <h2>Monthly Bookings</h2>

            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "15px",
                height: "140px",
                marginTop: "20px",
              }}
            >
              {[40, 70, 55, 90, 60, 110].map((val, i) => (
                <div
                  key={i}
                  style={{
                    width: "40px",
                    height: `${val}px`,
                    background: "#3498db",
                    borderRadius: "5px",
                    color: "#fff",
                    fontSize: "12px",
                    textAlign: "center",
                  }}
                >
                  {val}
                </div>
              ))}
            </div>

            <p style={{ marginTop: "10px", color: "#777" }}>
              Jan – Jun booking overview
            </p>
          </div>
        </div>

        {/* ===== OTHER SECTIONS ===== */}
        <div id="packages" style={cardStyle}>
          <h2>Packages</h2>
          <Packages />
        </div>

        <div id="weather" style={cardStyle}>
          <h2>Weather</h2>
          <Weather city="Karachi" />
        </div>

        <div id="map" style={cardStyle}>
          <h2>City Map</h2>
          <MapView lat={24.8607} lng={67.0011} />
        </div>

        <div id="hotels" style={cardStyle}>
          <h2>Hotels</h2>
          <Hotels />
        </div>

        <div id="cars" style={cardStyle}>
          <h2>Cars</h2>
          <Cars />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
