import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from "react";
function Body() {
    return (
        <div class="landing-page">
            <img src="fontend/fwebp.webp" alt="Image"/>
            <div class="option">
                <div >
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
                    <img src="fontend/keyboard_3.jpg" alt="Image" style={{ marginTop: "40px", marginBottom: "35px" }}/>
                    <p>Keyboard</p>
                </div>
            </div>
            <div class="discounts">
                <h1 className="text-2xl font-bold">Discounts</h1>
                <div class="discounts-container ">
                    <div className="discount-item">
                            <img src="fontend\MAC-14-M4-black-330x409.jpg" />
                            <h4>MacBook Air 13 ( M2 Chip / 16GB / SSD 256GB /13.6")</h4>
                            <p style={{ color: "red"}}>$919.00</p> <p style={{ textDecoration: "line-through"}}>$1049.00</p>
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
                <h1  className="text-2xl font-bold">Most popular product</h1>
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
                <h1 className="text-2xl font-bold">Feature Product</h1>
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
            <div className="New_arrival">
                <h1 className="text-2xl font-bold ]">New arrival</h1>
                <div class="New_arrival_container grid grid-cols-3 gap-4 ml-[50px] mt-[50px]">
                <div class="row-span-10 bg-gray-100 p-6 h-[600px] flex flex-col justify-end relative overflow-hidden">
                            <img 
                                src="fontend/fwebp.webp" 
                                alt="ROG Flow Z13" 
                                class="absolute inset-0 w-full h-full object-cover z-0"
                            />
                            
                            <div class="z-10 relative"> 
                                <h2 class="text-2xl font-bold mb-2">ROG Flow Z13 (2025)</h2>
                                <h3 class="text-xl mb-4">Immersion Touchscreen Display</h3>
                                <p class="mb-6">on opening a Creative</p>
                                <button class="bg-black text-white px-6 py-2 hover:bg-gray-800 transition">Shop Now</button>
                            </div>
                        </div>

                        <div class="col-span-1 row-span-1 space-y-4">
                            <div class="bg-gray-200 p-4 h-[300px]">
                                <h3 class="font-bold text-lg">Geforce RTX 5070</h3>
                                <p class="text-sm mb-4">High levels with low grounding, and high level space</p>
                                <button class="border border-black px-4 py-1 text-sm">Shop Now</button>
                            </div>

                            <div class="row-span-2 flex gap-4">
                                <div class="flex-1 bg-gray-300 p-4 h-[280px]"> 
                                    <h3 class="font-bold text-lg">Mouse</h3>
                                    <p class="text-sm mb-4">Home Route1/6/Fro.8K</p>
                                    <button class="border border-black px-4 py-1 text-sm">Shop Now</button>
                                </div>
                                
                                <div class="flex-1 bg-gray-400 p-4 h-[280px]"> 
                                    <h3 class="font-bold text-lg">Keyboard</h3>
                                    <p class="text-sm mb-4">Reset distribution via the</p>
                                    <button class="border border-black px-4 py-1 text-sm">Shop Now</button>
                                </div>
                            </div>
                        </div>
                        <div class="row-span-10 bg-gray-100 p-6 h-[600px] mr-[50px]">
                                <h3 class="font-bold text-lg">Built PC NOW!</h3>
                                <p class="text-sm mb-4">Can cutomize what you want.</p>
                                <button class="border border-black px-4 py-1 text-sm">Shop Now</button>
                            </div>
                    </div>
            </div>
    </div>
    );
}
export default Body;