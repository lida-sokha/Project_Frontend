import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext'; // Correct relative path
function AsusS16() {
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 215.00;
    const totalPrice = (unitPrice * quantity).toFixed(2);
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const product = {
        id: 'Asus TUF Gaming VG27AQ3A ',
        name: 'Asus TUF Gaming VG27AQ3A ( 27" / 2K IPS / 180Hz )',
        price: unitPrice,
        image: 'fontend/moni6.jpg'
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
                <img src="fontend/moni6.jpg" alt="MacBook Pro 14 M4" />
                </div>

            <div className='md:w-1/2'>
                <h1 className='text-3xl font-bold mb-4'>Asus TUF Gaming VG27AQ3A ( 27" / 2K IPS / 180Hz )</h1> 
                <div className="mb-6 space-y-2">
                        <p><span className="font-semibold">Model:</span> TUF Gaming VG27AQ3A</p>
                        <p><span className="font-semibold">Display:</span> 
                        Panel Size (inch) : 27
                        Aspect Ratio : 16:9
                        Display Viewing Area (H x V) : 596.74 x 335.66 mm
                        Display Surface : Non-Glare
                        Backlight Type : LED
                        Panel Type : Fast IPS
                        Viewing Angle (CR≧10, H/V) : 178°/ 178°Pixel Pitch : 0.233mm
                        Resolution : 2560x1440
                        Color Space (sRGB) : 130%
                        Brightness (Typ.) : 250cd/㎡
                        Contrast Ratio (Typ.) : 1000:1
                        Display Colors : 16.7M
                        Response Time : 1ms(GTG)
                        Refresh Rate (Max) : 180Hz
                        HDR (High Dynamic Range) Support : HDR10
                        Flicker-free : Yes</p>
                        <p><span className="font-semibold">Features:</span>Trace Free Technology : Yes
                        GameVisual : Yes
                        Color Temp. Selection : Yes(4 modes)
                        GamePlus : Yes
                        HDCP : Yes, 2.2
                        Extreme Low Motion Blur : Yes
                        ELMB Sync: Yes
                        VRR Technology : Yes (Adaptive-Sync)
                        GameFast Input technology : Yes
                        Shadow Boost : Yes
                        DisplayWidget : Yes, DisplayWidget Center
                        Low Blue Light : Yes</p>
                        <p><span className="font-semibold">Audio:</span>Speaker : Yes(2Wx2)</p>
                        <p><span className="font-semibold">Input port:</span>DisplayPort 1.4 x 1 (HBR2)
                        HDMI(v2.0) x 2
                        Earphone Jack : Yes</p>
                        <p><span className="font-semibold">Signal Frequency:</span>Digital Signal Frequency : HDMI:30~220KHz(H) / 48~ 144Hz(V)
                        DP: 30~263KHz(H) / 48~180Hz(V)
                        Digital Signal Frequency : HDMI:30~220KHz(H) / 48~ 144Hz(V)
                        DP: 30~263KHz(H) / 48~180Hz(V)</p>
                        <p><span className="font-semibold">Power Consumption:</span>Power Consumption : 35W*
                        Power Saving Mode : 0.5W
                        Power Off Mode : 0.3W
                        Voltage : 100-240V, 50/60Hz</p>
                        <p><span className="font-semibold">Mechanical Design:</span>Tilt : Yes (+20° ~ -5°)
                        Swivel : Yes (+20° ~ -20°)
                        Height Adjustment : No
                        VESA Wall Mounting : 100x100mm
                        Kensington Lock : Yes</p>
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