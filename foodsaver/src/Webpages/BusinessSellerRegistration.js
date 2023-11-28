import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage.css';

function BusinessSellerRegistration() {
    const [formData, setFormData] = useState({
        businessName: '',
        businessEmail: '',
        businessLocation: '',
        password: '',
        confirmPassword: '',
        businessLicenseNumber: ''
    });
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;

        if (!passwordRegex.test(password)) {
            setPasswordError(
                'Password must be at least 8 characters long, contain at least one number, one special character, and one letter.'
            );
            return false;
        }
        setPasswordError('');
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        
        const isPasswordValid = validatePassword(formData.password);

        if (isPasswordValid) {
            // Need to connect formData with DB when db is done
            console.log('Form submitted:', formData);
        }
    };
    return (
        <div className= "title">
        <img src="gif.gif" alt="title"/>
        <p>Preserving Flavor, Sealing Freshness: <br/>
        Your Ultimate Food Saver Destination!</p>
            <div className="SellerRegistrationPage">
                <h1>Food Saver</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="businessName"
                        placeholder="Business Name"
                        value={formData.businessName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="businessEmail"
                        placeholder="Business Email"
                        value={formData.businessEmail}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="businessLocation"
                        placeholder="Business Location"
                        value={formData.businessLocation}
                        onChange={handleInputChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {passwordError && <p className="error-message">{passwordError}</p>}
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="businessLicenseNumber"
                        placeholder="Business License Number"
                        value={formData.businessLicenseNumber}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Register</button>
                </form>
                <Link to="/SigninPage"  style={{ color: 'white' }}>Already have an account? Login</Link>
                <Link to="/BuyerRegistrationPage" style={{ color: 'white' }}>Looking to buy? Register as a buyer</Link>
                </div>

            </div>
    );
}

    export default BusinessSellerRegistration;

