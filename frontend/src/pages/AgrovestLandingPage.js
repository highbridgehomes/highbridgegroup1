import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./AgrovestLandingPage.css"; // Ensure this CSS file exists
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const images = [
  "/assets/images/hero/landhero2.png",
  "/assets/images/hero/handhero.png",
  "/assets/images/hero/landhero3.png",
];

const investmentPlans = [
  { label: "25% ROI in 6 Months", value: "6m", minAmount: 500000 },
  { label: "30% ROI in 9 Months", value: "9m", minAmount: 500000 },
  { label: "50% ROI in 12 Months", value: "12m", minAmount: 500000 },
  { label: "75% ROI in 18 Months", value: "18m", minAmount: 500000 },
];

const AgrovestLandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(investmentPlans[0].value);
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", phone: "", name: "" });

  // Create refs for each section
  const aboutRef = useRef(null);
  const galleryRef = useRef(null);
  const registrationRef = useRef(null);
  const paynowRef = useRef(null);

  // Smooth scroll functions
    // Smooth scroll functions
    const scrollToAbout = () => {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    const scrollToGallery = () => {
      galleryRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    const scrollToRegistration = () => {
      registrationRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMobileNav = () => {
    setIsMobileNavOpen((prev) => !prev);
  };

  const handlePlanChange = (e) => {
    const selected = investmentPlans.find((plan) => plan.value === e.target.value);
    if (selected) {
      setSelectedPlan(selected.value);
      setInvestmentAmount(selected.minAmount);
    }
  };

  const handleFlutterwavePayment = async () => {
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/payments/initiate-flutterwave-payment", {
        amount: investmentAmount,
        email: user.email,
        name: user.name,
        phone: user.phone,
        plan: selectedPlan,
      });

      if (response.data.message === "Payment link generated successfully") {
        window.location.href = response.data.paymentLink;
      } else {
        console.error("Flutterwave payment initiation failed");
      }
    } catch (error) {
      console.error("Error initiating Flutterwave payment:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <div className="landing-page">
      {/* Hero Section */}
      <div className="hero-section">
        <div
          className="hero-background"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        />
        <div className="hero-content">
        <h1
  style={{
    color: "#fff",
  }}
>
  💰 Grow Your Wealth with Highbridge Agrovest! 🌾📈
</h1>
          <p></p>

          {/* Hero Links for Desktop */}
          <div className="hero-links">
  <Link to="/" className="transparent-btn1">
    Home
  </Link>
  <button className="transparent-btn1" onClick={scrollToAbout}>
    About Agrovest
  </button>
  <button className="transparent-btn1" onClick={scrollToGallery}>
    Gallery
  </button>
  <Link to="/payment" className="transparent-btn1">
    paynow
  </Link>
</div>

          {/* Transparent registration button centered */}
          <div className="center-button-container">
            <button className="transparent-btn" onClick={scrollToRegistration}>
              Register Now
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMobileNav}>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
        <div className="hamburger-icon"></div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMobileNav}>Home</Link>
        <button onClick={() => { scrollToAbout(); toggleMobileNav(); }}>About Us</button>
        <button onClick={() => { scrollToGallery(); toggleMobileNav(); }}>Gallery</button>
        <Link to="/payment" onClick={toggleMobileNav}>paynow</Link>
      </div>

      {/* About Section */}
      <section ref={aboutRef} className="about">
        <div className="about-container">
          <h1 className="about-heading">Maximize Your Earnings with Agrovest</h1>
          <div className="about-content">


  <div className="about-text">
  <p>
  Join us for an exclusive <strong style={{ color: '#ff6347' }}>free</strong> <strong style={{ color: '#ff6347' }}>webinar</strong> on <strong>Highbridge Agrovest – Bokku Food Vol. 1</strong>, where we’ll share how you can invest in agriculture and earn impressive returns. Discover how our sustainable farming ventures in ginger, poultry, snails, and livestock can help grow your wealth.
</p>
<p>
  Don’t miss out on this opportunity to learn from industry experts and explore a secure, profitable investment model backed by <strong>Highbridge Farmcity Cooperative</strong>.
</p>
<p>
  <button
    className="transparent"
    onClick={scrollToRegistration}
    style={{ backgroundColor: 'green', color: '#fff' }}
  >
    Register Now
  </button> and take the first step toward a prosperous future!
</p>

</div>




            <div className="about-video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/vkF__wRUFKA"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>




      {/* Features Section */}
      


      {/* Gallery Section */}
      {/* Gallery Section */}
      <section ref={galleryRef} className="gallery">
      <h2>Gallery</h2>

      {/* Image Gallery Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="gallery-carousel"
      >
        <SwiperSlide>
        <img src="/assets/images/hero/heroimage1.jpg" alt="Gallery 1" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/images/hero/heroimage3.jpg" alt="Gallery 2" />
        </SwiperSlide>
        <SwiperSlide>
        <img src="/assets/images/hero/heroimage4.jpg" alt="Gallery 2" />
        </SwiperSlide>
      </Swiper>

      {/* Video Gallery Carousel */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="video-carousel"
      >
        <SwiperSlide>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/jCJY986HDdg"
            title="Video 1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/P7gy4wKFRLA"
            title="Video 2"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/P7gy4wKFRLA"
            title="Video 3"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </SwiperSlide>
      </Swiper>
    </section>


     {/* Registration Section */}
<section
  ref={registrationRef}
  className="registration"
  style={{ backgroundColor: 'green', padding: '20px' }}
>
  <h2>Register Now</h2>
  <form className="registration-form">
    <input type="text" placeholder="Full Name" required />
    <input type="email" placeholder="Email Address" required />
    <input type="tel" placeholder="Phone Number" required />
    <button type="submit">Submit</button>
  </form>
</section>

      {/* Payment Section */}
      <section ref={paynowRef} className="payment-section">
  <h2>Proceed to Payment</h2>
  <div className="payment-container">
    {/* Investment Plan Label */}
    <label>Select Investment Plan:</label>
    <select value={selectedPlan} onChange={handlePlanChange}>
      {investmentPlans.map((plan) => (
        <option key={plan.value} value={plan.value}>
          {plan.label}
        </option>
      ))}
    </select>
    
    {/* Investment Amount Label and Input */}
    <label>Enter Investment Amount (Min ₦500,000, Max ₦1,000,000,000):</label>
    <input 
      type="number" 
      value={investmentAmount} 
      min={500000} 
      max={1000000000} 
      onChange={(e) => setInvestmentAmount(Number(e.target.value))} 
      placeholder="Enter amount" 
    />
    
    {/* Validation message for Investment Amount */}
    {investmentAmount < 500000 && investmentAmount > 0 && (
      <div className="error-message">Minimum investment amount is ₦500,000</div>
    )}
    {investmentAmount > 1000000000 && (
      <div className="error-message">Maximum investment amount is ₦1,000,000,000</div>
    )}

    {/* Form validation for user details */}
    <label>Full Name:</label>
    <input
      type="text"
      value={user.name}
      onChange={(e) => setUser({ ...user, name: e.target.value })}
      placeholder="Enter your full name"
      required
    />

    <label>Email Address:</label>
    <input
      type="email"
      value={user.email}
      onChange={(e) => setUser({ ...user, email: e.target.value })}
      placeholder="Enter your email"
      required
    />

    <label>Phone Number:</label>
    <input
      type="tel"
      value={user.phone}
      onChange={(e) => setUser({ ...user, phone: e.target.value })}
      placeholder="Enter your phone number"
      required
    />

    {/* Pay Now Button with validation */}
    <button 
      onClick={handleFlutterwavePayment} 
      disabled={investmentAmount < 500000 || investmentAmount > 1000000000 || loading || !user.name || !user.email || !user.phone}
      className={investmentAmount < 500000 || investmentAmount > 1000000000 || loading || !user.name || !user.email || !user.phone ? "disabled-btn" : ""}
    >
      {loading ? "Processing..." : "Pay Now"}
    </button>
  </div>
</section>

      {/* Replace the old footer with the imported Footer component */}
      <Footer />
    </div>
  );
};

export default AgrovestLandingPage;


























