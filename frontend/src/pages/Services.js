// src/pages/Services.js
import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import SponsorSlider from "../components/SponsorSlider";
import Services from "../components/Services"; // Import the Services component
import Footer from "../components/Footer"; 

const ServicesPage = () => {
  return (
    <>
    <Navbar />
    
      <Services /> {/* Render the Services component */}
      <SponsorSlider />
      <Footer />
    </>
  );
};

export default ServicesPage;