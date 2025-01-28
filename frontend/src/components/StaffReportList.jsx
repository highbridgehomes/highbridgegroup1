import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './StaffReportList.css';

const StaffReportList = () => {
  const [staffReports, setStaffReports] = useState([]);
  const [timeOut, setTimeOut] = useState('');
  const [isEditableTimeOut, setIsEditableTimeOut] = useState(false);
  const [currentDateTime, setCurrentDateTime] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track current page
  const reportsPerPage = 12; // Changed to 12 reports per page

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDateTime(now.toLocaleString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const isAfter6PM = currentHour >= 18;
    const isBeforeMidnight = currentHour < 24;

    setIsEditableTimeOut(isAfter6PM && isBeforeMidnight);

    axios.get('http://localhost:5000/api/staff-reports')
      .then((response) => {
        setStaffReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching staff reports:', error);
      });

  }, []);

  const handleTimeOutSubmit = async (reportId) => {
    if (isEditableTimeOut) {
      try {
        const response = await axios.put(`http://localhost:5000/api/staff-reports/${reportId}`, {
          timeOut: timeOut,
        });
        const updatedReports = staffReports.map(report =>
          report._id === reportId ? { ...report, timeOut } : report
        );
        setStaffReports(updatedReports);
        alert('TimeOut recorded successfully!');
      } catch (error) {
        console.error('Error updating timeOut:', error);
        alert('Failed to record timeOut!');
      }
    } else {
      alert('You can only time out between 6 PM and Midnight.');
    }
  };

  // Calculate the current page's reports
  const indexOfLastReport = currentPage * reportsPerPage;
  const indexOfFirstReport = indexOfLastReport - reportsPerPage;
  const currentReports = staffReports.slice(indexOfFirstReport, indexOfLastReport);

  // Handle pagination
  const nextPage = () => {
    if (currentPage < Math.ceil(staffReports.length / reportsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="staff-report-list-container">
      {/* Styled Current Date and Time */}
      <div style={styles.dateTimeContainer}>
        <h3 style={styles.dateTimeHeading}>Current Date & Time</h3>
        <p style={styles.dateTimeText}>{currentDateTime}</p>
      </div>

      <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" />
      <h2 style={{ color: '#ffffff' }}>Staff Attendance Reportlists</h2>
      <table className="staff-report-table">
        <thead>
          <tr>
            <th>Serial No (SN)</th>
            <th>Staff Name</th>
            <th>Date</th>
            <th>Branch</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Private Note</th>
            <th>Time In</th>
            <th>Time Out</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentReports.map((report) => (
            <tr key={report._id}>
              <td>{report.sn}</td>
              <td>{report.name}</td>
              <td>{new Date(report.date).toLocaleDateString()}</td>
              <td>{report.branch}</td>
              <td>{report.email}</td>
              <td>{report.mobileNumber}</td>
              <td>{report.privateNote}</td>
              <td>{report.timeIn}</td>
              <td>
                {isEditableTimeOut ? (
                  <input
                    type="time"
                    value={timeOut}
                    onChange={(e) => setTimeOut(e.target.value)}
                  />
                ) : (
                  <span style={{ color: 'red' }}>Not Editable</span>
                )}
              </td>
              <td>
                <button onClick={() => handleTimeOutSubmit(report._id)}>
                  Save TimeOut
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(staffReports.length / reportsPerPage)}>Next</button>
      </div>
    </div>
  );
};

// Inline styles for the date and time
const styles = {
  dateTimeContainer: {
    backgroundColor: '#2D3748', // Dark gray background
    padding: '15px 20px', // Padding around the text
    borderRadius: '8px', // Rounded corners
    marginBottom: '20px', // Spacing below
    textAlign: 'center', // Centered text
    color: '#fff', // White text color
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
  },
  dateTimeHeading: {
    fontSize: '1.5rem', // Slightly larger heading
    margin: '0 0 5px', // Margin below the heading
    fontWeight: 'bold',
  },
  dateTimeText: {
    fontSize: '1.2rem', // Standard font size
    margin: 0, // No margin
  },
};

export default StaffReportList;