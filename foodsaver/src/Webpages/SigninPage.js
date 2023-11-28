import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SigninPage.css';
import Axios from 'axios';

function SigninPage() {
  const [loginUsername, setloginUsername] = useState('');
  const [loginPassword, setloginPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetPasswordEmail, setResetPasswordEmail] = useState('');

  const submitForgotPassword = () => {
    Axios.post('http://localhost:3001/api/forgotPassword', {
      resetPasswordEmail: resetPasswordEmail,
    })
      .then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          alert('Password reset email sent. Check your email for instructions.');
          setShowForgotPassword(false);
        }
      })
      .catch((error) => {
        console.error('Error submitting forgot password request:', error);
        // Handle error, e.g., display an error message to the user
      });
  };

  const submitLogin = () => {
    Axios.post('http://localhost:3001/api/login', {
      loginUsername:  loginUsername,
      loginPassword:  loginPassword,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
      } else {
        alert('Login successful');
        // You can redirect to another page or perform other actions here
      }
    });
  };
  return (
  <body>

    <div class= "SigninPage">  
      <img src="gif.gif" alt="title"/>
<p>Preserving Flavor, Sealing Freshness: <br/>
 Your Ultimate Food Saver Destination!</p>
 <div class="image-container">
    <a href="dairy.html"><img class="scrolling-image" src="dairy.jpg" height="200" width="250"/></a>
    <a href="premade.html"><img class="scrolling-image" src="premade.jpg" height="200" width="250"/></a>
    <a href="grain.html"><img class="scrolling-image" src="grain.jpg"  height="200" width="250"/></a>
    <a href="fruits.html"><img class="scrolling-image" src="fruits.jpg" height="200" width="250"/></a>
    <a href="veg.html"><img class="scrolling-image" src="veg.jpg"  height="200" width="250"/></a>
    <a href="can.html"><img class="scrolling-image" src="can.jpg" height="200" width="250"/></a>
    <a href="seafood.html"><img class="scrolling-image" src="seafood.jpg" height="200" width="250"/></a>
    <a href="meat.html"><img class="scrolling-image" src="meat.jpg" height="200" width="250"/></a>
    <a href="bev.html"><img class="scrolling-image" src="bev.jpg" height="200" width="250"/></a>
    </div>
      <div class= "bar">
      <Link to="/BuyerRegistrationPage">
        <button>Register as Buyer</button>
      </Link>
      <Link to="/SellerRegistrationPage">
        <button>Register as Seller</button>
      </Link>
      <Link to="/">
        <button>Explore Food Saver</button>
      </Link>
  </div>
      <div class="SigninContainer"> 

        <h1>Login</h1>
        <form id="loginForm">
        <input
          type="varchar"
          name=" loginUsername"
          placeholder="Username"
          onChange={(e) => {
            setloginUsername(e.target.value);
          }}
        />
        <input
          type="varchar"
          name=" loginPassword"
          placeholder="Password"
          onChange={(e) => {
            setloginPassword(e.target.value);
          }}
        />     
        <br/>   
        <button onClick={submitLogin}>Login</button>
        </form>
        <p className="forgot-password">
           <span>
           <button id= "gotpw"onClick={() => setShowForgotPassword(true)}>
              Forgot Password?
            </button>
          </span>
        </p>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPassword && (
        <div className="passwords">
          <div className="passwordcontent">
            <p>
              Enter your email address to receive instructions for resetting your password.
            </p>
            <input
              type="email"
              name="resetPasswordEmail"
              placeholder="Email"
              onChange={(e) => setResetPasswordEmail(e.target.value)}
            />
            <button onClick={submitForgotPassword}>Reset Password</button>
          </div>
        </div>
      )}
    </div>
  </body>
);

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const message = document.getElementById("message");

  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = loginForm.username.value;
      const password = loginForm.password.value;

      // You can add your authentication logic here
      if (username === "yourUsername" && password === "yourPassword") {
          message.textContent = "Login successful!";
      } else {
          message.textContent = "Invalid username or password. Please try again.";
      }
  });
});
}

export default SigninPage;