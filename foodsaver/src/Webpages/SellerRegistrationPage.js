import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage.css';

function SellerRegistrationPage() {
    return (
      <>
          <div className="SellerRegistrationPage">
          <h1>Food Saver</h1>
          <Link to="/BusinessSellerRegistration">
            <button>Register as a Business Seller</button>
          </Link>
          <Link to="/IndividualSellerRegistration">
            <button>Register as an Individual Seller</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default SellerRegistrationPage;
  
  