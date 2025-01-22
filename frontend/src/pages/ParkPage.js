// src/pages/ParkPage.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaMapMarkerAlt, FaWater, FaRoad, FaLock, FaPowerOff } from "react-icons/fa";

const ParkPage = () => {
  const [mainImg, setMainImg] = useState("/assets/images/soldout/park.jpg");

  const smallImages = [
    "/assets/images/park-1.jpg",
    "/assets/images/park-2.jpg",
    "/assets/images/park-3.jpg",
    "/assets/images/park-4.jpg",
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
          <h6>HIGHBRIDGE PARK ESTATE</h6>
          <h4>AFFORDABLE PROPERTY WITH HIGH RETURNS ON INVESTMENT</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLDOUT
          </p>

          <p>
            HIGHBRIDGE PARK is one of Ibeju-Lekki’s most affordable properties designed to give smart investors high returns on investment. It offers an opportunity to secure your dream property without breaking the bank.
          </p>

          <h4>Landmarks</h4>
          <ul>
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
              PAN Atlantic University
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
              La Campagne Tropicana Resorts
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
              Good Road Network
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#32CD32" }} />
              Potable Water
            </li>
            <li>
              <FaPowerOff style={{ marginRight: "8px", color: "#FFD700" }} />
              Sport Arena
            </li>
            <li>
              <FaLock style={{ marginRight: "8px", color: "#FFD700" }} />
              24/7 Security Surveillance
            </li>
          </ul>

          <h4>Selling Price</h4>
          <ul>
            <li>₦2,500,000 per plot (600sqm)</li>
            <li>₦2,000,000 per plot (400sqm)</li>
            <li>₦4,000,000 per Commercial Plot</li>
          </ul>

          <h4>Location</h4>
          <p>Igbogun Road, Ashagun Community, Ibeju Lekki Free Trade Zone Area</p>

          <h4>Description</h4>
          <p>
  Highbridge Park Estate offers an affordable investment opportunity in Ibeju-Lekki, one of Lagos' most promising real estate zones. The estate is strategically located near major developments, including the Dangote Refinery, Lekki Deep Seaport, Lekki International Airport, and the Lekki Free Trade Zone, ensuring long-term value appreciation.
</p>

<p>
  This property is perfect for both residential and commercial use. With well-planned infrastructure including good road networks, potable water, and 24/7 security, Highbridge Park Estate promises a safe and comfortable environment. Additionally, the estate features a sports arena and perimeter fencing for added security.
</p>

<p>
  With plots priced affordably, it presents a great opportunity for investors looking for high returns. Don’t miss the chance to be part of this growing community and secure your plot today.
</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ParkPage;