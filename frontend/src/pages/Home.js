import React from "react";
import Navbar from "../components/Navbar";
import HeroPage from "../components/HeroPage";
import SponsorSlider from "../components/SponsorSlider";
import About from "../components/About";
import FeaturedPropertySection from "../components/featured/Featured";
import Services2 from "../components/Services2";
import Footer from "../components/Footer";
import ScrollElement from "../components/ScrollElement";
import CounterGrid from "../components/CounterGrid";
import FAQ from "../components/FAQ"; // Import the FAQ component

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroPage />
      <SponsorSlider />
      <CounterGrid /> {/* Add the CounterGrid here */}
      <ScrollElement>
        <About />
      </ScrollElement>
      <ScrollElement>
        <FeaturedPropertySection />
      </ScrollElement>
      <ScrollElement>
        <Services2 />
      </ScrollElement>
      {/* Add FAQ section here with ScrollElement */}
      <ScrollElement>
        <FAQ />
      </ScrollElement>
      <Footer />
    </>
  );
};

export default Home;