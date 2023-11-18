import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SellerRegistrationPage.css';

function SellerRegistrationPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
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
      <>
          <div className="SellerRegistrationPage">
          <h1>Food Saver</h1>
          <Link to="/SigninPage">
            <button>Login</button>
          </Link>
        </div>
      </>
    );
  }
  
  export default SellerRegistrationPage;
  
  