import Navbar from "../components/Navbar";
import Hero from "../components/hero";
import travelImg from "../assets/service.jpg";
import Footer from "../components/Footer";
import Trip from "../components/trip";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login"); // Redirect user to login page
  };

  return (
    <>
      <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={travelImg}
        title="Our Services"
        btnClass="hide"
      />

      <Trip />

      {/* Login prompt for more details */}
      <div
        onClick={handleLoginRedirect}
        style={{
          maxWidth: "600px",
          margin: "40px auto",
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#f5f5f5d5",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.02)";
          e.currentTarget.style.boxShadow = "0 4px 15px rgba(0,0,0,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        For more details about our packages, please{" "}
        <strong>Login</strong>
      </div>

      <Footer />
    </>
  );
}

export default Service;
