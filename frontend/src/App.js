// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"; // Import the About page
import ServicesPage from "./pages/Services"; // Import the Services page
import Contact from "./pages/Contact"; // Import the Contact page
import HighbridgeHeavenPage from "./pages/HighbridgeHeavenPage"; // Highbridge Heaven page
import HighbridgeCountyPage from "./pages/HighbridgeCountyPage"; // Highbridge County page
import HighbridgeManorPage from "./pages/HighbridgeManorPage"; // Highbridge Manor page
import MagisticLagosPage from "./pages/MagisticLagosPage"; // Magistic Lifestyle page
import HighbridgeFarmcityPage from "./pages/HighbridgeFarmcityPage"; // Highbridge Farmcity page
import HighbridgeResidencePage from "./pages/HighbridgeResidencePage"; // Highbridge Residence page
import HighbridgeGardensPage from "./pages/HighbridgeGardensPage";
import BecomeRealtorPage from "./pages/BecomeRealtorPage"; // Import Become Realtor page
import DigitalMarketingTrainingPage from "./pages/DigitalMarketingTrainingPage"; // Import new page
import SiteInspectionPage from "./pages/SiteInspectionPage"; // Import new page
import WoodlandExtensionPage from "./pages/WoodlandExtensionPage"; // Import Woodland Extension page
import WoodlandPage from "./pages/WoodlandPage"; // Import Woodland Extension page
import OaklandPage from './pages/OaklandPage'; // import the Oakland page
import CedarsPage from "./pages/CedarsPage"; // Adjust the path as needed
import Cedars3Page from "./pages/Cedars3Page"; // Import Cedars3Page
import FarmcityPlusPage from "./pages/FarmcityPlusPage"; // Import the new Farmcity Plus page

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> {/* Add route for About page */}
        <Route path="/contact" element={<Contact />} /> {/* Add route for Contact page */}
        <Route path="/services" element={<ServicesPage />} /> {/* New route for Services */}
        <Route path="/heaven" element={<HighbridgeHeavenPage />} /> {/* Updated route */}
        <Route path="/highbridge-county" element={<HighbridgeCountyPage />} />
        <Route path="/highbridge-manor" element={<HighbridgeManorPage />} />
        <Route path="/magistic-lagos" element={<MagisticLagosPage />} />
        <Route path="/farmcity" element={<HighbridgeFarmcityPage />} />
        <Route path="/farmcity-plus" element={<FarmcityPlusPage />} /> {/* New route for Farmcity Plus */}
        <Route path="/residence" element={<HighbridgeResidencePage />} /> {/* New route */}
        <Route path="/garden" element={<HighbridgeGardensPage />} /> {/* New Garden page route */}
        <Route path="/become-realtor" element={<BecomeRealtorPage />} /> {/* New Become Realtor page */}
        <Route path="/digital-marketing-training" element={<DigitalMarketingTrainingPage />} /> {/* New Route */}
        <Route path="/site-inspection" element={<SiteInspectionPage />} /> {/* New Route */}
        <Route path="/woodland" element={<WoodlandExtensionPage />} /> {/* Route for Woodland Extension */}
        <Route path="/woodland2" element={<WoodlandPage />} />
        <Route path="/oakland" element={<OaklandPage />} /> {/* Add the route */}
        <Route path="/cedars" element={<CedarsPage />} /> {/* Corrected the Cedars route */}
        <Route path="/cedars3" element={<Cedars3Page />} /> {/* New Cedars3 route */}
      </Routes>
    </Router>
  );
};

export default App;