import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (

    <div class="container">
    <h1>Food Saver</h1>
<p>Preserving Flavor, Sealing Freshness: <br/>
 Your Ultimate Food Saver Destination!</p>
<input type="text" id="searchInput" placeholder="Search items..."/>
    <button onclick="searchItems()">Search</button>

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
        
        <div className="Homepage">
        <div class="menuBar">

        <ul>
    <li>
      <a href="#">Jump Ahead ▾ </a>
        <ul class="dropdown">
            <li><a href="/ProductPage">Meat and Poultry</a></li>
            <li><a href="/ProductPage">Seafood</a></li>
            <li><a href="/ProductPage">Canned Products</a></li>
            <li><a href="/ProductPage">Dairy</a></li>
            <li><a href="/ProductPage">Beverages</a></li>
            <li><a href="/ProductPage">Premade Meals</a></li>
            <li><a href="/ProductPage">Grains Products</a></li>
            <li><a href="/ProductPage">Fruits</a></li>
            <li><a href="/ProductPage">Vegetable</a></li>
        </ul>
      </li>
 </ul>
 </div>

        <Link to="/SigninPage">
          <button>Login</button>
        </Link>
        <Link to="/BuyerRegistrationPage">
          <button>Sign Up as Buyer</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/SellerRegistrationPage">
          <button>Sign Up as Seller</button>
        </Link>
        <Link to="/ProductPage">
          <button>View Product</button>
        </Link>
        </div>  
    </div>  

  );
}

const items = [
  { id: 1, name: 'Item 1', price: 20.99, image: 'item1.jpg', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', price: 15.49, image: 'item2.jpg', description: 'Description for Item 2' },
  { id: 3, name: 'Item 3', price: 30.00, image: 'item3.jpg', description: 'Description for Item 3' },
  // Add more items as needed
];

function searchItems() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Clear previous results

  const filteredItems = items.filter(item => item.name.toLowerCase().includes(searchTerm));

  if (filteredItems.length === 0) {
      resultsContainer.innerHTML = 'No items found.';
  } else {
      filteredItems.forEach(item => {
          const itemDiv = document.createElement('div');
          itemDiv.classList.add('item');
          itemDiv.innerHTML = `
              <img src="${item.image}" alt="${item.name}">
              <h3>${item.name}</h3>
              <p><strong>Price:</strong> $${item.price.toFixed(2)}</p>
              <p>${item.description}</p>
              <a href="#" onclick="viewItem(${item.id})">View Details</a>
          `;
          resultsContainer.appendChild(itemDiv);
      });
  }
}

function viewItem(itemId) {
  // Add logic to handle item details or navigate to a details page
  alert(`Viewing details for item with ID ${itemId}`);
}

export default HomePage;

