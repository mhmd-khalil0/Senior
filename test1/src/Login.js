import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // You can add authentication logic here
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  return (
    <div className='App'>
    <div className="login-container">
      <h2>Login</h2>
      <form >
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button >
          Login
        </button>
        <div>
            <span>Don't have an acount?</span> 
            <Link to="/registration">Register</Link> {/* Link to the Register component */}
          </div>
       
      </form>
    </div>
    </div>
  );
}



export default Login;
