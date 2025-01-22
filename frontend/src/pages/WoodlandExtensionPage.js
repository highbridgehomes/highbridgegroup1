import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt, FaWater, FaLock, FaLightbulb, FaRoad, FaHome } from "react-icons/fa"; // Icons for features

const WoodlandExtensionPage = () => {
  const [mainImg, setMainImg] = useState("/assets/images/soldout/woodland.jpg");

  const smallImages = [
    "/assets/images/soldout/woodland.jpg",
    "/assets/images/soldout/woodland-1.jpg",
    "/assets/images/soldout/woodland-2.jpg",
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
          <h6>Highbridge Woodland Extension</h6>
          <h4>Residential Freehold</h4>

           {/* Sold Out Message */}
           <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLD OUT
          </p>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            500 Acres: ₦8,000,000 (0-6 months outrightly)
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Odogbawojo, Epe</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Title:</span>
            <span> FREEHOLD [REGISTERED SURVEY]</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Size:</span>
            <span> 300sqms - ₦1 Million, 600sqms - ₦1.6 Million</span>
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
              Gated Estate
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Prime Location
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Michael Otedola Estate
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Yaba College of Technology
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              PAN Atlantic University
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Epe Resort & Spa
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              SPDL Agrofarm
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Looking for residential/industrial land in Epe? Highbridge Homes presents an excellent opportunity at the Highbridge Woodland Extension. Located in the prime area of Odogbawojo, Epe, this property sits within the northwest quadrant of the Lekki Free Trade Zone, Lagos. The land offers numerous amenities, including good road networks, perimeter fencing, potable water, a sports arena, and 24/7 security surveillance.
            The property is also in close proximity to key landmarks such as the Michael Otedola Estate, Yaba College of Technology, PAN Atlantic University, Epe Resort & Spa, and SPDL Agrofarm.
            This is a fantastic investment with high potential for both residential and industrial development. Invest today and secure your future!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WoodlandExtensionPage;