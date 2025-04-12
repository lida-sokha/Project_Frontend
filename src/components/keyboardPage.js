import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
function keyboardPage() {
    return (
        <div class="landing-page">
            <Link to="/keyboard"></Link>
            <img src="fontend/keyboard-pano.png" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">ONIKUMA</h1>
                <div className="popular_product">
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
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS key board</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <Link to="/AsusrogII">
                            <img src="fontend/key-asus1.png"/>
                            <p style={{color:"gray"}}>Asus ROG Claymore II TKL 80% / 100%
                            GAMING KEYBOARD </p>
                            <p>$205.00</p>
                            </Link>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-asus2.png"/>
                            <p style={{color:"gray"}}>Asus XA11 ROG STRIX SCOPE II
                            GAMING KEYBOARD </p>
                            <p>$99.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-asus3.png"/>
                            <p style={{color:"gray"}}>Asus X901 STRIX SCOPE II 96 
                            Wireless Gaming KEYBOARD </p>
                            <p>$135.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/key-asus4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Asus X806 ROG Strix SCOPE NX TKL Moonlight White Gaming KEYBOARD</p>
                            <p>$79.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Logitect Mouse</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/mouse-log1.png"/>
                            <p style={{color:"gray"}}>Logitect G502 x Gaming Mouse</p>
                            <p>$79.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-log2.png"/>
                            <p style={{color:"gray"}}>Logitect G403 HERO Gaming Mouse</p>
                            <p>$49.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-log3.png"/>
                            <p style={{color:"gray"}}>Logitect G502 x Gaming Mouse White</p>
                            <p>$79.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-log4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Logitect G903 LIGHSPEED Wireless Gaming Mouse</p>
                            <p>$99.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Apple Mouse</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/mouse-app1.png"/>
                            <p style={{color:"gray"}}>APPLE MAGIC 3 Mouse Silver</p>
                            <p>$79.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-app2.png"/>
                            <p style={{color:"gray"}}>APPLE Mighty Mouse A1152 wired 
                            USB( MB112LL/B)(Renewed)</p>
                            <p>$39.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-app3.png"/>
                            <p style={{color:"gray"}}>Bluetooth Wireless Mouse-(BT5.1 + USB)</p>
                            <p>$14.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-app4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Apple Magic Mouse 2 ITS</p>
                            <p>$50.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Mouse Pad</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/mouse-pad1.png"/>
                            <p style={{color:"gray"}}>APPLE MAGIC TRACKPAD BLACK 2021</p>
                            <p>$170.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-pad2.png"/>
                            <p style={{color:"gray"}}>APPLE MAGIC TRACKPAD BLACK 2021</p>
                            <p>$170.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-pad3.png"/>
                            <p style={{color:"gray"}}>APPLE MAGIC TRACKED SILVER 2021</p>
                            <p>$14.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/mouse-pad4.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Hokafenle Ergonomic Mouse Pad Wrist Support</p>
                            <p>$25.00</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default keyboardPage;