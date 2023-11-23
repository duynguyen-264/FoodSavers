import React from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage';

function BusinessSellerAccount({ formData, onEditClick }) {
    return (
      <div className='SellerRegistrationPage'>
        <h2>User Profile</h2>
        <p>Business Name: {formData.businessName}</p>
        <p>Business Email: {formData.businessEmail}</p>
        <p>Business Location: {formData.businessLocation}</p>
        <p>Business Licence number: {formData.businessLicenseNumber}</p>
        <p>Password: {formData.password}</p>
        <button onClick={onEditClick}>Edit Profile</button>

        <Link to="/AccountPage"  style={{ color: 'white' }}>
          Not a business seller? <br></br> Click to return to main account page
        </Link>
      </div>
    );
  }
  
  export default BusinessSellerAccount;
  
  