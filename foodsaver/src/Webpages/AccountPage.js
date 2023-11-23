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
          </Link> <br></br> <br></br>

          <Link to="/BusinessSellerAccount">
            <button>Business Seller Account</button>
          </Link> <br></br> <br></br>

          <Link to="/IndividualSellerAccount">
            <button>Individual Seller Account</button>
          </Link> <br></br> <br></br>

          <Link to="/BuyerAccountPage">
            <button>Buyer Account</button>
          </Link> <br></br> <br></br>

        </div>
      </>
    );
  }
  
  export default AccountPage;
  
  //active listings will  allow seller to edit info
  