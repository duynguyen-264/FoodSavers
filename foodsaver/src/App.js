import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import SigninPage from './Webpages/SigninPage';
import ProductPage from './Webpages/ProductPage';
import ListingPage from './Webpages/ListingPage';
import ReservePage from './Webpages/ReservePage';
import SellerRegistrationPage from './Webpages/SellerRegistrationPage';
import BuyerRegistrationPage from './Webpages/BuyerRegistrationPage';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>  
            <Route path="/" element={<HomePage/>} />
            <Route path="/SigninPage" element={<SigninPage />} />
            <Route path="/SellerRegistrationPage" element={<SellerRegistrationPage />} />
            <Route path="/BuyerRegistrationPage" element={<BuyerRegistrationPage />} />
            <Route path="/ProductPage" element={<ProductPage />} />
            <Route path="/ListingPage" element={<ListingPage />} />
            <Route path="/ReservePage" element={<ReservePage />} />

      </Routes>

    </div>
    </Router>
  );
}

export default App;

//Pages:

//Product page: all listings, search bar, tabs, buttons, zip code, etc.
//Login Page: login
//Registration page for buyer
//Registration page for sellers (business/individual)
//item page: gps api map
//create listing page (buyer)
//reserve listing
//account page EXTRA