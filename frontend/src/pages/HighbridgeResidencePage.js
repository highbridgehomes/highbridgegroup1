import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as necessary
import Footer from "../components/Footer"; // Adjust the path as necessary
import {
  FaRoad,
  FaWater,
  FaLightbulb,
  FaLock,
  FaUmbrellaBeach,
} from "react-icons/fa"; // Icons for features

const HighbridgeResidencePage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/highbridge-residence-main.jpg"
  );

  const smallImages = [
    "/assets/images/residence/ladyinside.jpg",
    "/assets/images/residences/residence.jpg",
    "/assets/images/residences/residence front.jpg",
    "/assets/images/highbridge-residence-main.jpg",
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
          <h6>Highbridge Residence</h6>
          <h4>Complete Apartment</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            Prices:
          </p>
          <ul style={{ marginBottom: "10px" }}>
            <li>
              2-Bedroom Terrace Duplex + BQ: ₦70,000,000
            </li>
            <li>
              3-Bedroom Terrace Duplex + BQ: ₦80,000,000
            </li>
          </ul>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Abijo G.R.A, Ibeju-Lekki, Lagos State</span>
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
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Perimeter Fencing
            </li>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Motorable Good Road Network
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
              <FaLock style={{ marginRight: "8px", color: "#8A2BE2" }} />
              24/7 Security Surveillance
            </li>
            <li>
              <FaUmbrellaBeach style={{ marginRight: "8px", color: "#FF8C00" }} />
              Nearby Beach in the Estate
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>Coscharis Motors</li>
            <li>Greenspring School</li>
            <li>Abba's Heart School</li>
            <li>Novare Shopping Mall</li>
            <li>Caleb British International School</li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Highbridge Residence offers luxury and comfort with its premium
            terrace duplex apartments. Located strategically at Abijo G.R.A, 
            Ibeju-Lekki, Lagos State, it features state-of-the-art facilities, 
            including perimeter fencing, motorable roads, and 24/7 security 
            surveillance. The estate also includes a nearby beach for recreation 
            and a serene environment for family living. With its proximity to notable 
            landmarks, it is an ideal choice for residential investment.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeResidencePage;