import React from 'react';
import { Link } from 'react-router-dom';
import './SigninPage.css';

function SigninPage() {
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