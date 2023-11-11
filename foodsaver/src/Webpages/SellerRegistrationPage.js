import React from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage.css';

function SellerRegistrationPage() {
    return (
      <>
          <div className="SellerRegistrationPage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default SellerRegistrationPage;
  
  