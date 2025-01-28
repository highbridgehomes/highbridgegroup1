import React, { useState } from 'react';
import axios from 'axios';
import './AddInventory.css';

const AddInventory = () => {
  const [inventory, setInventory] = useState({
    no: '',
    particulars: '',
    productCode: '',
    qty: 0,
    unitPrice: 0,
    qtyOut: 0,
    qtyIn: 0,
  });

  const [submissionStatus, setSubmissionStatus] = useState(null); // New state to track submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInventory((prevInventory) => ({
      ...prevInventory,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all necessary fields are filled
    if (!inventory.no || !inventory.particulars || !inventory.productCode || inventory.qty <= 0 || inventory.unitPrice <= 0 || inventory.qtyIn < 0 || inventory.qtyOut < 0) {
      console.error("Validation failed: Some fields are missing or invalid");
      alert("Please fill all required fields correctly.");
      return;
    }

    // Log the data to verify it before sending
    console.log("Submitting inventory data:", inventory);

    axios
      .post('http://localhost:5000/api/energy-inventory', inventory)
      .then((response) => {
        // Log the response to verify successful submission
        console.log("Response from API:", response.data);
        alert(response.data.message);
        
        // Update submission status and reset form
        setSubmissionStatus('success');
        setInventory({
          no: '',
          particulars: '',
          productCode: '',
          qty: 0,
          unitPrice: 0,
          qtyOut: 0,
          qtyIn: 0,
        });
      })
      .catch((error) => {
        console.error("Error occurred during the request:", error);

        // Check if error is from server or network
        if (error.response) {
          console.error("Server error response:", error.response.data);
          console.error("Status code:", error.response.status);
          alert(`Error: ${error.response.data.message || 'An error occurred on the server'}`);
        } else if (error.request) {
          console.error("No response received:", error.request);
          alert("Error: No response from server. Please check your connection or try again later.");
        } else {
          console.error("Error setting up request:", error.message);
          alert(`Error: ${error.message}`);
        }

        // Update submission status to error
        setSubmissionStatus('error');
      });
  };

  return (
    <div className="add-inventory-container">
        {/* Add logo image here */}
      <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" className="logo" />
      <h2>Add New Inventory Item</h2>
      
      {/* Display success or error message */}
      {submissionStatus === 'success' && <div className="success-message">Inventory item added successfully!</div>}
      {submissionStatus === 'error' && <div className="error-message">There was an error submitting the form. Please try again.</div>}
      
      <form onSubmit={handleSubmit} className="inventory-form">
        <label>No:
          <input
            type="number"
            name="no"
            value={inventory.no}
            onChange={handleChange}
            required
          />
        </label>

        <label>Particulars:
          <input
            type="text"
            name="particulars"
            value={inventory.particulars}
            onChange={handleChange}
            required
          />
        </label>

        <label>Product Code:
          <input
            type="text"
            name="productCode"
            value={inventory.productCode}
            onChange={handleChange}
            required
          />
        </label>

        <label>Quantity:
          <input
            type="number"
            name="qty"
            value={inventory.qty}
            onChange={handleChange}
            required
          />
        </label>

        <label>Unit Price:
          <input
            type="number"
            name="unitPrice"
            value={inventory.unitPrice}
            onChange={handleChange}
            required
          />
        </label>

        <label>Quantity In:
          <input
            type="number"
            name="qtyIn"
            value={inventory.qtyIn}
            onChange={handleChange}
            required
          />
        </label>

        <label>Quantity Out:
          <input
            type="number"
            name="qtyOut"
            value={inventory.qtyOut}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit" className="submit-btn">Add Inventory</button>
      </form>
    </div>
  );
};

export default AddInventory;