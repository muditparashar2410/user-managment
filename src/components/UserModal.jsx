// UserModal.js
import React from 'react';
import './UserModal.css'; // Import the new CSS file

const UserModal = ({ user, onClose, onGenerateReport }) => {
  const handleGenerateReport = () => {
    // Call the provided callback to generate a report
    onGenerateReport(user);
  };

  return (
    <div>
      <div className="modal-overlay" onClick={onClose}></div>
      <div className="modal-content">
        <h3>User Details</h3>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>ID: {user.id}</p>
        <p>Creation Date: {user.creationDate}</p>
        <button onClick={handleGenerateReport}>Generate Report</button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default UserModal;
