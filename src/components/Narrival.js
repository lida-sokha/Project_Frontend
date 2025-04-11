import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
function Narrival() {
    return (
        <div class="landing-page">
            <Link to="/Narrival"></Link>
            <img src="fontend/new1.png" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">New Arrivals</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/key-oni1.png"/>
                            <p style={{color:"gray"}}>KEYBOARD ONIKUMA G58  WHITE MECHANICAL 82 Keys GAMING RGB </p>
                            <p>$23.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-app4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Apple Magic Mouse 2 ITS</p>
                            <p>$50.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/4.jpg"/>
                            <p style={{color:"gray"}}>ASUS Vivobook S 16 S5606MA-MX103 </p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni3.jpg"/>
                            <p style={{color:"gray"}}>Asus Zenbook S 16 UM5606KA-RK061W</p>
                            <p>$1,299.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold"></h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                                                    <img src="fontend/l.jpg" style={{width: "250px"}}/>
                                                    <p style={{color:"gray"}}>Desktop Gaming / Design</p>
                                                    <p style={{color:"gray"}}>( Core Ultra 7 265K/Ram 32GB DDR5/ZOTAC RTX 5080 Solid 16GB GDDR7 )</p>
                                                    <p>$1,799.00</p>
                                                </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-asus2.png"/>
                            <p style={{color:"gray"}}>Asus XA11 ROG STRIX SCOPE II
                            GAMING KEYBOARD </p>
                            <p>$99.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/new2.png"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro / 18GB / SSD 1TB / 14.2" )</p>
                            <p>$2000.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/new3.png"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro /
                                1TB / 14.2" )</p>
                            <p>$2,000.00</p>
                        </div>
                </div>
            </div>
            
        </div>
    );
}
export default Narrival;