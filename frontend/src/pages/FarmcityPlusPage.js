// src/pages/FarmcityPlusPage.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaWater, FaRoad, FaLock, FaPowerOff } from "react-icons/fa";

const FarmcityPlusPage = () => {
  const [mainImg, setMainImg] = useState("/assets/images/soldout/farmcity plus.jpg");

  const smallImages = [
    "/assets/images/farmcity-1.jpg",
    "/assets/images/farmcity-2.jpg",
    "/assets/images/farmcity-3.jpg",
    "/assets/images/farmcity-4.jpg",
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
              maxHeight: "300px",
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
          <h6>HIGHBRIDGE FARMCITY PLUS ESTATE</h6>
          <h4>UNBELIEVABLE OFFER</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
           SOLDOUT
          </p>

          <p>
            What an amazing opportunity to start earning massive returns from agricultural investment. Among other numerous benefits, owning agricultural land creates access to agricultural grants and loans. Here is a rare opportunity to own agricultural land at a whooping 10% Discount in the agricultural hub of Lagos State.
          </p>

          <p>
            HIGHBRIDGE FARMCITY PLUS ESTATE offer lasts from 17th of November to 30th of December 2022. It is available only on 6 months outright payment plan and below. Take advantage of this rare opportunity and invest in the agricultural hub of LAGOS STATE.
          </p>

          <h4>Landmarks</h4>
          <ul>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Alaro City
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Dangote Refinery
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki Deep Seaport
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              Lekki Int'L Airport
            </li>
            <li>
              <FaMapMarkerAlt style={{ marginRight: "8px", color: "#FF6347" }} />
              PAN Africa University
            </li>
          </ul>

          <h4>Amenities</h4>
          <ul>
            <li>
              <FaRoad style={{ marginRight: "8px", color: "#FF6347" }} />
              Perimeter Fencing
            </li>
            <li>
              <FaWater style={{ marginRight: "8px", color: "#1E90FF" }} />
              Motorable Good Road Network
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Potable Water
            </li>
            <li>
              <FaPowerOff style={{ marginRight: "8px", color: "#FFD700" }} />
              Street Light
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#FFD700" }} />
              24/7 Security Surveillance
            </li>
          </ul>

          <h4>Selling Price</h4>
          <ul>
            <li>₦350,000 - ₦750,000 per plot (250sqm)</li>
            <li>₦650,000 - ₦1,250,000 per plot (500sqm)</li>
            <li>₦2,200,000 per plot (750sqm)</li>
            <li>₦2,700,000 per plot (1000sqm)</li>
          </ul>

          <h4>Location</h4>
          <p>Facing Ibeju-Lekki Epe Expressway</p>

          <h4>Description</h4>
          <p>
            HIGHBRIDGE FARMCITY PLUS ESTATE is your gateway to a profitable agricultural investment in Lagos State. Whether for personal farming or as a long-term investment, this estate promises exponential growth in the agricultural sector.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FarmcityPlusPage;