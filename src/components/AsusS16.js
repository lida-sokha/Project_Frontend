import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Correct relative path
function AsusS16() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 1299.00;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = {
        id: 'asus-zenbook-s16-um5606ka',
        name: 'Asus Zenbook S 16 UM5606KA-RK061W',
        price: unitPrice,
        image: 'fontend/3.jpg'
    };

    const IncrementQuantity = () => {
        setQuantity(prev => prev + 1);
    }

    const DecrementQuantity = () => {
        setQuantity(prev => (prev > 1 ? prev - 1: 1));
    }

    const handleAddToCart = () => {
        addToCart({
          ...product,
          quantity
        });
        navigate('/cart'); // Redirect to cart page
      };
      const handleBuyNow = () => {
        addToCart({
          ...product,
          quantity
        });
        navigate('/checkout'); // Redirect to checkout
      };
    return (<>
        <div className="container mx-auto px-4 py-8 mb-10">
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='md:w-1/2 flex justify-center '>
                <img src="fontend\3.jpg" alt="MacBook Pro 14 M4" />
                </div>

            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>Asus Zenbook S 16 UM5606KA-RK061W( Ryzen™ AI 7 350 / 16GB / SSD 1TB PCIE / 16"3K,OLED )</h1> 
                <div className="mb-6 space-y-2">
                        <p><span className="font-semibold">CPU:</span> AMD Ryzen™ AI 7 350 Processor 2.0GHz ( 24MB Cache, up to 5.0GHz, 8 cores, 16 Threads )</p>
                        <p><span className="font-semibold">RAM:</span> 16GB LPDDR5X</p>
                        <p><span className="font-semibold">Storage:</span>  SSD 1TB M2 PCIE</p>
                        <p><span className="font-semibold">Display:</span> 14.2" Liquid Retina XDR Display</p>
                        <p><span className="font-semibold">Optical Drive:</span>  N/A</p>
                        <p><span className="font-semibold">Graphic:</span> AMD Radeon™ Graphics</p>
                        <p><span className="font-semibold">Display:</span> 16"3K ( 2880 x 1800) OLED Non Touch</p>
                        <p><span className="font-semibold">Wi-Fi + Bluetooth</span></p>
                        <p><span className="font-semibold">Port:</span> 1x USB 3.2 Gen 2 Type-A (data speed up to 10Gbps)

                            2x USB 4.0 Gen 3 Type-C with support for display / power delivery (data speed up to 40Gbps)

                            1x HDMI 2.1 TMDS

                            1x 3.5mm Combo Audio Jack

                            SD 4.0 card reader</p>
                        <p><span className="font-semibold">Battery:</span>78WHrs, 2S2P, 4-cell Li-ion</p>
                        <p><span className="font-semibold">Weight:</span>1.50kg</p>
                        <p><span className="font-semibold">OS:</span> Win 11H License</p>
                        <p><span className="font-semibold">Color:</span> Black</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Warranty</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>3-year hardware</li>
                            <li>1 year for screen, keyboard & battery</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <p className="text-2xl font-bold text-red-600">${totalPrice}</p>
                        
                        <div className="flex items-center gap-4 mb-6 mt-5">
                            <div className="flex items-center border rounded">
                            <button 
                                className="px-3 py-1 text-xl hover:bg-gray-100"
                                onClick={DecrementQuantity}
                            >
                                -
                            </button>
                            <span className="px-4 py-1 border-x">{quantity}</span>
                            <button 
                                className="px-3 py-1 text-xl hover:bg-gray-100"
                                onClick={IncrementQuantity}
                            >
                                +
                            </button>
                            </div>
                            <span className="text-gray-500">${unitPrice.toFixed(2)} each</span>
                        </div>
                    </div>
                        {/* Add to Cart button would use the quantity state */}

                    <div className="flex flex-col sm:flex-row gap-4 ">
                        <button className="bg-orange-600 hover:bg-orange-500 text-black py-3 px-6 rounded-md font-bold transition-colors" onClick={handleBuyNow}>
                            BUY NOW
                        </button>
                        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-md transition-colors" onClick={handleAddToCart} >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                
            </div>
            
        </div>
    </>);
}

export default AsusS16;