import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt } from "react-icons/fa"; // Example icons from React Icons

const HighbridgeGardensPage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/highbridge-gardens/main.jpg"
  );

  const smallImages = [
    "/assets/images/highbridge-gardens-1.jpg",
    "/assets/images/highbridge-gardens-2.jpg",
    "/assets/images/highbridge-gardens-3.jpg",
    "/assets/images/highbridge-gardens-4.jpg",
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
          <h6>Highbridge Gardens</h6>
          <h4>Residential & Commercial Property</h4>

          

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Ibeju-Lekki, Lagos</span>
          </div>

          <h4>Pricing</h4>
          <ul>
            <li>300sqm (Residential): ₦10.5M</li>
            <li>600sqm (Residential): ₦18M</li>
            <li>1000sqm (Commercial): ₦60M</li>
          </ul>

          
          
          <p style={{ color: "blue", fontWeight: "bold" }}>
           
          </p>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              HFP Paving Stone
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Eleganza Industry City
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Pan Atlantic University
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Eleko Junction
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki Free Trade Zone
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Highbridge Gardens offers both residential and commercial plots in
            the rapidly developing area of Ibeju-Lekki, Lagos. Surrounded by
            major landmarks such as Eleganza Industry City and Pan Atlantic
            University, this is the ideal location for investment or residential
            development.
          </p>

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
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeGardensPage;