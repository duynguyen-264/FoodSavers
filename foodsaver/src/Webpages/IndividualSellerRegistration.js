import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import './SellerRegistrationPage.css';

function IndividualSellerRegistration() {
    const [individualName, setindividualName] = useState('');
    const [ individualEmail, setindividualEmail] = useState('');
    const [ individualPassword, setindividualPassword] = useState('');
    const [ confirm_individualPassword, setconfirm_individualPassword] = useState('');
    const [ individualAddress, setindividualAddress] = useState('');
    const [ individualSSN, setindividualSSN] = useState('');


    useEffect(()=>{
Axios.get("http://localhost:3001/api/get"). then((response)=> {
    console.log(response.data);
})
    },[]);
    
    const submitReg=()=> {
        Axios.post("http://localhost:3001/api/insert", {
            individualName: individualName, 
            individualEmail:individualEmail, 
            individualPassword:individualPassword, 
            confirm_individualPassword: confirm_individualPassword, 
            individualAddress: individualAddress, 
            individualSSN:individualSSN,

        }).then (()=> {
            alert("successful insert");
        });
    };

    return (
      <div class= "title">
      <img src="gif.gif" alt="title"/>
      <p>Preserving Flavor, Sealing Freshness: <br/>
       Your Ultimate Food Saver Destination!</p>
        <div className="BuyerRegistrationPage">
            <h1>Food Saver</h1>
            <form >
                <input
                    type="char"
                    name="individualName"
                    placeholder="Name"
                    onChange={(e) => {
                        setindividualName(e.target.value)
                      }  }
                />
                <input
                    type="varchar"
                    name="individualEmail"
                    placeholder="Email"
                    onChange={(e) => {
                        setindividualEmail(e.target.value)
                      }  }  />
                 <input
                    type="varchar"
                    name="individualAddress"
                    placeholder="Address"
                    onChange={(e) => {
                        setindividualAddress(e.target.value)
                      }  } />
                <input
                    type="varchar"
                    name="individualPassword"
                    placeholder="Password"
                    onChange={(e) => {
                        setindividualPassword(e.target.value)
                      }  } />
                <input
                    type="varchar"
                    name="confirm_individualPassword"
                    placeholder="Confirm Password"
                    onChange={(e) => {
                        setconfirm_individualPassword(e.target.value)
                      }  } />
                <input
                    type="int"
                    name="individualSSN"
                    placeholder="Social Security Number"
                    onChange={(e) => {
                        setindividualSSN(e.target.value)
                      }  } />
                <button onClick={submitReg}>Register</button>
            </form>
                <Link to="/SigninPage"  style={{ color: 'white' }}>Already have an account? Login</Link>
                <Link to="/BuyerRegistrationPage" style={{ color: 'white' }}>Looking to buy? Register as a buyer</Link>
                </div>

            </div>
    );
}

    export default IndividualSellerRegistration;

