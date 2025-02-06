import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DigitalMarketingTable.css'; // Updated styling for the table

const DigitalMarketingTable = () => {
  const [registrations, setRegistrations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch all registrations from the backend
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/digital-marketing/registrations');
        setRegistrations(response.data);
      } catch (err) {
        setError('Error fetching registrations');
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrations();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="digital-marketing-table-container">
      <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" />
      <h2 className="title">All Digital Marketing Registrations</h2>
      <table className="styled-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Knowledge</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((registration) => (
            <tr key={registration._id}>
              <td>{registration.name}</td>
              <td>{registration.email}</td>
              <td>{registration.mobile}</td>
              <td>{registration.address}</td>
              <td>{registration.knowledge}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DigitalMarketingTable;