import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <>
        <div className="Homepage">
        <h1>Food Saver</h1>
        <Link to="/SigninPage">
          <button>Login</button>
        </Link>
        <Link to="/BuyerRegistrationPage">
          <button>Sign Up as Buyer</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/ProductPage">
          <button>View Product</button>
        </Link>
  
      </div>
    </>
  );
}

export default HomePage;

