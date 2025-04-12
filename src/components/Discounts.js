import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
function Discounts() {
    return (
        <div class="landing-page">
            <Link to="/Discounts"></Link>
            <h1  className="text-4xl font-bold mt-5 mb-5 ml-10">Promotions</h1>
            <div className="px-[50px]">  {/* Tailwind custom padding */}
                <img 
                    src="https://i.pinimg.com/736x/b5/62/6b/b5626b9b25e5f59949beab342db47c85.jpg" 
                    alt="Promotion banner" 
                    className="w-full" 
                />
            </div>
            <div className="popular">
                <h1  className="text-4xl font-bold mb-10">🎉 Big Sale Alert! 🎉</h1>
                <p className="text-xl px-[50px] mb-10">Upgrade your tech game today with our Exclusive 70% OFF Promotion! For a limited time,        enjoy massive savings on our wide range of computers, laptops, and accessories. Whether you're a gamer, student, or business professional, now is the perfect time to grab the latest tech at unbeatable prices. Don't miss out—stock is limited, and this offer won't last long!</p>
                <h1  className="text-4xl font-bold">🎉 Massive Discount + Free Gifts! 🎉</h1>
                <p className="text-xl px-[50px] mb-10 mt-10">This is your chance! Buy any computer from our shop today and get an Exclusive 30% OFF plus Free Special Gifts like a mouse, keyboard, or headphones! Hurry up—stock is limited and this offer won't last long! </p>
                <p className="px-[50px] text-xl mb-10">Shop Now & Save 30%  big savings and grab your free gifts!</p>
            </div>
            
        </div>    
    );
}
export default Discounts;