import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info (stays first) */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">TC Computer</h1>
          <p className="text-white">Your trusted source for quality computers and accessories.</p>
        </div>

        {/* Information (moved to second position) */}
        
        <div className="space-y-4 grid place-items-center mr-5">
          <h2 className="text-lg font-semibold text-white ">Information</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Home</a></li>
            <li><a href="#" className="hover:text-blue-600">About US</a></li>
            <li><a href="#" className="hover:text-blue-600">Shop</a></li>
            <li><a href="#" className="hover:text-blue-600">Support</a></li>
          </ul>
        </div>
        {/* Contact Us (moved to third position) */}
        
        <div className="space-y-4  ml-6">
          <h2 className="text-lg font-semibold text-white">Contact Us</h2>
          <div className="space-y-2">
            <p>Email: support@computershop.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Tech Street, City</p>
            <p>Follow Our Social Media</p>
          </div>
        </div>
        {/* Payments (moved to last position) */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-white">Payments</h2>
          <div className="space-y-2">
            <h3 className="font-medium">A.B.A. PRIMMINS</h3>
            <div className="flex space-x-4">
              <span className="font-bold">VISA</span>
              <span className="font-bold">KIBER</span>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto my-8 border-t border-gray-300"></div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto text-center pt-4">
        <p>© 2025 TC Computer. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;