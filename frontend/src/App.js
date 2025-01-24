import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop component
import Home from "./pages/Home";
import About from "./pages/About"; 
import ServicesPage from "./pages/Services";
import Contact from "./pages/Contact";
import HighbridgeHeavenPage from "./pages/HighbridgeHeavenPage";
import HighbridgeCountyPage from "./pages/HighbridgeCountyPage";
import HighbridgeManorPage from "./pages/HighbridgeManorPage";
import MagisticLagosPage from "./pages/MagisticLagosPage";
import HighbridgeFarmcityPage from "./pages/HighbridgeFarmcityPage";
import HighbridgeResidencePage from "./pages/HighbridgeResidencePage";
import HighbridgeGardensPage from "./pages/HighbridgeGardensPage";
import BecomeRealtorPage from "./pages/BecomeRealtorPage";
import DigitalMarketingTrainingPage from "./pages/DigitalMarketingTrainingPage";
import SiteInspectionPage from "./pages/SiteInspectionPage";
import WoodlandExtensionPage from "./pages/WoodlandExtensionPage";
import WoodlandPage from "./pages/WoodlandPage";
import OaklandPage from './pages/OaklandPage';
import CedarsPage from "./pages/CedarsPage";
import Cedars3Page from "./pages/Cedars3Page";
import FarmcityPlusPage from "./pages/FarmcityPlusPage";
import ParkPage from "./pages/ParkPage";
import HighbridgeHillcity from "./pages/HighbridgeHillcity";
import PropertiesPage from "./pages/PropertiesPage";
import AllTeamsPage from "./pages/AllTeamsPage"; // Import the AllTeamsPage component

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add the ScrollToTop component here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/heaven" element={<HighbridgeHeavenPage />} />
        <Route path="/highbridge-county" element={<HighbridgeCountyPage />} />
        <Route path="/highbridge-manor" element={<HighbridgeManorPage />} />
        <Route path="/magistic-lagos" element={<MagisticLagosPage />} />
        <Route path="/farmcity" element={<HighbridgeFarmcityPage />} />
        <Route path="/park" element={<ParkPage />} />
        <Route path="/farmcity-plus" element={<FarmcityPlusPage />} />
        <Route path="/residence" element={<HighbridgeResidencePage />} />
        <Route path="/garden" element={<HighbridgeGardensPage />} />
        <Route path="/become-realtor" element={<BecomeRealtorPage />} />
        <Route path="/digital-marketing-training" element={<DigitalMarketingTrainingPage />} />
        <Route path="/site-inspection" element={<SiteInspectionPage />} />
        <Route path="/woodland" element={<WoodlandExtensionPage />} />
        <Route path="/woodland2" element={<WoodlandPage />} />
        <Route path="/oakland" element={<OaklandPage />} />
        <Route path="/cedars" element={<CedarsPage />} />
        <Route path="/cedars3" element={<Cedars3Page />} />
        <Route path="/hilcity" element={<HighbridgeHillcity />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/all-teams" element={<AllTeamsPage />} /> {/* New route for all teams */}
        
      </Routes>
    </Router>
  );
};

export default App;