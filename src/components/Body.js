import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
function Body() {
    return (
        <div class="landing-page">
            <img src="fontend/fwebp.webp" alt="Image" />
            <div class="option">
                <div>
                    <img src="fontend/h175.png" alt="Image" />
                    <p>Laptop</p>
                </div>
                <div>
                    <img src="fontend/custom-gaming-pc.png" style={{ width: "150px" }} alt="Image" />
                    <p>Desktop</p>
                </div>
                <div>
                    <img src="fontend/monitor_landing.png" alt="Image" />
                    <p>Monitor</p>
                </div>
                <div>
                    <img src="fontend/keyboard_3.jpg" alt="Image" style={{ marginTop: "20px", marginBottom: "35px" }}/>
                    <p>Keyboard</p>
                </div>
            </div>
            <div class="discounts">
                <h1>Discounts</h1>
                <div class="discounts-container">
                    <div class="discount-item">
                        <img src="fontend/MAC-14-M4-black-330x409 (1).jpg" style={{marginBottom: "5px"}}/>
                        <h4>MacBook Pro 14 ( M4 / 16GB / SSD 512GB / 14.2")</h4>
                        <p style={{ color: "red"}}>$1599.00</p> <p style={{ textDecoration: "line-through"}}>$1639.00</p>
                    </div>
                    <div className="discount-item">
                        <img src="fontend\mac M2 Grey-330x409.jpg" style={{width: "180px",marginTop: "30px"}}/>
                        <h4>MacBook Air 13 ( M2 Chip / 16GB / SSD 256GB /13.6")</h4>
                        <p style={{ color: "red"}}>$919.00</p> <p style={{ textDecoration: "line-through"}}>$1049.00</p>
                    </div>
                    <div className="discount-item">
                        <img src="fontend/Lgitech-Mk235-330x409.jpg"/>
                        <h4 >Logitech MK235 Wireless Keyboard and Mouse Combo</h4>
                        <p style={{ color: "red"}}>$24.00</p> <p style={{ textDecoration: "line-through"}}>$26.00</p>
                    </div>
                    <div className="discount-item">
                        <img src="fontend/Mouse-Magic3-330x409.jpg"/>
                        <h4 >Apple Magic 3 Mouse Silver</h4>
                        <p style={{ color: "red"}}>$79.00</p> <p style={{ textDecoration: "line-through"}}>$85.00</p>
                    </div>
                </div>
            </div>
            <div className="popular">
                <h1>Most popular product</h1>
                <div className="popular_product">
                        <div className="popular_product-item">
                            <img src="fontend/Mac-Air-M3-Grey-330x409.jpg"/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro / 18GB / SSD 1TB / 14.2")</p>
                            <p>$2000</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/S5606MA-1-330x409 (1).jpg"/>
                            <p style={{color:"gray"}}>ASUS Vivobook S 16 S5606MA-MX103</p>
                            <p>$1,049.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/tuf.jpg"/>
                            <p style={{color:"gray"}}>Asus TUF Gaming F16 FX607JV-N3194W </p>
                            <p>$1,129.00</p>
                        </div>
                        <div className="popular_product-item">
                            <img src="fontend/w250.png" style={{width: "250px"}}/>
                            <p style={{color:"gray"}}>MacBook Pro 14 ( M3 Pro / 18GB / SSD 1TB / 14.2")</p>
                            <p>$2000</p>
                        </div>
                </div>
            </div>
            <div className="second_landing">
                <img src="fontend/250221 TUF Gaming A14-915x420.jpg"/>
            </div>
            <div className="Feature_Product">
                <h1>Feature Product</h1>
                <div className="Feature_Product_container">
                    <div className="Feature_Product_item">
                        <img src="fontend\PRO-MP275Q-330x409.jpg"/>
                        <p style={{color:"gray"}}>MSI PRO MP275Q ( 27" / QHD / 100Hz / Built in Speaker )</p>
                        <p>$149.00</p>
                    </div>
                    <div className="Feature_Product_item">
                        <img src="fontend\G55-330x409.jpg"/>
                        <p style={{color:"gray"}}>KEYBOARD ONIKUMA G55 MECHANICAL 61 Keys GAMING RGB</p>
                        <p>$20.00</p>
                    </div>
                    <div className="Feature_Product_item">
                        <img src="fontend\Zotact-RT-330x409.jpg"/>
                        <p style={{color:"gray"}}>ZOTAC GAMING GeForce RTX 5080 SOLID GDDR7 </p>
                        <p>$1,379.00</p>
                    </div>
                    <div className="Feature_Product_item">
                        <img src="fontend/LOQ-15IAX9-330x409.jpg"/>
                        <p style={{color:"gray"}}>Lenovo LOQ 15ARP9 ( R7 7435HS / 24GB / SSD 512GB PCIE / RTX4060 8GB / 15.6"FHD,144Hz )</p>
                        <p>$1,139.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Body;