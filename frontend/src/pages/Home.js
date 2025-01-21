import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import SponsorSlider from "../components/SponsorSlider"; 
import FeaturedPropertySection from "../components/FeaturedPropertySection"; // Import the FeaturedPropertySection
import SoldOutPropertySection from "../components/SoldOutPropertySection"; // Import the SoldOutPropertySection
import Footer from "../components/Footer"; 
import "./Home.css";

const Home = () => {
  
  return (
    <>
      <Navbar />
      <HeroPage />
      <SponsorSlider />
       {/* Add the FeaturedPropertySection here */}
       <FeaturedPropertySection />
       <SoldOutPropertySection /> {/* Added SoldOutPropertySection here */}
      <Footer />
    </>
  );
};

export default Home;