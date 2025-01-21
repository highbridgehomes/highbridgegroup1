import React from "react";
import "./BecomeRealtor.css";

const BecomeRealtor = () => {
  return (
    <div className="become-realtor">
      <div className="form-container">
        <img 
          src="/path-to-your-logo.png" 
          alt="Logo" 
          className="logo-image" 
        /> {/* Add your logo path here */}
        <h1>Become a Realtor</h1>
        <p>Provide valid credentials to become a realtor.</p>
        <form className="realtor-form">
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="username">Enter Your Username</label>
            <input type="text" id="username" placeholder="Your Username" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Enter Your Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Select Gender</label>
            <select id="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Enter Your Date Of Birth</label>
            <input type="date" id="dob" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Enter Your Address</label>
            <textarea id="address" rows="3" placeholder="Your Address" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="bankName">Enter Your Bank Name</label>
            <input type="text" id="bankName" placeholder="Your Bank Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="accountName">Enter Your Account Name</label>
            <input type="text" id="accountName" placeholder="Your Account Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="accountNumber">Enter Your Account Number</label>
            <input type="text" id="accountNumber" placeholder="Your Account Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="referrerCode">Enter Your Referrer's Code (Optional)</label>
            <input type="text" id="referrerCode" placeholder="Referrer's Code" />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BecomeRealtor;