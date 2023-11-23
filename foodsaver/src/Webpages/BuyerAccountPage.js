import React from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage';

function BuyerAccountPage({ formData, onEditClick }) {
    return (
      <div className='SellerRegistrationPage'>
        <h2>User Profile</h2>
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Password: {formData.password}</p>
        <button onClick={onEditClick}>Edit Profile</button>

        <Link to="/AccountPage"  style={{ color: 'white' }}>Not a buyer? <br></br> Click to return to main account page</Link>
      </div>
    );
  }
  
  export default BuyerAccountPage;
  
  