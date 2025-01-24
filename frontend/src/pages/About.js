import React from 'react';
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import AboutUs from "../components/AboutUs";
import ExecutiveTeam from "../components/ExecutiveTeam"; // Import the ExecutiveTeam component

import Footer from "../components/Footer"; // Import the Footer component
import SponsorSlider from "../components/SponsorSlider";

const About = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutUs />
      
      {/* Add ExecutiveTeam component here */}
      <ExecutiveTeam />
      
      <SponsorSlider />
      <Footer /> {/* Invoke the Footer component */}
    </>
  );
};

export default About;