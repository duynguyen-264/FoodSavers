import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import HomePage from './Webpages/Homepage';

function App() {
  return (
    <Router>
    <div className="App">
  
      <h1>Food Oasis</h1>
      <Link to="/Homepage">
        <button>Login</button>
      </Link>

    </div>
    </Router>
  );
}

export default App;
