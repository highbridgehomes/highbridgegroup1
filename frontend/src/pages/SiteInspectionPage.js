import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import HeroPage from "../components/HeroPage"; // Import HeroPage component
import SiteInspection from "../components/SiteInspection"; // Import SiteInspection component
import Footer from "../components/Footer"; // Import Footer component

const SiteInspectionPage = () => {
  return (
    <>
      <Navbar /> {/* Invoke Navbar */}
      <HeroPage /> {/* Invoke HeroPage */}
      <SiteInspection /> {/* Invoke SiteInspection */}
      <Footer /> {/* Invoke Footer */}
    </>
  );
};

export default SiteInspectionPage;