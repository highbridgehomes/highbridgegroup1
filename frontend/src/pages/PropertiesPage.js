import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import SponsorSlider from "../components/SponsorSlider";
import About from "../components/About"; // Import the About component
import FeaturedPropertySection from "../components/featured/Featured2"; // Correct import path for FeaturedPropertySection
import FeaturedPropertySection2 from "../components/FeaturedPropertySection2"; // Correct import path for FeaturedPropertySection2
import SoldOutPropertySection from "../components/SoldOutPropertySection";
import Footer from "../components/Footer";
import "./PropertiesPage.css"; // Use a different CSS file for properties page styling

const PropertiesPage = () => {
  return (
    <>
      <Navbar />
      <FeaturedPropertySection2 /> {/* Invoking the FeaturedPropertySection2 component here */}
      <FeaturedPropertySection /> {/* Invoking the FeaturedPropertySection component */}
      <SoldOutPropertySection />
      <SponsorSlider />
      <Footer />
    </>
  );
};

export default PropertiesPage;