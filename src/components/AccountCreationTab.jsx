import React, { useState } from 'react';
import { addUser } from './UserData';

const AccountCreationTab = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    // ID and creationDate are automatically generated
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the error when the user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};

    // Validation
    if (formData.username.length < 3) {
      validationErrors.username = 'Username must be at least 3 characters long.';
    }

    const phoneNumber = Number(formData.phone);
    if (isNaN(phoneNumber) || phoneNumber.toString().length !== 10) {
      validationErrors.phone = 'Phone number must be a valid number.';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      ...formData,
      id: Math.floor(Math.random() * 1000) + 1,
      creationDate: new Date().toLocaleString(),
    };

    addUser(newUser);
    alert('Account created successfully!');
    setFormData({
      username: '',
      email: '',
      phone: '',
    });
    setErrors({}); // Clear any previous errors
  };

  return (
    <div>
      <h2>Account Creation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Username:
            <input type="text" name="username" value={formData.username} onChange={handleChange} required />
          </label>
          {errors.username && <div style={{ color: 'red' , marginBottom:10}}>{errors.username}</div>}
        </div>
        <div>
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          {errors.phone && <div style={{ color: 'red',marginBottom:10 }}>{errors.phone}</div>}
        </div>
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreationTab;
