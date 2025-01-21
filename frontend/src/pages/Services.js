// src/pages/Services.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import Services from "../components/Services"; // Import the Services component
import Footer from "../components/Footer"; 

const ServicesPage = () => {
  return (
    <>
    <Navbar />
    <HeroPage />
      <Services /> {/* Render the Services component */}
      <Footer />
    </>
  );
};

export default ServicesPage;