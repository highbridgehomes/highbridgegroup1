import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component
import HeroPage from "../components/HeroPage"; // Import HeroPage component
import DigitalMarketingTraining from "../components/DigitalMarketingTraining"; // Import DigitalMarketingTraining component
import Footer from "../components/Footer"; // Import Footer component

const DigitalMarketingTrainingPage = () => {
  return (
    <>
      <Navbar /> {/* Invoke Navbar */}
      <HeroPage /> {/* Invoke HeroPage */}
      <DigitalMarketingTraining /> {/* Invoke DigitalMarketingTraining */}
      <Footer /> {/* Invoke Footer */}
    </>
  );
};

export default DigitalMarketingTrainingPage;