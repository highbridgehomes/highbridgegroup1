import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import SiteInspection from "../components/SiteInspection"; // Import SiteInspection component
import Footer from "../components/Footer"; // Import Footer component

const SiteInspectionPage = () => {
  return (
    <>
      <Navbar /> {/* Invoke Navbar */}
      <SiteInspection /> {/* Invoke SiteInspection */}
      <Footer /> {/* Invoke Footer */}
    </>
  );
};

export default SiteInspectionPage;