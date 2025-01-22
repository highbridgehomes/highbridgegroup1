import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed
import { FaMapMarkerAlt, FaWater, FaRoad, FaLock, FaPowerOff } from "react-icons/fa"; // Icons for features

const CedarsPage = () => {
  const [mainImg, setMainImg] = useState("/assets/images/soldout/cedar.jpg");

  const smallImages = [
    "/assets/images/cedar-1.jpg",
    "/assets/images/cedar-2.jpg",
    "/assets/images/cedar-3.jpg",
    "/assets/images/soldout/cedar.jpg",
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
              maxHeight: "300px",  // Adjust the height as needed
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
          <h6>Highbridge Cedars</h6>
          <h4>Residential/Industrial Land</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLD OUT
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Ketu Epe Expressway</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Title:</span>
            <span> Registered Survey (100% Dry Land)</span>
          </div>

          <h4 style={{ marginTop: "20px" }}>Selling Price</h4>
          <ul>
            <li>₦600,000 per plot (300sqm)</li>
            <li>₦950,000 per plot (500sqm)</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Amenities</h4>
          <ul>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Motorable Good Road Network
            </li>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#1E90FF" }} />
              Potable Water
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Perimeter Fencing
            </li>
            <li>
              <FaPowerOff style={{ marginRight: "8px", color: "#FFD700" }} />
              24/7 Power Supply
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Yaba College of Technology
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Resort & Spa
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Michael Otedola University
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              SPDL AgroFarm
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Isimi Lagos
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            HIGHBRIDGE CEDARS ESTATE is located in a serene and peaceful environment with rapid development guaranteed. With great ROI on investment, it is an ideal place to secure your home. Located at Ketu-Epe, it's well-positioned to benefit from the area's growing development.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CedarsPage;