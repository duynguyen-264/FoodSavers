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
      <p> allow seller to view and edit and create listings</p>
        </div>
      </>
    );
  }
  
  export default AccountPage;
  
  