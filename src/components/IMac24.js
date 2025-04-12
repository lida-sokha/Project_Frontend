import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Correct relative path
function IMac24() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 2059.00;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = {
        id: 'iMac 24" 4.5K ( M4 / 16GB / SSD 1TB / 24"4.5K )',
        name: 'iMac 24" 4.5K ( M4 / 16GB / SSD 1TB / 24"4.5K )',
        price: unitPrice,
        image: 'fontend/a.jpg'
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
                <div className='md:w-1/2 flex justify-center'>
                <img src="fontend/a.jpg" alt="MacBook Pro 14 M4" />
                </div>

            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>Asus Zenbook S 16 UM5606KA-RK061W( Ryzen™ AI 7 350 / 16GB / SSD 1TB PCIE / 16"3K,OLED )</h1> 
                <div className="mb-6 space-y-2">
                        <p><span className="font-semibold">CPU:</span> Apple M4 Chip 10-Core CPU,10-core GPU, and 16-core Neural Engine</p>
                        <p><span className="font-semibold">RAM:</span> 16GB Unified</p>
                        <p><span className="font-semibold">Storage:</span>  1TB SSD</p>
                        <p><span className="font-semibold">Display:</span> 24" ( 4480 x 2520 ) Retina display</p>
                        <p><span className="font-semibold">Wi-Fi + Bluetooth</span></p>
                        <p><span className="font-semibold">Magic Keyboard ID / Mouse</span></p>
                        <p><span className="font-semibold">Weight:</span>4.44kg</p>
                        <p><span className="font-semibold">Operating System:</span>macOS</p>
                        <p><span className="font-semibold">Color:</span> Green, Green, Pink, Blue, Silver</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Warranty</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>1-year hardware</li>
                            <li>(No warranty for screen, battery, keyboard, fan & speaker, adapter)</li>
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

export default IMac24;