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
import Checkout from './components/Checkout';
import Laptop from './components/Laptop';
import KeyboardPage from './components/keyboardPage';
import Desktop from './components/Desktop';
import Monitor from './components/monitor';
import Narrival from './components/Narrival';
import Discounts from './components/Discounts';
import AsusS16 from './components/AsusS16';
import IMac from './components/IMac24';
import AsusTuf24 from './components/Asustuf24';
import Asusrogii from './components/AsusrogII';
import ContactUs from './components/ContactUs';


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
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/Laptop" element={<Laptop />} />
              <Route path="/keyboard" element={<KeyboardPage />} />
              <Route path="/Desktop" element={<Desktop/>} />
              <Route path="/Monitor" element={<Monitor/>} />
              <Route path="/Narrival" element={<Narrival/>} />
              <Route path="/Discounts" element={<Discounts/>} />
              <Route path="/AsusS16" element={<AsusS16/>} />
              <Route path="/IMac" element={<IMac/>} />
              <Route path="/Asustuf24" element={< AsusTuf24/>} />
              <Route path="/AsusrogII" element={< Asusrogii/>} />
              <Route path="/ContactUs" element={< ContactUs/>} />
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