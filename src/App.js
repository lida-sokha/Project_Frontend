import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import './components/Navbar.css';
import Body from "./components/Body";
import './components/Body.css';

function App() {
  return (
    <Router> {/* Wrap everything inside BrowserRouter */}
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Body />} />  {/* Define the home page route */}
          {/* Add other pages if needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
