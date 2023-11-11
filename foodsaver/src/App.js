import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Webpages/Homepage';
import SigninPage from './Webpages/SigninPage';


function App() {
  return (
    <Router>
    <div className="App">
      <Routes>  
            <Route path="/" element={<HomePage/>} />
            <Route path="/SigninPage" element={<SigninPage />} />
      </Routes>

    </div>
    </Router>
  );
}

export default App;
