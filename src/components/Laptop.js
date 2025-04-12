import React from "react";
import { Link } from 'react-router-dom'; 
function Laptop() {
    return (
        <div className="landing-page ">
            <Link to="/Laptop"></Link>
            <img src="fontend/1.png" alt="Image"/>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/2.png"/>
                            <p style={{color:"gray"}}>Asus Zenbook 14OLED UX8406MA-PZ023W</p>
                            <p>$1000.00</p>
                        </div>
                        <div className="popular_product-item">
                        <Link to="/AsusS16" className="product-link">
                            <img src="fontend\3.jpg" alt="Asus Zenbook S 16" />
                            <p style={{color:"gray"}}>Asus Zenbook S 16 UM5606KA-RK061W</p>
                            <p>$1,299.00</p>
                        </Link>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/4.jpg"/>
                            <p style={{color:"gray"}}>ASUS Vivobook S 16 S5606MA-MX103 </p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/5.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Asus Vivobook Go 15 E510KA-EJ834W </p>
                            <p>$329.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">APPLE MACBOOK</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/6.jpg"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M4 / 16GB / SSD 512GB / 14.2" )</p>
                            <p>$1599.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/7.jpg"/>
                            <p style={{color:"gray"}}>MacBook Air 13 ( M2 Chip / 16GB / SSD 256GB /13.6" )</p>
                            <p>$919.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/8.png"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro / 18GB / SSD 1TB / 14.2" ) </p>
                            <p>$2000.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/9.jpg" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>MacBook Pro 16 ( M4 Max / 36GB / SSD 1TB / 16.2")</p>
                            <p>$3,749.00</p>
                        </div>
                </div>
            </div>
            <div className="popular">
                <h1  className="text-2xl font-bold">ASUS TUF / ROG</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/10.jpg"/>
                            <p style={{color:"gray"}}>Asus ROG Zephyrus G16 GA605WV-QR143WS</p>
                            <p>$1,999.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/11.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming F15 FX507VU-LP216W</p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/12.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming F16 FX607JV-N3194W </p>
                            <p>$1,129.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/13.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>Asus ROG Strix G18 G814JI-N6126W</p>
                            <p>$1,799.00</p>
                        </div>
                </div>
            </div>
        </div>
    );
}
export default Laptop;