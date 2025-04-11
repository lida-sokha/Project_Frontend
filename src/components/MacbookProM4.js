import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Correct relative path
function MacbookProM4() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice =1599.00;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const navigate = useNavigate();

    const cartContext = useCart();
    const addToCart = cartContext?.addToCart;

    const product = {
        id: 'macbook-m4-pro',
        name: 'MacBook Pro 14 (M4 / 16GB / SSD 512GB / 14.2")',
        price: 1599.00,
        image: 'fortend/MAC-14-M4-black-330x409.jpg'
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
                <img src="fontend\MAC-14-M4-black-330x409.jpg" alt="MacBook Pro 14 M4" />
                </div>

            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>MacBook Pro 14 (M4 / 16GB / SSD 512GB / 14.2")</h1> 
                <div className="mb-6 space-y-2">
                        <p><span className="font-semibold">CPU:</span> Apple M4 chip with 10-core CPU, 10-core GPU, 16-core Neural Engine</p>
                        <p><span className="font-semibold">RAM:</span> 16GB Unified</p>
                        <p><span className="font-semibold">Storage:</span> SSD 512GB</p>
                        <p><span className="font-semibold">Display:</span> 14.2" Liquid Retina XDR Display</p>
                        <p><span className="font-semibold">Connectivity:</span> Wi-Fi + Bluetooth 5</p>
                        <p><span className="font-semibold">Weight:</span> 1.60Kg</p>
                        <p><span className="font-semibold">OS:</span> MacOS</p>
                        <p><span className="font-semibold">Color:</span> Black and Silver</p>
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

export default MacbookProM4;