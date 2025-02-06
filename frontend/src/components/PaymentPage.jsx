// PaymentPage.jsx
import React, { useState } from 'react';
import axios from 'axios';
import "./PaymentPage.css";

const investmentPlans = [
    { label: "25% ROI in 6 Months", value: "6m", minAmount: 500000 },
    { label: "30% ROI in 9 Months", value: "9m", minAmount: 500000 },
    { label: "50% ROI in 12 Months", value: "12m", minAmount: 500000 },
    { label: "75% ROI in 18 Months", value: "18m", minAmount: 500000 },
  ];

const PaymentPage = ({ user, investmentAmount, selectedPlan }) => {
  const [loading, setLoading] = useState(false);
  

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
    <section className="payment-section">
      <h2>Proceed to Payment</h2>
      <div className="payment-container">
        {/* Investment Plan Label */}
        <label>Select Investment Plan:</label>
        <select value={selectedPlan} disabled>
          {/* Assuming the plans are passed in from the parent */}
          <option value={selectedPlan}>{selectedPlan}</option>
        </select>
        
        {/* Investment Amount Label and Input */}
        <label>Enter Investment Amount:</label>
        <input 
          type="number" 
          value={investmentAmount} 
          disabled
          placeholder="Enter amount" 
        />
        
        {/* User Details */}
        <label>Full Name:</label>
        <input
          type="text"
          value={user.name}
          disabled
          placeholder="Enter your full name"
        />

        <label>Email Address:</label>
        <input
          type="email"
          value={user.email}
          disabled
          placeholder="Enter your email"
        />

        <label>Phone Number:</label>
        <input
          type="tel"
          value={user.phone}
          disabled
          placeholder="Enter your phone number"
        />

        {/* Pay Now Button */}
        <button 
          onClick={handleFlutterwavePayment} 
          disabled={loading || !user.name || !user.email || !user.phone}
        >
          {loading ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </section>
  );
};

export default PaymentPage;