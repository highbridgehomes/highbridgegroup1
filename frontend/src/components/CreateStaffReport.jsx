import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CreateStaffReport.css'; // Import styling for CreateStaffReport component

const CreateStaffReport = () => {
  const [staffReport, setStaffReport] = useState({
    sn: '',
    name: '', // Changed from staffName to name
    date: '',
    branch: '',
    email: '',
    mobileNumber: '',
    privateNote: '',
    timeIn: '',
    timeOut: '',
  });

  const [isTimeOutEditable, setIsTimeOutEditable] = useState(false);

  useEffect(() => {
    // Enable timeOut field only after 6 PM
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    if (currentHour >= 18) {
      setIsTimeOutEditable(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the request body to verify the format
    console.log('Submitting staff report:', staffReport);

    try {
      const response = await axios.post('http://localhost:5000/api/staff-reports', staffReport);
      console.log('Server response:', response.data);

      alert(response.data.message || 'Staff report submitted successfully!');
      setStaffReport({
        sn: '',
        name: '',
        date: '',
        branch: '',
        email: '',
        mobileNumber: '',
        privateNote: '',
        timeIn: '',
        timeOut: '',
      });
    } catch (error) {
      console.error('Error submitting staff report:', error);

      if (error.response) {
        // Log server-side errors
        console.error('Server error response:', error.response.data);
        alert(`Error: ${error.response.data.message || 'An error occurred'}`);
      } else if (error.request) {
        // Log request errors
        console.error('No response received:', error.request);
        alert('Error: No response received from the server');
      } else {
        // Log other errors
        console.error('Unexpected error:', error.message);
        alert(`Unexpected error: ${error.message}`);
      }
    }
  };

  return (
    <div className="create-staff-report-container">
      <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" />
      <h2 style={{ color: '#ffffff' }}>Staff Attendance Report</h2>
      <form onSubmit={handleSubmit} className="staff-report-form">
        <label>
          Serial No (SN):
          <input
            type="number"
            name="sn"
            value={staffReport.sn}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Staff Name:
          <input
            type="text"
            name="name"
            value={staffReport.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date:
          <input
            type="date"
            name="date"
            value={staffReport.date}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Branch:
          <input
            type="text"
            name="branch"
            value={staffReport.branch}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={staffReport.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Mobile Number:
          <input
            type="text"
            name="mobileNumber"
            value={staffReport.mobileNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Private Note:
          <textarea
            name="privateNote"
            value={staffReport.privateNote}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time In:
          <input
            type="time"
            name="timeIn"
            value={staffReport.timeIn}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Time Out:
          <input
            type="time"
            name="timeOut"
            value={staffReport.timeOut}
            onChange={handleChange}
            disabled={!isTimeOutEditable}
          />
        </label>

        <button type="submit" className="submit-btn">Submit Report</button>
      </form>
    </div>
  );
};

export default CreateStaffReport;