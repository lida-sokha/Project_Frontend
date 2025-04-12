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
                <h1  className="text-2xl font-bold">Awida Monitor</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/moni2.jpg"/>
                            <p style={{color:"gray"}}>Awida MD2729-Y Gaming Monitor
                            (1920 x 1080 FHD / Curved / 180Hz / 27" /3 Year warranty )  </p>
                            <p>$140.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni3.jpg"/>
                            <p style={{color:"gray"}}>Awida MD2734-K Gaming Monitor
                            ( 27" Full HD / IPS / 180Hz /3 Year warranty )</p>
                            <p>$140.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni4.jpg"/>
                            <p style={{color:"gray"}}>Awida MP3429-Y Gaming Monitor
                            ( 2K Curved / VA Panel / 165Hz / 34" 
                            / 3 Year warranty )</p>
                            <p>$200.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni5.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Awida MZ2707-Y ( 2K QHD / 2560 x 1440
                            ) / IPS / 165Hz / 27" / sRGB %: 100% /  
                            3 Year warranty  </p>
                            <p>$167.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <Link to="/Asustuf24">
                            <img src="fontend/moni6.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming VG27AQ3A (  27" /180Hz / 2K IPS )</p>
                            <p>$215.00</p>
                            </Link>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni7.jpg"/>
                            <p style={{color:"gray"}}>ASUS ROG Strix XG27ACS ( 27" / 2K IPS / 180Hz / Type-C / HDR400 )</p>
                            <p>$269.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni8.png"/>
                            <p style={{color:"gray"}}>ASUS ProArt Display PA27JCV 5K ( 27-inch, IPS, 5K 99% DCI-P3 / 100% sRGB , Color Accuracy ΔE 2, Calman Verified, USB-C PD 96W )</p>
                            <p>$749.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni9.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>ROG Swift OLED PG34WCDM ( 42" / 2K ( 3440x1440 ) / 800R curved OLED panel / 240 Hz, 0.03 ms / HDR600​ / 99% DCI-P3 / 90 W Type-C )</p>
                            <p>$3,749.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Dell</h1>
                <div className="popular_product mb-10">
                        <div className="popular_product-item">
                            <img src="fontend/moni10.jpg"/>
                            <p style={{color:"gray"}}>Dell U2424H  (  24" / FHD / 120Hz /  IPS 
                                / USB-C / 100% sRGB,100% BT.709, 85% DCI-P3 , Delta E 2)</p>
                            <p>$229.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni11.jpg"/>
                            <p style={{color:"gray"}}>Dell SE2725H ( 27" / FHD / 75Hz / HDMI & VGA)</p>
                            <p>$125.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni12.jpg"/>
                            <p style={{color:"gray"}}>Dell SE2425H ( 24"  / Full HD /
                                VA Panel / HDMI & VGA)</p>
                            <p>$99.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/moni13.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Dell U3223QE  (3840 x  2160) 4K at 60Hz.IPS , USB-C  </p>
                            <p>$769.00</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default monitor;