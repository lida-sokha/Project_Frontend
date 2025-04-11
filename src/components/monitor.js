import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
function monitor() {
    return (
        <div class="landing-page">
            <Link to="/Monitor"></Link>
            <img src="fontend/moni1.jpg" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/moni2.jpg"/>
                            <p style={{color:"gray"}}>Asus Zenbook 14OLED UX8406MA-PZ023W</p>
                            <p>$1000.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni3.jpg"/>
                            <p style={{color:"gray"}}>Asus Zenbook S 16 UM5606KA-RK061W</p>
                            <p>$1,299.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni4.jpg"/>
                            <p style={{color:"gray"}}>ASUS Vivobook S 16 S5606MA-MX103 </p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni5.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Asus Vivobook Go 15 E510KA-EJ834W </p>
                            <p>$329.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">APPLE MACBOOK</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/moni6.jpg"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M4 / 16GB / SSD 512GB / 14.2" )</p>
                            <p>$1599.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni7.jpg"/>
                            <p style={{color:"gray"}}>MacBook Air 13 ( M2 Chip / 16GB / SSD 256GB /13.6" )</p>
                            <p>$919.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni8.png"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro / 18GB / SSD 1TB / 14.2" ) </p>
                            <p>$2000.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni9.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>MacBook Pro 16 ( M4 Max / 36GB / SSD 1TB / 16.2")</p>
                            <p>$3,749.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS TUF / ROG</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/moni10.jpg"/>
                            <p style={{color:"gray"}}>Asus ROG Zephyrus G16 GA605WV-QR143WS</p>
                            <p>$1,999.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni11.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming F15 FX507VU-LP216W</p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni12.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming F16 FX607JV-N3194W </p>
                            <p>$1,129.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni13.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Asus ROG Strix G18 G814JI-N6126W</p>
                            <p>$1,799.00</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default monitor;