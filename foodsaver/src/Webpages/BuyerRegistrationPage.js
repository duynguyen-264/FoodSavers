import React from 'react';
import { Link } from 'react-router-dom';
import './BuyerRegistrationPage.css';

function BuyerRegistrationPage() {
    return (
      <>
          <div className="BuyerRegistrationPage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default BuyerRegistrationPage;
  
  