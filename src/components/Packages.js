// src/components/Packages.js
import React, { useState } from "react";
import BookingForm from "./BookingForm"; // ✅ Naya component jo form handle karega

// ✅ Images
import skardu from "../assets/skardu.jpeg";
import fairy from "../assets/fairy.jpeg";
import neelum from "../assets/neelum.jpeg";
import kumrat from "../assets/kumrat.jpeg";
import hunzaSkardu from "../assets/hunza-skardu.jpeg";
import hunza from "../assets/hunza.jpeg";
import swat from "../assets/images1.jpg";
import naran from "../assets/naran.jpeg";

// ✅ Packages data
const packagesData = [
  { title: "SKARDU VALLEY", days: "06 Days Trip", priceSingle: "PKR 30,000/-", priceCouple: "PKR 70,000/-", departure: "DEPARTURE: EVERY MONDAY NIGHT", img: skardu },
  { title: "FAIRY MEADOWS", days: "05 Days Trip", priceSingle: "PKR 25,000/-", priceCouple: "PKR 60,000/-", departure: "DEPARTURE: EVERY TUESDAY & FRIDAY NIGHT", img: fairy },
  { title: "NEELUM VALLEY", days: "03 Days Trip", priceSingle: "PKR 15,500/-", priceCouple: "PKR 36,000/-", departure: "DEPARTURE: EVERY MONDAY & THURSDAY NIGHT", img: neelum },
  { title: "KUMRAT VALLEY", days: "03 Days Trip", priceSingle: "PKR 15,500/-", priceCouple: "PKR 36,000/-", departure: "DEPARTURE: EVERY THURSDAY NIGHT", img: kumrat },
  { title: "HUNZA + SKARDU", days: "08 Days Trip", priceSingle: "PKR 35,000/-", priceCouple: "PKR 80,000/-", departure: "DEPARTURE: EVERY FRIDAY NIGHT", img: hunzaSkardu },
  { title: "HUNZA VALLEY", days: "05 Days Trip", priceSingle: "PKR 25,000/-", priceCouple: "PKR 60,000/-", departure: "DEPARTURE: EVERY TUESDAY & FRIDAY NIGHT", img: hunza },
  { title: "SWAT KALAM", days: "03 Days Trip", priceSingle: "PKR 15,500/-", priceCouple: "PKR 36,000/-", departure: "DEPARTURE: EVERY MONDAY NIGHT", img: swat },
  { title: "NARAN VALLEY", days: "03 Days Trip", priceSingle: "PKR 15,500/-", priceCouple: "PKR 36,000/-", departure: "DEPARTURE: EVERY THURSDAY NIGHT", img: naran }
];

export default function Packages() {
  const [showForm, setShowForm] = useState(false); // ✅ Form show/hide
  const [selectedPackage, setSelectedPackage] = useState(""); // ✅ Kaunsa package book ho raha

  const handleBookNow = (pkg) => {
    setSelectedPackage(pkg.title);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div className="packages-page" style={{ padding: "20px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "10px" }}>ADVENTURE SPOT</h1>
      <h2 style={{ textAlign: "center", marginBottom: "40px", color: "#555" }}>Explore Your Trip</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {packagesData.map((pkg, i) => (
          <div key={i} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            background: "#fff"
          }}>
            <img src={pkg.img} alt={pkg.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />

            <div style={{ padding: "15px" }}>
              <h3 style={{ margin: "5px 0" }}>{pkg.title}</h3>
              <p style={{ margin: "5px 0" }}>{pkg.days}</p>
              <p style={{ margin: "5px 0" }}>Per Person: {pkg.priceSingle}</p>
              <p style={{ margin: "5px 0" }}>Couple: {pkg.priceCouple}</p>
              <p style={{ margin: "5px 0", fontWeight: "bold", color: "#333" }}>{pkg.departure}</p>
              <button 
                style={{
                  marginTop: "10px",
                  padding: "10px 15px",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  width: "100%"
                }}
                onClick={() => handleBookNow(pkg)}
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Booking Form Modal */}
      {showForm && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            width: "400px",
            position: "relative"
          }}>
            <button onClick={closeForm} style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "red",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              cursor: "pointer"
            }}>X</button>

            <BookingForm packageName={selectedPackage} />
          </div>
        </div>
      )}
    </div>
  );
}
