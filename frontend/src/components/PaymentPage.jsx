import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./PaymentPage.css"; // Ensure this CSS file exists
import Footer from "../components/Footer";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  "/assets/images/hero/paymentbanner.jpg",
  "/assets/images/hero/paymentbanner.jpg",
  "/assets/images/hero/paymentbanner.jpg",
];

const investmentPlans = [
  { label: "25% ROI in 6 Months", value: "6m", minAmount: 500000 },
  { label: "30% ROI in 9 Months", value: "9m", minAmount: 500000 },
  { label: "50% ROI in 12 Months", value: "12m", minAmount: 500000 },
  { label: "75% ROI in 18 Months", value: "18m", minAmount: 500000 },
];

const PaymentPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(investmentPlans[0].value);
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", phone: "", name: "" });
  const [showPaymentForm, setShowPaymentForm] = useState(false); // State for toggling form visibility

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
          <h1 style={{ color: "#fff" }}>
            💰 Grow Your Wealth, Pay With Ease – Agrovest Investment Payment Gateway! 🌾📈
          </h1>

          {/* Hero Links */}
          <div className="hero-links">
            <Link to="/" className="transparent-btn1">Home</Link>
            <Link to="/agrovest" className="transparent-btn1">agrovest</Link>
          </div>

          {/* Pay Now Button */}
          <div className="center-button-container">
            <button className="transparent-btn" onClick={() => setShowPaymentForm(true)}>
              Pay Now
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMobileNavOpen ? "open" : ""}`}>
        <Link to="/" onClick={toggleMobileNav}>Home</Link>
        <Link to="/" onClick={toggleMobileNav}>Home</Link>
        <Link to="/payment" onClick={toggleMobileNav}>Pay Now</Link>
      </div>

      {/* Payment Form Pop-Up */}
      {showPaymentForm && (
        <div className="payment-popup">
          <div className="payment-container">
            <button className="close-btn" onClick={() => setShowPaymentForm(false)}>✖</button>
            <h2>Proceed to Payment</h2>
            
            <label>Select Investment Plan:</label>
            <select value={selectedPlan} onChange={handlePlanChange}>
              {investmentPlans.map((plan) => (
                <option key={plan.value} value={plan.value}>
                  {plan.label}
                </option>
              ))}
            </select>
            
            <label>Enter Investment Amount:</label>
            <input 
              type="number" 
              value={investmentAmount} 
              min={500000} 
              max={1000000000} 
              onChange={(e) => setInvestmentAmount(Number(e.target.value))} 
            />
            
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

            <button 
              onClick={handleFlutterwavePayment} 
              disabled={investmentAmount < 500000 || investmentAmount > 1000000000 || loading || !user.name || !user.email || !user.phone}
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PaymentPage;






