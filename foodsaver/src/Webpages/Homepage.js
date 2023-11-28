import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';

function HomePage() {
  return (

    <div class="container">
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
    <nav className="navbar">
      <ul>
      <div className="dropdown">
          <span>Categories</span>
          <div className="dropdown-content">
            <a href="#category1"><Link to="/ProductPage">Meat and Poultry</Link></a>
            <a href="#category1"><Link to="/ProductPage">Seafood</Link></a>
            <a href="#category1"><Link to="/ProductPage">Canned Products</Link></a>
            <a href="#category1"><Link to="/ProductPage">Dairy</Link></a>
            <a href="#category1"><Link to="/ProductPage">Beverages</Link></a>
            <a href="#category1"><Link to="/ProductPage">Premade Meals</Link></a>
            <a href="#category1"><Link to="/ProductPage">Grains Products</Link></a>
            <a href="#category1"><Link to="/ProductPage">Fruits</Link></a>
            <a href="#category1"><Link to="/ProductPage">Vegetable</Link></a>
          </div>
        </div>
      <div className="zipcode-bar">
          <input type="text" placeholder="Zipcode..." />
          <button onClick={searchItems}>Enter</button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search items..." />
          <button onClick={searchItems}>Search</button>
        </div>
        <li>
          <Link to="/BuyerRegistrationPage">Register</Link>
        </li>
        <li>
          <Link to="/SigninPage">Login</Link>
        </li>
        <li>
          <Link to="/AccountPage">My Account</Link>
        </li>
      </ul>
    </nav>

   <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
 </div>

 <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
 </div>

 <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
 </div>

 <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
 </div>

 <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
 </div>

 <div class= "listing">
 <a href="listing.html"><img src="seafood.jpg" height="300" width="400"/></a>
 <div class= "desc">
 <div class="Itemname">Seafood</div>
<div class="Itemprice">2.99</div>
</div>
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

