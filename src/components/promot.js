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
            <h1  className="text-2xl font-bold">Promotions</h1>
            <img src="https://i.pinimg.com/736x/b5/62/6b/b5626b9b25e5f59949beab342db47c85.jpg" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">🎉 Big Sale Alert! 🎉</h1>
                <p>........Upgrade your tech game today with our Exclusive 70% OFF Promotion! For a limited time,        enjoy massive savings on our wide range of computers, laptops, and accessories. Whether you're a gamer, student, or business professional, now is the perfect time to grab the latest tech at unbeatable prices. Don't miss out—stock is limited, and this offer won't last long!</p>
                <h1  className="text-2xl font-bold">🎉 Massive Discount + Free Gifts! 🎉</h1>
                <p>........This is your chance! Buy any computer from our shop today and get an Exclusive 30% OFF plus Free Special Gifts like a mouse, keyboard, or headphones! Hurry up—stock is limited and this offer won't last long! </p>
                <p>Shop Now & Save 30%  big savings and grab your free gifts!</p>
                {/* <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/key-oni1.png"/>
                            <p style={{color:"gray"}}>KEYBOARD ONIKUMA G58  WHITE MECHANICAL 82 Keys GAMING RGB </p>
                            <p>$23.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-oni2.png"/>
                            <p style={{color:"gray"}}>KEYBOARD ONIKUMA G58 
                            MECHANICAL 82 Keys GAMING RGB </p>
                            <p>$23.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-oni3.png"/>
                            <p style={{color:"gray"}}>KEYBOARD ONIKUMA G55
                            MECHANICAL 61 Keys GAMING RGB  </p>
                            <p>$20.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-oni4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>KEYBOARD ONIKUMA G52 
                            MECHANICAL 82 Keys GAMING RGB </p>
                            <p>$23.00</p>
                        </div>
                </div> */}
            </div>
            
        </div>    
    );
}
export default Discounts;