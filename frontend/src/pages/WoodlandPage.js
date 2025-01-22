import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Adjust the path as per your folder structure
import Footer from "../components/Footer"; // Adjust the path as per your folder structure
import { FaMapMarkerAlt, FaWater, FaLock, FaLightbulb, FaRoad, FaHome } from "react-icons/fa"; // Icons for features

const WoodlandPage = () => {
    // Set the main image to the new "woodlandepe.jpg" by default
    const [mainImg, setMainImg] = useState("/assets/images/soldout/woodlandepe.jpg");
  
    const smallImages = [
      "/assets/images/woodland-1.jpg",
      "/assets/images/woodland-2.jpg",
      "/assets/images/woodland-3.jpg",
      "/assets/images/soldout/woodlandepe.jpg",  // Add the main image to the small image list
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
          <h6>Highbridge Woodland</h6>
          <h4>Residential/Industrial Land</h4>

          <p style={{ color: "red", fontWeight: "bold", marginTop: "10px" }}>
            SOLD OUT
          </p>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Location:</span>
            <span> Odogbawojo, Epe, Lagos State</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Title:</span>
            <span> FREEHOLD (Registered Survey) C of O in View</span>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <span style={{ fontWeight: "bold" }}>Land Size:</span>
            <span> 100% Dry Land</span>
          </div>

          <h4 style={{ marginTop: "20px" }}>Selling Price</h4>
          <ul>
            <li>₦500,000 per plot (300sqm)</li>
            <li>₦800,000 per plot (600sqm)</li>
            <li>6 Months Plan: ₦1,000,000 (Start with a deposit of ₦200,000)</li>
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
            Located in Odogbawojo, Epe, Highbridge Woodland offers a prime
            location for residential and industrial purposes. This estate sits
            in the northwest quadrant of the Lekki Free Trade Zone, which enjoys
            the benefits of a free trade zone. With amenities like perimeter
            fencing, good road networks, potable water, and 24/7 security, this
            land is perfect for future developments. The property is close to key
            landmarks like Epe Resort & Spa, Michael Otedola Estate, and PAN
            Atlantic University, making it an attractive investment opportunity.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WoodlandPage;