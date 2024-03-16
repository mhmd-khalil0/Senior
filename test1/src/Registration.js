import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div >
      <div className='container'>
        <div className='bigdiv'>
        <div className='button-container'>
        <h2>Select your role</h2>
        <Link to="/register">
        <button className='button'>Player</button>
        </Link>
        <Link to="/register2">
        <button className='button'>Coach</button>
        </Link>
        <Link to="/register3">
        <button className='button'>Academy</button>
        </Link>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;