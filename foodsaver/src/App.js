import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import SigninPage from './Webpages/SigninPage';
import ProductPage from './Webpages/ProductPage';
import ListingPage from './Webpages/ListingPage';
import ReservePage from './Webpages/ReservePage';
import SellerRegistrationPage from './Webpages/SellerRegistrationPage';
import BuyerRegistrationPage from './Webpages/BuyerRegistrationPage';
import AccountPage from './Webpages/AccountPage';
import BusinessSellerRegistration from './Webpages/BusinessSellerRegistration';
import IndividualSellerRegistration from './Webpages/IndividualSellerRegistration';    
import BusinessSellerAccount from './Webpages/BusinessSellerAccount';
import EditBusinessSellerAccount from './Webpages/EditBusinessSellerAccount';
import IndividualSellerAccount from './Webpages/IndividualSellerAccount';
import EditIndividualSellerAccount from './Webpages/EditIndividualSellerAccount';
import BuyerAccountPage from './Webpages/BuyerAccountPage';
import EditBuyerAccountPage from './Webpages/EditBuyerAccountPage';

function App() {
  const [formData, setFormData] = useState({}); // Initialize with the user's data
  const navigateToEditBusinessSellerAccount = () => {
    window.location.href = '/EditBusinessSellerAccount';
  };

  const navigateToEditIndividualSellerAccount = () => {
    window.location.href = '/EditIndividualSellerAccount';
  };

  const navigateToEditBuyerAccountPage = () => {
    window.location.href = '/EditBuyerAccountPage';
  };

  const handleEditSave = (editedData) => {
    setFormData(editedData);
    navigateToEditBusinessSellerAccount();
    navigateToEditIndividualSellerAccount();
    navigateToEditBuyerAccountPage();
  };
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
            <Route path="/AccountPage" element={<AccountPage />} />
            <Route path="/BusinessSellerRegistration" element={<BusinessSellerRegistration />} />
            <Route path="/IndividualSellerRegistration" element={<IndividualSellerRegistration />} />
            <Route path="/BusinessSellerAccount" element={<BusinessSellerAccount formData={formData} onEditClick={navigateToEditBusinessSellerAccount} />} />
            <Route path="/EditBusinessSellerAccount" element={<EditBusinessSellerAccount formData={formData} onSave={handleEditSave} />}/>
            <Route path="/IndividualSellerAccount" element={<IndividualSellerAccount formData={formData} onEditClick={navigateToEditIndividualSellerAccount} />} />
            <Route path="/EditIndividualSellerAccount" element={<EditIndividualSellerAccount formData={formData} onSave={handleEditSave} />}/>
            <Route path="/BuyerAccountPage" element={<BuyerAccountPage formData={formData} onEditClick={navigateToEditBuyerAccountPage} />} />
            <Route path="/EditBuyerAccountPage" element={<EditBuyerAccountPage formData={formData} onSave={handleEditSave} />}/>
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