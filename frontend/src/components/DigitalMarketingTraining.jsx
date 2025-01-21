import React from "react";
import "./DigitalMarketingTraining.css"; // Create and style this CSS file

const DigitalMarketingTraining = () => {
  return (
    <div className="digital-marketing-training">
      <div className="form-container">
        <img
          src="/path/to/logo.png" // Replace with the actual path to your logo
          alt="Training Logo"
          className="logo-image"
        />
        <h1>Digital Marketing Training</h1>
        <p>Provide valid credentials to register for the digital marketing training.</p>
        <form className="training-form">
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Enter Your Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Enter Your Address</label>
            <textarea id="address" rows="3" placeholder="Your Address" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="knowledge">Drop Your Previous Digital Training Knowledge (Optional)</label>
            <textarea
              id="knowledge"
              rows="3"
              placeholder="Describe your previous training (if any)"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default DigitalMarketingTraining;