import React from 'react';
import { Link } from 'react-router-dom';
import './ReservePage.css';

function ReservePage() {
    return (
      <>
          <div className="ReservePage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default ReservePage;
  
  