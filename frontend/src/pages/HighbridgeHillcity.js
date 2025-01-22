import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt, FaShieldAlt, FaRoad, FaFaucet, FaLightbulb } from "react-icons/fa";

const HighbridgeHillcity = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/soldout/hilcity.jpg"
  );

  const smallImages = [
    "/assets/images/soldout/hilcity-1.jpg",
    "/assets/images/soldout/hilcity-2.jpg",
    "/assets/images/soldout/hilcity-3.jpg",
    "/assets/images/soldout/hilcity.jpg",
  ];

  const handleImageClick = (img) => {
    setMainImg(img);
  };

  return (
    <>
      <Navbar />
      <section
        id="propertydetails"
        style={{
          display: "flex",
          flexWrap: "wrap",
          color: "#000",
          padding: "20px",
          gap: "20px",
        }}
      >
        {/* Main Image Preview */}
        <div
          className="single-pro-image"
          style={{
            flex: "1 1 400px",
            maxWidth: "400px",
            margin: "0 auto",
          }}
        >
          <img
            src={mainImg}
            alt="Main Preview"
            style={{
              width: "100%",
              maxHeight: "300px",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />

          {/* Small Image Thumbnails */}
          <div
            className="small-img-group"
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            {smallImages.map((img, index) => (
              <div
                className="small-img-col"
                key={index}
                onClick={() => handleImageClick(img)}
                style={{
                  cursor: "pointer",
                  flex: "1 1 80px",
                  maxWidth: "80px",
                }}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index}`}
                  style={{
                    width: "100%",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Property Details */}
        <div
          className="single-pro-details"
          style={{
            flex: "1 1 300px",
            minWidth: "300px",
          }}
        >
          <h6>Highbridge Hillcity 2 Estate</h6>
          <h4>Prime Land Investment Opportunity</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px", marginBottom: "20px" }}>
        SOLDOUT
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Opp. Goshen Church, Off Abuja-Lafia Expressway, Abuja</span>
          </div>

          <button
            onClick={() => (window.location.href = "/contact")}
            style={{
              padding: "10px 20px",
              background: "green",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            Contact Agent
          </button>

          <h4 style={{ marginTop: "20px" }}>Pricing</h4>
          <ul>
            <li>300sqm: ₦499,000</li>
            <li>400sqm: ₦599,000</li>
            <li>500sqm: ₦699,000</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Features</h4>
          <ul>
            <li><FaShieldAlt style={{ marginRight: "8px", color: "#FFD700" }} /> 24/7 Security Surveillance</li>
            <li><FaRoad style={{ marginRight: "8px", color: "#32CD32" }} /> Motorable Road Network</li>
            <li><FaFaucet style={{ marginRight: "8px", color: "#1E90FF" }} /> Potable Water</li>
            <li><FaLightbulb style={{ marginRight: "8px", color: "#FFA500" }} /> Street Lights</li>
            <li><FaShieldAlt style={{ marginRight: "8px", color: "#FFD700" }} /> Perimeter Fencing</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Anticipate the comfort, the value, the excitement, and the future at HIGHBRIDGE HILLCITY 2 ESTATE, Abuja. This oasis in the making is a safe haven for smart, diligent, and pacesetting investors. Act now to secure your piece of this prime opportunity.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeHillcity;