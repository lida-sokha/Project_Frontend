import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import './components/Navbar.css';
import Body from "./components/Body";
import './components/Body.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />  {/* Define the home page route */}
          {/* Add other pages if needed */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
