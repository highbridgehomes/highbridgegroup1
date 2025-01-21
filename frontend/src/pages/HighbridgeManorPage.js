import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt, FaWater, FaLock, FaLightbulb, FaRoad, FaHome } from "react-icons/fa"; // Icons for features

const HighbridgeManorPage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/highbridge-manor-main.jpg"
  );

  const smallImages = [
    "/assets/images/highbridge-manor-1.jpg",
    "/assets/images/highbridge-manor-2.jpg",
    "/assets/images/highbridge-manor-3.jpg",
    "/assets/images/highbridge-manor-main.jpg",
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
          <h6>Highbridge Manor</h6>
          <h4>Residential Freehold</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            400sqm: ₦5,000,000 (0-6 months outrightly)
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> London Road, Odo-Iragushi, Epe</span>
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

          <h4 style={{ marginTop: "20px" }}>Features</h4>
          <ul>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Good Road Networks
            </li>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#1E90FF" }} />
              Running Water
            </li>
            <li>
              <FaLightbulb style={{ marginRight: "8px", color: "#FFD700" }} />
              Street Lights
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Security
            </li>
            <li>
              <FaHome style={{ marginRight: "8px", color: "#8A2BE2" }} />
              Gated Estate
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Good Location
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Dangote Refinery
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Resort & Spa
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Jubilee Chalets, Epe
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki International Airport
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Highbridge Manor offers premium residential plots in the prime
            location of Odo-Iragushi, Epe. The estate is designed with modern
            infrastructure, including good road networks, running water,
            security, and street lights. Its proximity to landmarks like the
            Dangote Refinery and Lekki International Airport makes it an
            excellent investment opportunity. Secure your plot today!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeManorPage;