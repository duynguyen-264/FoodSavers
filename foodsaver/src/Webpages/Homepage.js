import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (
  <body>
    <div class = "Homepage">
      <h1>Food Oasis</h1>
      <Link to="/signin">
        <button>Login</button>
      </Link>

      <div class = "Cart">
        <div class = "cart"><img src="cart.gif" alt="Cart Icon"/>
    </div>
</div>
</div>
</body>
    );
}
export default HomePage;
