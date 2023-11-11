import React from 'react';
import { Link } from 'react-router-dom';
import './SigninPage.css';

function SigninPage() {
  return (
  <body>
    <div class= "SigninPage">
      <h1>Food Saver Login</h1>
      <Link to="/BuyerRegistrationPage">
        <button>Register as Buyer</button>
      </Link>
      <Link to="/SellerRegistrationPage">
        <button>Register as Seller</button>
      </Link>
      <Link to="/">
        <button>Explore Food Saver</button>
      </Link>

      <div class="SigninContainer"> 

        <h1>Login</h1>
        <form id="loginForm">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required></input>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required></input>
            <button type="submit">Login</button>
        </form>
        <p id="message"></p>
      </div>
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