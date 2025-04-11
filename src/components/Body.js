import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faStore } from '@fortawesome/free-solid-svg-icons';
import React from "react";
import { Link } from "react-router-dom";
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
                        <Link to="/MacbookProM4" className="discount-item">
                        <img src="fontend/MAC-14-M4-black-330x409.jpg" alt="MacBook Pro 14 M4" />
                        <h4>MacBook Pro 14 (M4 / 16GB / SSD 512GB / 14.2")</h4>
                        <div style={{ display: 'flex', gap: '8px' }}>
                        <p style={{ color: "red" }}>$1599.00</p>
                        <p style={{ textDecoration: "line-through" }}>$1639.00</p>
                        </div>
                        </Link>
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
                    <div className="Feature_Product_item ">
                        <img src="fontend/LOQ-15IAX9-330x409.jpg"/>
                        <p style={{color:"gray"}}>Lenovo LOQ 15ARP9 ( R7 7435HS / 24GB / SSD 512GB PCIE / RTX4060 8GB / 15.6"FHD,144Hz )</p>
                        <p>$1,139.00</p>
                    </div>
                </div>
            </div>
            <div className="New_arrival">
                <h1 className="text-2xl font-bold ]">New arrival</h1>
                <div class="New_arrival_container grid grid-cols-3 gap-4 ml-[50px] mt-[50px]">
                <div class="relative w-full overflow-hidden bg-black">
                    <img 
                        src="fontend\fwebp.webp" 
                        alt="ROG Flow Z13" 
                        class="absolute min-w-full min-h-full object-fit " 
                    />
                    
                    <div class="absolute  flex flex-col justify-end p-8 text-white z-10">
                        <div class="mt-auto mb-8">
                        <h2 class="text-2xl md:text-3xl font-bold">ROG Flow Z13 (2025)</h2>
                        <p class="text-lg md:text-xl mb-6">Immersion Touchscreen Display</p>
                        <p class="text-sm md:text-base mb-8">on opening a Creative</p>
                        <button class="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold transition-colors">
                            Shop Now
                        </button>
                        </div>
                    </div>
                    </div>

                    <div class="col-span-1 row-span-1">
                        <div class="bg-gray-200 h-[200px] relative overflow-hidden mb-5">
                            <img 
                            src="fontend/geforce-rtx-5070-3840x2160.jpg" 
                            alt="Geforce RTX 5070"
                            class="absolute inset-0 w-full h-full object-cover" 
                            />
                            
                            <div class="relative z-10 p-4 h-full flex flex-col justify-start text-white">
                            <h3 class="font-bold text-lg">Geforce RTX 5070</h3>
                            <p class="text-sm mb-4">High levels with low grounding, and high level space</p>
                            <button class="bg-white text-black hover:bg-gray-200 px-3 py-2 rounded-full font-bold transition-colors text-sm w-fit">
                                Shop Now
                            </button>
                            </div>
                        </div>
                        <div class="row-span-2 flex gap-4">
                            <div class="flex-1 relative overflow-hidden shadow-md h-[280px] bg-black">
                                <img 
                                src="fontend\https___medias-p1.phoenix.razer.com_sys-master-phoenix-images-container_h23_hee_9821719920670_241001-basilisk-v3-pro-35k-1500x1000-2.jpg" 
                                alt="Razer Basilisk V3 Pro" 
                                class="absolute inset-0 w-full h-full object-cover"
                                />
                                
                                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent bg-black">
                                <h3 class="font-bold text-lg text-white">Razer Basilisk V3 Pro</h3>
                                <p class="text-sm text-white/90 mb-3">35K DPI Optical Sensor</p>
                                <button class="bg-white text-black hover:bg-gray-200 px-4 py-1.5 rounded-full text-sm transition-colors font-bold">
                                    Shop Now
                                </button>
                                </div>
                            </div>
                            
                            <div class="flex-1 relative  overflow-hidden shadow-md h-[280px] bg-black">
                                <img 
                                src="fontend\keyboard.png" 
                                alt="Razer Basilisk V3 Pro" 
                                class="absolute inset-0 w-full h-full object-cover mt-[-30px]"
                                />
                                
                                <div class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent bg-black">
                                <h3 class="font-bold text-lg text-white">Keyboard</h3>
                                <p class="text-sm text-white/90 mb-3">Razer BlackWidow V4 Pro</p>
                                <button class="bg-white text-black hover:bg-gray-200 px-4 py-1.5 rounded-full text-sm font-bold transition-colors">
                                    Shop Now
                                </button>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="row-span-10 relative  overflow-hidden bg-black h-[500px] mr-[50px]">
                            <img 
                            src="fontend\pc-gaming-computer-pc-cases-technology-wallpaper-thumb.jpg" 
                            alt="Custom Gaming PC" 
                            class="absolute inset-0 w-full h-full object-cover"
                            />
                            
                            <div class="absolute inset-0 flex flex-col justify-end p-8 text-white z-10">
                            <div class="mt-auto mb-8">
                                <h2 class="text-2xl md:text-3xl font-bold">Built PC NOW!</h2>
                                <p class="text-lg md:text-xl mb-6">Customize Your Dream Machine</p>
                                <p class="text-sm md:text-base mb-8">Configure what you want</p>
                                <button class="bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold transition-colors">
                                Shop Now
                                </button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
            <div className="DeliveryInfo">
                <div className="mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
                    {/* Free Delivery */}
                    <div className="flex flex-col items-center text-center p-4 ">
                    <div className="relative w-20 h-20 mb-3">
                        {/* Outer gray circle */}
                        <div className="absolute inset-0 bg-gray-500 rounded-full"></div>
                        
                        {/* Inner black circle with centered icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <FontAwesomeIcon 
                            icon={faTruck} 
                            className="text-white text-3xl z-10"
                            />
                        </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1">FREE AND FAST DELIVERY</h3>
                    <p className="text-gray-600">Free delivery for all orders over $140</p>
                    </div>
                    {/* Customer Service */}
                    <div className="flex flex-col items-center text-center p-4">
                        <div className="relative w-20 h-20 mb-3">
                            {/* Outer gray circle */}
                            <div className="absolute inset-0 bg-gray-500 rounded-full"></div>
                            
                            {/* Inner black circle with centered icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                                <FontAwesomeIcon 
                                icon={faHeadset} 
                                className="text-white text-3xl z-10"
                                />
                            </div>
                            </div>
                        </div>
                        <h3 className="font-bold text-lg mb-1">24/7 CUSTOMER SERVICE</h3>
                        <p className="text-gray-600">Friendly 24/7 customer support</p>
                        </div>

                    {/* Price Promise */}
                    <div className="flex flex-col items-center text-center p-4 ">
                    <div className="relative w-20 h-20 mb-3">
                        {/* Outer gray circle */}
                        <div className="absolute inset-0 bg-gray-500 rounded-full"></div>
                        
                        {/* Inner black circle with centered icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                            <FontAwesomeIcon 
                            icon={faStore} 
                            className="text-white text-3xl z-10"
                            />
                        </div>
                        </div>
                    </div>
                    <h3 className="font-bold text-lg mb-1">SAME GREAT PRICE</h3>
                    <p className="text-gray-600">
                        Online and In–Store.<br/>
                        We Don't Increase Prices: Same Great Deals, Always.
                    </p>
                    </div>
                </div>
            </div>
    </div>
    );
}
export default Body;