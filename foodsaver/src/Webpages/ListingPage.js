import React from 'react';
import { Link } from 'react-router-dom';
import './ListingPage.css';

function ListingPage() {
    return (
      <>
          <div className="ListingPage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default ListingPage;
  
  