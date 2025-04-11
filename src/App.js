import React, { Children } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Cart from './components/Cart';
import './components/Navbar.css';
import Body from "./components/Body";
import './components/Body.css';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import MacbookProM4  from './components/MacbookProM4';
import { CartProvider } from './components/CartContext';

// Layout for auth pages (without header/footer)
const AuthLayout = () => (
  <div className="auth-layout">
    <Routes>
      <Route index element={<Login />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </div>
);

function App() {
  return (
    <CartProvider>
    <Router>
      <Routes>
        {/* Main routes with Navbar and Footer */}
        <Route path="/*" element={
          <>
            <Navbar />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/MacbookProM4" element={<MacbookProM4 />} />
              <Route path="/cart" element={<Cart />} />
              {/* Add other routes that need Navbar/Footer */}
            </Routes>
            <Footer />
          </>
        } />

        {/* Auth routes without Navbar/Footer */}
        <Route path="/auth/*" element={<AuthLayout />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </Router>
   </CartProvider>
  );
}

export default App;