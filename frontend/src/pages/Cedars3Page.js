import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as needed
import Footer from "../components/Footer"; // Adjust the path as needed
import { FaMapMarkerAlt, FaWater, FaRoad, FaLock, FaPowerOff } from "react-icons/fa"; // Icons for features

const Cedars3Page = () => {
  // Set the main image to the new default image (/assets/images/soldout/cedar2.jpg)
  const [mainImg, setMainImg] = useState("/assets/images/soldout/cedar2.jpg");

  // Update smallImages array
  const smallImages = [
    "/assets/images/cedar3-1.jpg",
    "/assets/images/cedar3-2.jpg",
    "/assets/images/cedar3-3.jpg",
    "/assets/images/cedar3-4.jpg",
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
              maxHeight: "300px", // Adjust the height as needed
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
          <h6>Highbridge Cedars2</h6>
          <h4>Residential/Industrial Land</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLDOUT
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
            <li>₦1,800,000 per plot (300sqm)</li>
            <li>₦3,000,000 per plot (500sqm)</li>
            <li>₦10,000,000 per Commercial plot (1000sqm)</li>
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
              Government College, Ketu
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Resort & Spa
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              LASG Centre Food Security System
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Psychiatric and Rehabilitation Centre
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Isimi Lagos
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            HIGHBRIDGE CEDARS 3 ESTATE offers you the opportunity to create your
            legacy with this blank canvas. It's your chance to build your dream
            home and shape your future. Located in Ketu Epe, the land is positioned
            in a rapidly growing area, ensuring a high return on investment. With
            convenient access to key landmarks, it's an investment that will last
            for generations to come.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Cedars3Page;