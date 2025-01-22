import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt, FaWater, FaLock, FaLightbulb, FaRoad, FaHome } from "react-icons/fa"; // Icons for features

const OaklandPage = () => {
    const [mainImg, setMainImg] = useState("/assets/images/soldout/oakland.jpg"); // Updated to the provided image
  
    const smallImages = [
      "/assets/images/oakland-1.jpg",
      "/assets/images/oakland-2.jpg",
      "/assets/images/oakland-3.jpg",
      "/assets/images/soldout/oakland.jpg", // Make sure the path is correct for small image display
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
          <h6>Highbridge Oakland</h6>
          <h4>Residential/Industrial Land</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLD OUT
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> By Atlantic Hall School, Epe, Lagos State</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Title:</span>
            <span> Registered Survey (100% Dry Land)</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Land Size:</span>
            <span> 600sqm, 300sqm</span>
          </div>

          <h4 style={{ marginTop: "20px" }}>Selling Price</h4>
          <ul>
            <li>₦1,350,000 per plot (600sqm)</li>
            <li>₦750,000 per plot (300sqm)</li>
            <li>Commercial Plot: ₦3,500,000</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Amenities</h4>
          <ul>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Good Road Network
            </li>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#1E90FF" }} />
              Potable Water
            </li>
            <li>
              <FaLightbulb style={{ marginRight: "8px", color: "#FFD700" }} />
              Street Lights
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              24/7 Security Surveillance
            </li>
            <li>
              <FaHome style={{ marginRight: "8px", color: "#8A2BE2" }} />
              Perimeter Fencing
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
              Epe Resort
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Odion Igahlo Football Academy
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lagos Free Trade Zone
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki International Airport
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Michael Otedola College Of Education
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            HIGHBRIDGE OAKLAND ESTATE offers home seekers and investors an ideal
            home solution in a serene environment. The estate is free from government
            acquisition and encumbrances. With plot sizes of 600sqm and 300sqm available,
            the estate is located by Atlantic Hall School in the historic city of Epe.
            Offering affordable prices for residential and commercial purposes, it's an
            excellent investment opportunity.
          </p>

          <h4 style={{ marginTop: "20px" }}>Other Charges</h4>
          <ul>
            <li>Developments Levy (To be communicated later)</li>
            <li>Deed of Assignment: ₦50,000 per plot</li>
            <li>Survey Fee: ₦150,000 per plot</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OaklandPage;