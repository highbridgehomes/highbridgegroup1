import React from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2>Admin Panel</h2>
      <ul>
        <li onClick={() => navigate("/")}>Dashboard</li>
        <li onClick={() => navigate("/users")}>Users</li>
        <li onClick={() => navigate("/kyc-requests")}>KYC Requests</li>
        <li onClick={() => navigate("/investments")}>Investments</li>
        <li className="logout" onClick={() => navigate("/login")}>Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;