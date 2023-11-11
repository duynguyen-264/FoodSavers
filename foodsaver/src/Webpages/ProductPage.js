import React from 'react';
import { Link } from 'react-router-dom';
import './ProductPage.css';

function ProductPage() {
    return (
      <>
          <div className="ProductPage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default ProductPage;
  
  