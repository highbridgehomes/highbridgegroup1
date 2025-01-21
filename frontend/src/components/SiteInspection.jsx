import React, { useState } from "react";
import "./SiteInspection.css"; // Import the CSS file for styling

const SiteInspection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    houseAddress: "",
    inspectionDays: "",
    siteToVisit: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="site-inspection">
      <div className="form-container">
        <h1>Book A Site Inspection</h1>
        <p>We are always open for inspection on Wednesday and Saturday from 09:00 AM to 02:00 PM.</p>
        <form onSubmit={handleSubmit} className="inspection-form">
          <div className="form-group">
            <label htmlFor="fullName">Enter Your Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your Full Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Enter Your Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Enter Your Mobile Number</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Your Mobile Number"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="houseAddress">Enter Your House Address</label>
            <textarea
              id="houseAddress"
              name="houseAddress"
              rows="3"
              value={formData.houseAddress}
              onChange={handleChange}
              placeholder="Your House Address"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="inspectionDays">* Days for Inspection*</label>
            <select
              id="inspectionDays"
              name="inspectionDays"
              value={formData.inspectionDays}
              onChange={handleChange}
              required
            >
              <option value="">Select Days</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Saturday">Saturday</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="siteToVisit">* Site to Visit*</label>
            <input
              type="text"
              id="siteToVisit"
              name="siteToVisit"
              value={formData.siteToVisit}
              onChange={handleChange}
              placeholder="Site to Visit"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Drop Your Message (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message (Optional)"
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

export default SiteInspection;