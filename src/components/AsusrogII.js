import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Correct relative path
function AsusrogII() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice =205.00;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const navigate = useNavigate();

    const cartContext = useCart();
    const addToCart = cartContext?.addToCart;

    const product = {
        id: 'Asus ROG Claymore II',
        name: 'Asus ROG Claymore II TKL (80% / 100%)',
        price: unitPrice,
        image: 'fontend/key-asus1.png'
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
                <img src="fontend/key-asus1.png" alt="MacBook Pro 14 M4" />
                </div>

            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>Asus ROG Claymore II TKL (80% / 100%)</h1> 
                <div className="mb-6 space-y-2">
                        <p><span className="font-semibold">Play It Your Way:</span> Detachable numpad can be attached to either side of the 80% keyboard to suit personal play styles and gaming setups</p>
                        <p><span className="font-semibold">ROG RX Optical Mechanical Switches:</span> RX Red and RX Blue switches feature centralized lighting and provide consistent wobble-free keystrokes with near-zero debounce delay
                        Learn more about ROG RX Keyboard Switches</p>
                        <p><span className="font-semibold">PBT doubleshot keycaps:</span> PBT keycaps offer a premium feel and long-lasting durability that feature unique ROG legends for stylish illumination</p>
                        <p><span className="font-semibold">Lag-Free Connection:</span> Ultrafast 1 ms response in both wired or 2.4 GHz wireless modes</p>
                        <p><span className="font-semibold">Outstanding Battery Life:</span> 4000 mAh battery provides up to 43 hours of use (full-size with lighting on), and keyboard includes built-in LED battery-level indicator</p>
                        <p><span className="font-semibold">Fast Charge & USB Passthrough:</span> Easily switch between USB-C® fast charging and USB Type-A passthrough</p>
                        <p><span className="font-semibold">Intuitive Control:</span>Four fully customizable hotkeys and a built-in volume control wheel on the numpad</p>
                        <p><span className="font-semibold">Wireless Aura Sync:</span> Synchronized light effects — even in wireless mode</p>
                        <p><span className="font-semibold">Ergonomic Design:</span> Detachable magnetic wrist rest for comfortable marathon gaming sessions</p>
                    </div>

                    <div className="mb-6">
                        <h2 className="text-xl font-semibold mb-2">Warranty</h2>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>1-year hardware</li>
                            <li>No warranty for screen, battery, keyboard, fan & speaker, adapter</li>
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

export default AsusrogII;