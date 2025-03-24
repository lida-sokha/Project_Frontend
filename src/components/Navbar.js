import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
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
                    <FontAwesomeIcon icon={faUser}	size="xl" />
                        <span>Account</span>
                    </div>
                </div>
                </div> {/* Closed .top-bar div */}
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li class="dropdown"><a href="#">Shop ▼</a>
                        <ul class="dropdown-content">
                            <li><a href="/laptop">Laptop</a></li>
                            <li><a href="/desktop">Desktop</a></li>
                            <li><a href="/monitor">Monitor</a></li>
                            <li><a href="/keyboard">Keyboard</a></li>
                        </ul>
                    </li>
                    <li><a href="#">New Arrivals</a></li>
                    <li><a href="#">Discounts</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            </header> {/* Closed header */}
        </>
    );
}

export default Navbar;
