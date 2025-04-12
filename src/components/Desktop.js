import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from 'react-router-dom';
function Desktop() {
    return (
        <div class="landing-page">
            <Link to="/Desktop"></Link>
            <img src="fontend/Desktop.png" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">IMac</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <Link to="/iMac" className="product-link">
                            <img src="fontend/a.jpg"/>
                            <p style={{color:"gray"}}>iMac 24" 4.5K ( M4 / 16GB / SSD 1TB / 24"4.5K )</p>
                            <p>$2,059.00</p>
                            </Link>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/b.jpg"/>
                            <p style={{color:"gray"}}>iMac 24" 4.5K ( M3 / 8GB / SSD 512GB / 24"4.5K )</p>
                            <p>$1,299.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/c.jpg"/>
                            <p style={{color:"gray"}}>iMac 24" 4.5K ( M4 / 16GB / SSD 256GB / 24"4.5K ) </p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/d.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>iMac 24" 4.5K ( M3 / 8GB / SSD 256GB / 24"4.5K ) </p>
                            <p>$329.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Computer Case</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/e.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming GT302  ARGB Black</p>
                            <p>$55.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/f.jpg"/>
                            <p style={{color:"gray"}}>Acegeek Flipped-M Black (support ATX MB / 1XUSB 3.0 / Supported LIQUID 360MM )</p>
                            <p>$99.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/g.jpg"/>
                            <p style={{color:"gray"}}></p>Darkflash DLX4000 white glass support ATX MB
                            <p>$85.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/h.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Case Darkflash DY470 Black</p>
                            <p>$89.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">Desktop</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/i.jpg"/>
                            <p style={{color:"gray"}}>Desktop Gaming / Design ( Core Ultra 9 285K / Ram 32GB DDR5 / M.2 PCIe 1TB / ZOTAC RTX 5080 Solid 16GB GDDR7 )</p>
                            <p>$1,999.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/j.jpg"/>
                            <p style={{color:"gray"}}>Desktop Gaming / Design ( Ryzen 7 7800X3D / Ram 32GB / M.2 PCIe​ 1TB 4.0 / ZOTAC RTX 5080 Solid 16GB )</p>
                            <p>$2,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/k.jpg"/>
                            <p style={{color:"gray"}}>Desktop Gaming / Design ( Ryzen 7 9800X3D/ Ram 32GB / M.2 PCIe​ 1TB 4.0 / ZOTAC RTX 5070Ti Solid 16GB )</p>
                            <p>$2,129.00</p>                           
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/l.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Desktop Gaming / Design ( Core Ultra 7 265K / Ram 32GB DDR5 / M.2 PCIe 1TB / ZOTAC RTX 5080 Solid 16GB GDDR7 )</p>
                            <p>$1,799.00</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Desktop;