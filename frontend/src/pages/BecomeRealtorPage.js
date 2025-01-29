import React from "react";
import Navbar from "../components/Navbar"; // Import Navbar component

import BecomeRealtor from "../components/BecomeRealtor"; // Import BecomeRealtor component
import Footer from "../components/Footer"; // Import Footer component

const BecomeRealtorPage = () => {
  return (
    <>
      <Navbar /> {/* Invoke Navbar */}
      
      <BecomeRealtor /> {/* Invoke BecomeRealtor */}
      <Footer /> {/* Invoke Footer */}
    </>
  );
};

export default BecomeRealtorPage;