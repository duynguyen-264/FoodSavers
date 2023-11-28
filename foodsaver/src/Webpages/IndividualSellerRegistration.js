import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage.css';

function IndividualSellerRegistration() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        location: '',
        password: '',
        confirmPassword: '',
        SSN: ''
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
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="location"
                        placeholder="Location (zipcode)"
                        value={formData.location}
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
                        name="ssn"
                        placeholder="Social Security Number"
                        value={formData.SSN}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Register</button>
                </form>
                <Link to="/SigninPage"  style={{ color: 'white' }}>Already have an account? Login</Link>
                <Link to="/SellerRegistrationPage" style={{ color: 'white' }}>Looking to sell? Register as a seller</Link>
                </div>

            </div>
    );
}

    export default IndividualSellerRegistration;

