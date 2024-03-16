import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const RegistrationPageCoach = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const errors = {};
    if (!formData.email) {
      errors.email = 'Email is required';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.name) {
      errors.name = 'Name is required';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Submit the form
      console.log('Form submitted:', formData);
      // You can send the form data to the server or perform any further action here
    }
  };

  return (
    <div className='App'>
      <div className='login-container'> 
      <h2>Registration for Coach</h2>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
        <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
        <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
        <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">Register</button>
        <div>
            <span>Already have an account?</span> 
            <Link to="/">Login</Link> {/* Link to the Register component */}
          </div>
      </form>
      </div>
    </div>
  );
};

export default RegistrationPageCoach;
