import React, { useState } from 'react'; // Add import for 'useState'
import './SellerRegistrationPage';

function EditBusinessSellerAccount({ formData, onSave }) {
  const [editedData, setEditedData] = useState(formData);
  const [passwordError, setPasswordError] = useState(''); // Initialize passwordError state

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  const handleSaveClick = () => {
    if (editedData.password !== editedData.confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // Reset passwordError if passwords match
    setPasswordError('');

    // Call onSave with the edited data
    onSave(editedData);
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <input
        type="text"
        name="businessName"
        placeholder="Business Name"
        value={editedData.businessName}
        onChange={handleInputChange}
      /> <br></br>
      <input
        type="email"
        name="businessEmail"
        placeholder="Business Email"
        value={editedData.businessEmail}
        onChange={handleInputChange}
      /> <br></br>
      <input
        type="text"
        name="businessLocation"
        placeholder="Business Location"
        value={editedData.businessLocation}
        onChange={handleInputChange}
      /> <br></br>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={editedData.password}
        onChange={handleInputChange}
    /> <br></br>
        {passwordError && <p className="error-message">{passwordError}</p>}
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={editedData.confirmPassword}
        onChange={handleInputChange}
    /> <br></br>
      <input
        type="text"
        name="businessLicenseNumber"
        placeholder="Business License Number"
        value={editedData.businessLicenseNumber}
        onChange={handleInputChange}
    /> <br></br>
      <button onClick={handleSaveClick}>Save Changes</button>
    </div>
  );
}

export default EditBusinessSellerAccount;