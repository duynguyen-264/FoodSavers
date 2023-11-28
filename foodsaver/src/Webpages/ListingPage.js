import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ListingPage.css';

function ListingPage() {
    const [formData, setFormData] = useState({
      itemName: '',
      itemPrice: '',
      itemDesc: '',
      itemExp: '',
      itemAddress: '',
      itemCat: '',
      itemUnit: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

    };
    return (
        <div className= "title">
        <img src="gif.gif" alt="title"/>
        <p>Preserving Flavor, Sealing Freshness: <br/>
        Your Ultimate Food Saver Destination!</p>
            <div className="SellerRegistrationPage">
                <h1>Create a Listing</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="itemName"
                        placeholder="Product Name"
                        value={formData.itemName}
                        onChange={handleInputChange}
                    />
                    <input
                        type="email"
                        name="itemPrice"
                        placeholder="Product Price"
                        value={formData.itemPrice}
                        onChange={handleInputChange}
                    />
                    <input
                        type="text"
                        name="itemDesc"
                        placeholder="Product Description"
                        value={formData.itemDesc}
                        onChange={handleInputChange}
                        />
                    <input
                        type="date"
                        name="itemExp"
                        placeholder="Expiration Date"
                        value={formData.itemExp}
                        onChange={handleInputChange}
                        />
                        <input
                        type="text"
                        name="itemAddress"
                        placeholder="Pickup Address"
                        value={formData.itemAddress}
                        onChange={handleInputChange}
                        />
                        <input type="number" 
                         name="itemUnit"
                        placeholder="Number of Units"
                        value={formData.itemUnit}
                        onChange={handleInputChange} />

               <select id="productCategory" value={formData.itemCat} required>
                    <option>--Select Category--</option>
                    <option >Meat and Poultry</option>
                    <option >Seafood</option>
                    <option >Canned Products</option>
                    <option>Dairy</option>
                    <option >Beverages</option>
                    <option >Premade Meals</option>
                    <option >Grains Products</option>
                    <option >Fruits</option>
                    <option >Vegetable</option>
                    
                </select>
                <input type="file" id="productImage" accept="image/*" onChange={handleInputChange}/>

                <button type="submit">Create Listing</button>
            </form>
        </div>
        </div>
    );
}

    export default ListingPage;

