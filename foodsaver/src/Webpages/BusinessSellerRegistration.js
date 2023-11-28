import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './SellerRegistrationPage.css';

function BusinessSellerRegistration() {
  const [businessName, setBusinessName] = useState('');
  const [businessEmail, setBusinessEmail] = useState('');
  const [businessPassword, setBusinessPassword] = useState('');
  const [confirmBusinessPassword, setConfirmBusinessPassword] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [businessNumber, setBusinessNumber] = useState('');
  const [passwordError, setPasswordError] = useState('');

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      console.log(response.data);
    });
  }, []);

  const validatePassword = (password) => {
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      return false;
    }

    setPasswordError('');
    return true;
  };

  const submitReg = () => {
    const isPasswordValid = validatePassword(businessPassword);

    if (isPasswordValid) {
      Axios.post("http://localhost:3001/api/insert", {
        businessName: businessName,
        businessEmail: businessEmail,
        businessPassword: businessPassword,
        confirmBusinessPassword: confirmBusinessPassword,
        businessAddress: businessAddress,
        businessNumber: businessNumber,
      }).then(() => {
        alert("Successful insert");
      });
    }
  };

  return (
    <div className="title">
      <img src="gif.gif" alt="title" />
      <p>Preserving Flavor, Sealing Freshness: <br /> Your Ultimate Food Saver Destination!</p>
      <div className="BuyerRegistrationPage">
        <h1>Business Seller Registration</h1>
        <form>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            onChange={(e) => setBusinessName(e.target.value)}
          />
          <input
            type="text"
            name="businessEmail"
            placeholder="Business Email"
            onChange={(e) => setBusinessEmail(e.target.value)}
          />
          <input
            type="text"
            name="businessAddress"
            placeholder="Business Address"
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
          <input
            type="password"
            name="businessPassword"
            placeholder="Password"
            onChange={(e) => setBusinessPassword(e.target.value)}
          />
          {passwordError && <p className="error-message">{passwordError}</p>}
          <input
            type="password"
            name="confirmBusinessPassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmBusinessPassword(e.target.value)}
          />
          <input
            type="text"
            name="businessNumber"
            placeholder="Business License Number"
            onChange={(e) => setBusinessNumber(e.target.value)}
          />
          <button type="button" onClick={submitReg}>Register</button>
        </form>
        <Link to="/SigninPage" style={{ color: 'white' }}>Already have an account? Login</Link>
        <Link to="/BuyerRegistrationPage" style={{ color: 'white' }}>Looking to buy? Register as a buyer</Link>
      </div>
    </div>
  );
}

export default BusinessSellerRegistration;

