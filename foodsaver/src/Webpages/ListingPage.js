import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './ListingPage.css';

function ListingPage() {
    const [itemName, setitemName] = useState('');
    const [ itemPrice, setitemPrice] = useState('');
    const [ itemExp, setitemExp] = useState('');
    const [ itemDesc, setitemDesc] = useState('');
    const [ itemAddress, setitemAddress] = useState('');
    const [ itemUnit, setitemUnit] = useState('');
    const [ itemIMG, setitemIMG] = useState('');
    const [ itemCat, setitemCat] = useState('');


    useEffect(()=>{
        Axios.get("http://localhost:3001/api/get"). then((response)=> {
            console.log(response.data);
        })
            },[]);
            
            const submitReg=()=> {
                Axios.post("http://localhost:3001/api/insert", {
                    itemName: itemName, 
                    itemPrice:itemPrice, 
                    itemExp:itemExp, 
                    itemDesc: itemDesc, 
                    itemAddress: itemAddress, 
                    itemUnit:itemUnit,
                    itemIMG:itemIMG,
                    itemCat:itemCat,
        
                }).then (()=> {
                    alert("successful insert");
                });
            };
    return (
        <div className= "title">
        <img src="gif.gif" alt="title"/>
        <p>Preserving Flavor, Sealing Freshness: <br/>
        Your Ultimate Food Saver Destination!</p>
            <div className="SellerRegistrationPage">
                <h1>Create a Listing</h1>
                <form >
                    <input
                        type="char"
                        name="itemName"
                        placeholder="Product Name"
                        onChange={(e) => {
                            setitemName(e.target.value)
                          }  }
                    />
                    <input
                        type="float"
                        name="itemPrice"
                        placeholder="Product Price"
                        onChange={(e) => {
                            setitemPrice(e.target.value)
                          }  }
                    />
                    <input
                        type="char"
                        name="itemDesc"
                        placeholder="Product Description"
                        onChange={(e) => {
                            setitemDesc(e.target.value)
                          }  }
                    />
                    <input
                        type="date"
                        name="itemExp"
                        placeholder="Expiration Date"
                        onChange={(e) => {
                            setitemExp(e.target.value)
                          }  }
                    />
                        <input
                        type="varchar"
                        name="itemAddress"
                        placeholder="Pickup Address"
                        onChange={(e) => {
                            setitemAddress(e.target.value)
                          }  }
                    />
                        <input type="int" 
                         name="itemUnit"
                        placeholder="Number of Units"
                        onChange={(e) => {
                            setitemUnit(e.target.value)
                          }  }
                    />
               <select name="itemCat" type= "char"                        
                         placeholder="Number of Units"
                        onChange={(e) => {
                            setitemCat(e.target.value)
                          }  } required>
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
                <input type="file" id="itemIMG" accept="image/*"                        
                onChange={(e) => {
                            setitemIMG(e.target.value)
                          }  } />

                <button onClick={submitReg}>Create Listing</button>
            </form>
        </div>
        </div>

    );
}

    export default ListingPage;