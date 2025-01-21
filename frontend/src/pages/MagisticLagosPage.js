import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import {
  FaCar,
  FaLock,
  FaRoad,
  FaLightbulb,
  FaWater,
  FaVideo,
} from "react-icons/fa"; // Icons for features

const MagisticLagosPage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/magistic-lagos-main.jpg"
  );

  const smallImages = [
    "/assets/images/magistic-lagos-1.jpg",
    "/assets/images/magistic-lagos-2.jpg",
    "/assets/images/magistic-lagos-3.jpg",
    "/assets/images/magistic-lagos-main.jpg",
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
          <h6>Magistic Lagos</h6>
          <h4>Certificate of Occupancy</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            Pre-Launch Price:
          </p>
          <ul style={{ marginBottom: "10px" }}>
            <li>
              300sqm: ₦19,990,000
            </li>
            <li>
              500sqm: ₦28,990,000
            </li>
          </ul>

          <p style={{ marginBottom: "10px", color: "green" }}>
            <strong>Payment Plan:</strong> Up to 12 months available
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span>
              {" "}
              Facing Lekki-Epe Expressway, Opposite Lekki International Airport
            </span>
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
              <FaCar style={{ marginRight: "8px", color: "#FF6347" }} />
              Parking Space
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Top-notch Security
            </li>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Good Road Network
            </li>
            <li>
              <FaLightbulb style={{ marginRight: "8px", color: "#FFD700" }} />
              Power Supply
            </li>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#1E90FF" }} />
              Portable Water
            </li>
            <li>
              <FaLightbulb style={{ marginRight: "8px", color: "#FFD700" }} />
              Street Lights
            </li>
            <li>
              <FaVideo style={{ marginRight: "8px", color: "#8A2BE2" }} />
              CCTV Cameras
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>Dangote Refinery</li>
            <li>Epe Resort & Spa</li>
            <li>Jubilee Chalets, Epe</li>
            <li>Lekki International Airport</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Magistic Lagos is a premium estate with a Certificate of Occupancy
            located directly facing the Lekki-Epe Expressway and opposite the
            Lekki International Airport. It offers world-class infrastructure,
            including parking space, top-notch security, portable water, and
            more. Flexible payment plans of up to 12 months make it accessible
            for aspiring homeowners and investors. Don’t miss this opportunity
            to own property in a prime location!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MagisticLagosPage;