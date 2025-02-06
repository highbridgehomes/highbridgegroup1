import React, { useState } from "react";
import axios from "axios";
import "./DigitalMarketingTraining.css"; 

const DigitalMarketingTraining = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    knowledge: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/digital-marketing/register", formData);
      alert("Registration successful!");
      setFormData({
        name: "",
        email: "",
        mobile: "",
        address: "",
        knowledge: "",
      });
    } catch (error) {
      console.error("Error registering:", error);
      alert("Registration failed.");
    }
  };

  return (
    <div className="digital-marketing-training">
      <div className="form-container">
        <img src="/assets/images/logo/highbridge2.png" alt="Training Logo" className="logo-image" />
        <h1>Digital Marketing Training</h1>
        <p>Provide valid credentials to register for the digital marketing training.</p>
        
        <form className="training-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Enter Your Name</label>
            <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email</label>
            <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Enter Your Mobile Number</label>
            <input type="tel" id="mobile" value={formData.mobile} onChange={handleChange} placeholder="Your Mobile Number" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Enter Your Address</label>
            <textarea id="address" value={formData.address} onChange={handleChange} rows="3" placeholder="Your Address" required></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="knowledge">Drop Your Previous Digital Training Knowledge (Optional)</label>
            <textarea id="knowledge" value={formData.knowledge} onChange={handleChange} rows="3" placeholder="Describe your previous training (if any)"></textarea>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default DigitalMarketingTraining;
