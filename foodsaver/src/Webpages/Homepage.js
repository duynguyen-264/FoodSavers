import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
    <>
        <div className="Homepage">
        <h1>Food Oasis</h1>
        <Link to="/SigninPage">
          <button>Login</button>
        </Link>

        <div className="Cart">
          <div className="cart">
            <img src="cart.gif" alt="Cart Icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;

