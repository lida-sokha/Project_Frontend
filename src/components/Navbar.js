import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom"; // Use Link instead of <a>
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <>
            <header>
                <div className="top-bar">
                    <div className="logo-container">
                        <div className="tc-box">
                            <div className="tc-text">TC</div>
                            <div className="label">Computer</div>
                        </div>
                        <div className="brand-name">TC COMPUTER</div>
                    </div>

                    {/* Search Bar (Centered) */}
                    <div className="search-bar">
                        <input type="text" placeholder="Searching product..." />
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>

                    {/* Icons (Right Side) */}
                    <div className="icons">
                        <div className="icon">
                            <FontAwesomeIcon icon={faCartShopping} size="xl"/>
                            <span>Cart</span>
                        </div>
                        <div className="icon">
                            <FontAwesomeIcon icon={faUser} size="xl" />
                            <span>Account</span>
                        </div>
                    </div>
                </div> {/* Closed .top-bar div */}

                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown"><Link to="#">Shop ▼</Link>
                            <ul className="dropdown-content">
                                <li><Link to="/laptop">Laptop</Link></li>
                                <li><Link to="/desktop">Desktop</Link></li>
                                <li><Link to="/monitor">Monitor</Link></li>
                                <li><Link to="/keyboard">Keyboard</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/new-arrivals">New Arrivals</Link></li>
                        <li><Link to="/discounts">Discounts</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header> {/* Closed header */}
        </>
    );
}

export default Navbar;
