import React, { useState } from 'react'; // Add import for 'useState'
import './AccountPage.css';

function EditBuyerAccountPage({ formData, onSave }) {
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
        name="name"
        placeholder="Name"
        value={editedData.name}
        onChange={handleInputChange}
      /> <br></br>
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={editedData.email}
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
      <button onClick={handleSaveClick}>Save Changes</button>
    </div>
  );
}

export default EditBuyerAccountPage;
