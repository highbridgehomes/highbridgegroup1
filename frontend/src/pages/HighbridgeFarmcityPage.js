import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt } from "react-icons/fa"; // Example icons from React Icons

const HighbridgeFarmcityPage = () => {
  const [mainImg, setMainImg] = useState(
    "/assets/images/farmcity/farmcity.jpg"
  );

  const smallImages = [
    "/assets/images/highbridge-farmcity-1.jpg",
    "/assets/images/highbridge-farmcity-2.jpg",
    "/assets/images/highbridge-farmcity-3.jpg",
    "/assets/images/highbridge-farmcity-main.jpg",
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
          <h6>Highbridge Farmcity</h6>
          <h4>Farmland Survey</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            Introductory Price - Initial Deposit: ₦200,000
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Isiwo, Ogun State</span>
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
            <li>250sqm: ₦350,000</li>
            <li>500sqm: ₦650,000</li>
          </ul>
          <p style={{ color: "blue", fontWeight: "bold" }}>
            Special Promo: Buy 1 acre outrightly for ₦3,500,000
          </p>

          <h4 style={{ marginTop: "20px" }}>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lagos-Ogun Toll Gate
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Ayetoro Food Market
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Nigeria Breweries
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Ijebu Ode Cattle & Livestock Market
            </li>
          </ul>

          <h4 style={{ marginTop: "20px" }}>Description</h4>
          <p>
            Highbridge Farmcity offers fertile farmlands in the serene
            environment of Isiwo, Ogun State. Located near significant landmarks
            like Ayetoro Food Market and Nigeria Breweries, this property is
            perfect for agricultural purposes or investment. Take advantage of
            the special promo and secure your farmland today!
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default HighbridgeFarmcityPage;