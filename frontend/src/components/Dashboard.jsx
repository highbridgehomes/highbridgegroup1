import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer"; // ✅ Import Footer
import "./Dashboard.css"; // ✅ Import Styles

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
  const [processing, setProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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
      } catch (error) {
        console.error("Error fetching dashboard:", error);
        setErrorMessage("Failed to load dashboard. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, [navigate]);

  const handlePlanChange = (e) => {
    const selected = investmentPlans.find(plan => plan.value === e.target.value);
    if (selected) {
      setSelectedPlan(selected.value);
      if (investmentAmount < selected.minAmount) {
        setInvestmentAmount(selected.minAmount);
      }
    }
  };



  

  const handlePayment = async () => {
    try {
        console.log("🚀 handlePayment function triggered");
        console.log("🛒 Selected Plan:", selectedPlan);
        console.log("💰 Investment Amount:", investmentAmount);

        // ✅ Validate Required Fields
        if (!selectedPlan) {
            setErrorMessage("Please select an investment plan.");
            return;
        }
        if (investmentAmount < 500000) {
            setErrorMessage("Minimum investment is ₦500,000.");
            return;
        }
        if (!user?.name || !user?.email || !user?.phone) {
            setErrorMessage("User details missing. Please update your profile.");
            return;
        }

        // ✅ Log User Details Before Proceeding
        console.log("👤 User Details:", user);

        // ✅ Reset error messages and show processing state
        setProcessing(true);
        setErrorMessage("");

        const token = localStorage.getItem("token");

        // ✅ Save Investment
        console.log("🔄 Saving investment details...");
        const investmentData = {
            amount: investmentAmount,
            plan: selectedPlan,
            status: "pending",
            user: {
                name: user.name,
                email: user.email,
                phone: user.phone,
                kycVerified: user.kycVerified ?? false, // Add if required
            },
        };

        console.log("📤 Sending Investment Request with Data:", investmentData);

        const saveInvestmentResponse = await axios.post(
            "http://localhost:5000/api/investments/add",
            investmentData,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("✅ Investment saved response:", saveInvestmentResponse.data);

        if (saveInvestmentResponse.data.status !== "success") {
            setErrorMessage("Investment could not be saved. Try again later.");
            return;
        }

        // ✅ Initiate Flutterwave Payment
        const paymentData = {
            amount: investmentAmount,
            plan: selectedPlan,
            email: user.email,
            phone: user.phone,
            currency: "NGN",
            fullName: user.name,
            kycVerified: user.kycVerified ?? false, // Add if required
        };

        console.log("📤 Sending Payment Request with Data:", paymentData);

        console.log("💳 Sending request to initiate Flutterwave payment...");
        const paymentResponse = await axios.post(
            "http://localhost:5000/api/payments/initiate-flutterwave-payment",
            paymentData,
            { headers: { Authorization: `Bearer ${token}` } }
        );

        console.log("📡 Payment response from backend:", paymentResponse.data);

        // ✅ Handle Payment Link
        if (paymentResponse.data?.data?.link) {
            setPaymentLink(paymentResponse.data.data.link);
        } else {
            setErrorMessage("Error generating payment link. Please try again.");
        }
    } catch (error) {
        console.error("❌ Payment Error:", error.response?.data || error.message);
        console.log("🛑 Full Error Object:", error.toJSON ? error.toJSON() : error);
        setErrorMessage(error.response?.data?.message || "Payment failed. Please try again.");
    } finally {
        setProcessing(false);
    }
};


  if (loading) return <p>Loading dashboard...</p>;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Welcome, {user?.name}</h1>
        <div className="user-info-grid">
          <p><strong>Email:</strong> {user?.email}</p>
          <p><strong>Phone:</strong> {user?.phone || "Not Provided"}</p>
          <p><strong>KYC Verified:</strong> {user?.kycVerified ? "Yes" : "No"}</p>
          <p><strong>Total Investments:</strong> {user?.totalInvestments}</p>
        </div>
      </div>

      <h2>Your Investments</h2>
      <div className="investments-container">
  {user?.investments?.length ? (
    user.investments.map((investment, index) => (
      <div key={index} className="investment-card">
        <p><strong>Plan:</strong> {investment.plan}</p>
        <p><strong>Amount:</strong> ₦{investment.amount.toLocaleString()}</p>
        <p><strong>Status:</strong> {investment.status}</p>
        <p><strong>Start Date:</strong> {new Date(investment.startDate).toDateString()}</p>
        <p><strong>Maturity Date:</strong> {new Date(investment.maturityDate).toDateString()}</p>
        <p><strong>Expected Returns:</strong> ₦{investment.expectedReturns.toLocaleString()}</p>
      </div>
    ))
  ) : (
    <p style={{ color: "white", fontWeight: "bold" }}>No active investments</p>
  )}
</div>

      <h2>Invest Now</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

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

        <button onClick={handlePayment} disabled={processing || !selectedPlan || investmentAmount < 500000}>
          {processing ? "Processing..." : "Pay with Flutterwave"}
        </button>
      </div>

      {paymentLink && (
        <a href={paymentLink} target="_blank" rel="noopener noreferrer">
          Proceed to Payment
        </a>
      )}

      <Footer />
    </div>
  );
};

export default Dashboard;