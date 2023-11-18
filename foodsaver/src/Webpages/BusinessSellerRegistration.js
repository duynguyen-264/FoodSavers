import React, { useState } from 'react';
import './SellerRegistrationPage.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    licenseNumber: '',
    businessLocation: '',
    businessType: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.businessName || !formData.licenseNumber || !formData.businessLocation || !formData.businessType) {
      alert("Please fill out all fields.");
      return;
    }

    // Additional validation logic can be added here

    // If all validation passes, you can submit the form or perform other actions
    alert("Registration successful!\nBusiness Name: " + formData.businessName +
          "\nLicense Number: " + formData.licenseNumber +
          "\nBusiness Location: " + formData.businessLocation +
          "\nBusiness Type: " + formData.businessType);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="businessName">Business Name:</label>
      <input
        type="text"
        id="businessName"
        name="businessName"
        value={formData.businessName}
        onChange={handleChange}
        required
      />

      <label htmlFor="licenseNumber">Business Verification (License Number):</label>
      <input
        type="text"
        id="licenseNumber"
        name="licenseNumber"
        value={formData.licenseNumber}
        onChange={handleChange}
        required
      />

      <label htmlFor="businessLocation">Business Location:</label>
      <input
        type="text"
        id="businessLocation"
        name="businessLocation"
        value={formData.businessLocation}
        onChange={handleChange}
        required
      />

      <label htmlFor="businessType">Type of Business:</label>
      <input
        type="text"
        id="businessType"
        name="businessType"
        value={formData.businessType}
        onChange={handleChange}
        required
      />

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
