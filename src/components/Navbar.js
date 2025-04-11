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
                    <Link to="/" className="logo-link">
                            <div className="tc-text">TC</div>
                    </Link>
                            <div className="label">Computer</div>
                        </div>
                        <div className="brand-name"></div>
                    </div>

                    {/* Search Bar (Centered) */}
                    <div className="search-bar">
                        <input type="text" placeholder="Searching product..." />
                        <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                    </div>

                    {/* Icons (Right Side) */}
                    <div className="icons">
                    <div className="icon">
                        <Link to="/Cart" className="nav-icon-link">  {/* Changed to lowercase "/cart" */}
                        <FontAwesomeIcon icon={faCartShopping} className="nav-icon" />
                        <span className="nav-icon-label">Cart  </span>
                        </Link>
                    </div>
                    <div className="icon mr-4">
                    <Link to="/auth/login" className="nav-icon-link">
                    <FontAwesomeIcon icon={faUser} className="nav-icon" />
                    <span className="nav-icon-label">Account</span>
                    </Link>
                    </div>
                    </div>
                </div> {/* Closed .top-bar div */}

                {/* Navigation Bar */}
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="dropdown"><Link to="#">Shop </Link>
                            <ul className="dropdown-content">
                                <li><Link to="/laptop">Laptop</Link></li>
                                <li><Link to="/Desktop">Desktop</Link></li>
                                <li><Link to="/Monitor">Monitor</Link></li>
                                <li><Link to="/keyboard">Keyboard</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/Newarr">New Arrivals</Link></li>
                        <li><Link to="/discounts">Discounts</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
            </header> {/* Closed header */}
        </>
    );
}

export default Navbar;
