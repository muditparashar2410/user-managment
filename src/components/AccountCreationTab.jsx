// AccountCreationTab.js
import React, { useState } from 'react';
import { addUser } from './UserData';

const AccountCreationTab = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    // ID and creationDate are automatically generated
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      ...formData,
      id: Math.floor(Math.random() * 1000) + 1, // Generate a random ID (you can replace this with your logic)
      creationDate: new Date().toLocaleString(), // Use the current timestamp as the creation date
    };

    addUser(newUser);
    alert('Account created successfully!');
    setFormData({
      username: '',
      email: '',
      phone: '',
    });
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreationTab;
