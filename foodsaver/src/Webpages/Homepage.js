import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import './Homepage.css';

function HomePage() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((response) => {
      setData(response.data.tbl_sellerlisting);
    });
  }, []);

  const getItemDetails = async (itemId) => {
    try {
      const response = await Axios.get(`http://localhost:3001/api/getItem/${itemId}`);
      // Handle the response data as needed, e.g., navigate to a details page
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching item details:", error);
    }
  };

  const [zipcode1, setZipcode1] = useState('');
  const [zipcode2, setZipcode2] = useState('');
  const [distance, setDistance] = useState(null);

  const handleZipcodeSubmit = async () => {
    try {
      console.log('Zipcode 1:', zipcode1);
      console.log('Zipcode 2:', zipcode2);
      const apiKey = 'js-Fpr03KGfSk8I1ODTYy7UWZWXHz3ujTJ0ZtxnZeKUy6OmX5f09iKhDt9oQZdq9znK'; 
      const response = await Axios.get(`https://www.zipcodeapi.com/rest/${apiKey}/distance.json/${zipcode1}/${zipcode2}/mile`);
      const { distance } = response.data;
      setDistance(distance);
    } catch (error) {
      console.error('Error fetching distance:', error);
    
    }
  };

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
      <input type="text" placeholder="Your Zipcode" value={zipcode1} onChange={(e) => setZipcode1(e.target.value)} />
      <input type="text" placeholder="Listing Zipcode" value={zipcode2} onChange={(e) => setZipcode2(e.target.value)} />
      <button onClick={handleZipcodeSubmit}>Calculate Distance</button>
      {distance && <p>Distance between {zipcode1} and {zipcode2}: {distance} miles</p>}
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



    <div>
  {data.map((item) => (
    <div key={item.itemID} className="listing">
      <Link to={`/listing/${item.itemID}`}>
        <img src={item.itemIMG} alt={item.itemName} height="300" width="400" />
      </Link>
      <div className="Itemname">{item.itemName}</div>
      <div className="desc">{item.itemDesc}</div>
      <div className="Itemprice">${item.itemPrice}</div>
      <div className="Itemexp">{new Date(item.itemExp).toLocaleDateString()}</div>
      <div className="Itemaddress">{item.itemAddress}</div>
      <div class= "listingbutton">
      <button onclick="pickUp(1)">Pick Up</button>
      <span className="button-spacing"></span>
      <button onclick="reserveFoodItem(1)">Reserve</button>
      </div>

    </div>
  ))}
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

