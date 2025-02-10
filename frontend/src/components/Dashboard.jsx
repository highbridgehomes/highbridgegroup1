import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer"; // Import Footer
import "./Dashboard.css"; // Import Styles

const investmentPlans = [
  { label: "25% ROI in 6 Months", value: "6m", minAmount: 500000 },
  { label: "30% ROI in 9 Months", value: "9m", minAmount: 500000 },
  { label: "50% ROI in 12 Months", value: "12m", minAmount: 500000 },
  { label: "75% ROI in 18 Months", value: "18m", minAmount: 500000 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState(500000);
  const [paymentLink, setPaymentLink] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login"); // Redirect if not logged in
          return;
        }

        const response = await axios.get("http://localhost:5000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUser(response.data); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching dashboard:", error);
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handlePlanChange = (e) => {
    const selected = investmentPlans.find(plan => plan.value === e.target.value);
    if (selected) {
      setSelectedPlan(selected.value);
      setInvestmentAmount(selected.minAmount);
    }
  };

  const handlePayment = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/payments/initiate-flutterwave-payment",
        { amount: investmentAmount, plan: selectedPlan },
        { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
      );

      if (response.data.paymentLink) {
        setPaymentLink(response.data.paymentLink);
      }
    } catch (error) {
      console.error("Payment initiation error:", error);
    }
  };

  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      {/* User Info */}
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}</h1>
        <p><strong>Email:</strong> {user?.email}</p>
        <p><strong>Phone:</strong> {user?.phone || "Not Provided"}</p>
        <p><strong>KYC Verified:</strong> {user?.kycVerified ? "Yes" : "No"}</p>
        <p><strong>Total Investments:</strong> {user?.totalInvestments}</p>
      </div>

      {/* Investment Cards */}
      <h2>Your Investments</h2>
      <div className="investments-container">
        {user?.investments.length ? (
          user.investments.map((investment, index) => (
            <div key={index} className="investment-card">
              <p><strong>Plan:</strong> {investment.plan}</p>
              <p><strong>Amount:</strong> ₦{investment.amount}</p>
              <p><strong>Status:</strong> {investment.status}</p>
              <p><strong>Maturity Date:</strong> {new Date(investment.maturityDate).toDateString()}</p>
            </div>
          ))
        ) : <p>No active investments</p>}
      </div>

      {/* Investment Form */}
      <h2>Invest Now</h2>
      <div className="investment-form">
        <label>Select Investment Plan:</label>
        <select value={selectedPlan} onChange={handlePlanChange}>
          <option value="">Select Plan</option>
          {investmentPlans.map(plan => (
            <option key={plan.value} value={plan.value}>{plan.label}</option>
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

        <button onClick={handlePayment} disabled={!selectedPlan || investmentAmount < 500000}>
          Pay with Flutterwave
        </button>
      </div>

      {paymentLink && <a href={paymentLink} target="_blank" rel="noopener noreferrer">Proceed to Payment</a>}

      {/* ✅ Footer Added */}
      <Footer />
    </div>
  );
};

export default Dashboard;