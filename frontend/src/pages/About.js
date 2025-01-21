import React from 'react';
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import AboutUs from "../components/AboutUs";
import OurTeam from "../components/OurTeam"; // Import OurTeam component
import Footer from "../components/Footer"; // Import the Footer component

const About = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <AboutUs />
      <OurTeam /> {/* Invoke the OurTeam component */}
      <Footer /> {/* Invoke the Footer component */}
    </>
  );
};

export default About;