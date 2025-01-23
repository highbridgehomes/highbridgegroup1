import React from 'react';
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import ContactUs from "../components/ContactUs";
import SponsorSlider from "../components/SponsorSlider";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      
      <ContactUs />
      <SponsorSlider />
      <Footer />
    </>
  );
};

export default Contact;