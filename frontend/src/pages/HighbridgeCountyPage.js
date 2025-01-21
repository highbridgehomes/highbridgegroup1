import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaRoad, FaWater, FaLightbulb, FaShieldAlt, FaHome, FaLock, FaMapMarkerAlt } from "react-icons/fa"; // Example icons from React Icons

const HighbridgeCountyPage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/county/COUNTY.jpg"
  );

  const smallImages = [
    "/assets/images/hero/heroimage1.jpg",
    "/assets/images/hero/heroimage3.jpg",
    "/assets/images/hero/heroimage4.jpg",
    "/assets/images/featured-property2.jpg",
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
          <h6>Highbridge County</h6>
          <h4>Prime Land for Sale</h4>
          <h2>₦500,000 - ₦850,000</h2>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Plot Sizes:</span>
            <span> 300 SQM, 500 SQM</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Isiwo By Epe Tollgate, Ogun State</span>
          </div>

          <button
            onClick={() => (window.location.href = "/contact")}
            style={{
              padding: "10px 20px",
              background: "green", // Changed background color to green
              color: "#fff",
              border: "none",
              cursor: "pointer",
              borderRadius: "4px",
              width: "100%",
            }}
          >
            Contact Agent
          </button>

          <h4 style={{ marginTop: "20px" }}>Property Features</h4>
          <ul>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#007BFF" }} />
              Running Water
            </li>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#8B4513" }} />
              Good Road Network
            </li>
            <li>
              <FaShieldAlt style={{ marginRight: "8px", color: "#28A745" }} />
              Security
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#6C757D" }} />
              Gated Estate
            </li>
            <li>
              <FaLightbulb style={{ marginRight: "8px", color: "#FFC107" }} />
              Street Light
            </li>
            <li>
              <FaHome style={{ marginRight: "8px", color: "#000" }} />
              Good Location
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Tollgate
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Resort & Spa
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki International Airport
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Jubilee Chalets Epe
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Highbridge County offers premium land at Isiwo by Epe Tollgate. 
            Features include good drainage, running water, streetlights, and a 
            secure, gated estate. Available plot sizes are 300 SQM for ₦500,000 
            and 500 SQM for ₦850,000, with an initial deposit of ₦300,000. 
            Enjoy proximity to key landmarks such as Epe Resort & Spa, Jubilee 
            Chalets, and the upcoming Lekki International Airport. Flexible 
            payment plans available for up to 12 months. Perfect for those 
            seeking tranquility and modern amenities.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeCountyPage;