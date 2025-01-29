// src/components/ReportList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ReportList.css'; // Import the styling


const ReportList = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch all reports from the backend
    axios.get('https://highbridge-api-2.onrender.com/api/reports')
      .then((response) => {
        setReports(response.data);
      })
      .catch((error) => {
        console.error('Error fetching reports:', error);
      });
  }, []);

  return (
    <div className="report-list-container">
       <img src="/assets/images/logo/highbridge2.png" alt="Highbridge Homes Logo" />
      <h2 style={{ color: '#ffffff' }}>Staff Weekly Reportlist</h2>
      <table className="report-table">
        <thead>
          <tr>
            <th>Staff Name</th>
            <th>Date</th>
            <th>Department</th>
            <th>Task Accomplished</th>
            <th>Issues</th>
            <th>Pending Tasks</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report._id}>
              <td>{report.staffName}</td>
              <td>{new Date(report.date).toLocaleDateString()}</td>
              <td>{report.department}</td>
              <td>{report.taskAccomplished}</td>
              <td>{report.issues}</td>
              <td>{report.pendingTasks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportList;