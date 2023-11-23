import React from 'react';
import { Link } from 'react-router-dom';
import './AccountPage.css';

function AccountPage() {
    return (
      <>
          <div className="AccountPage">
          <h1>Food Saver</h1>
          <Link to="/">
        <button>Explore Food Saver</button>
      </Link>
          <Link to="/ListingPage">
            <button>Create a Listing</button>
          </Link>
          <Link to="/ListingPage">
            <button>Active Listings</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default AccountPage;
  
  //active listings will  allow seller to edit info
  