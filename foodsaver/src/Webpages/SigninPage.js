import React from 'react';
import { Link } from 'react-router-dom';

function SigninPage() {
  return (
  <body>
    <div class= "SigninPage">
      <h1>Food Oasis Login</h1>
      <Link to="/notification">
        <button>Shop</button>
      </Link>
      <Link to="/inventory">
        <button>Account</button>
      </Link>
      <Link to="/summary">
        <button>Contact</button>
      </Link>
      <Link to="/">
        <button>Back to Home</button>
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

