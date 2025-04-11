import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

function Checkout() {
  const { cart } = useCart();
  const navigate = useNavigate();
  
  // Calculate order totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const taxRate = 0.10; // 10% tax
  const tax = subtotal * taxRate;
  const total = subtotal + tax;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment here
    alert('Payment successful!');
    navigate('/order-confirmation');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8">CHECK OUT</h1>
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Order Summary - Left Side */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div key={item.id} className="border-b pb-4">
                <p className="font-medium">{item.name}</p>
                <div className="flex justify-between text-sm text-gray-600 mt-1">
                  <span>Quantity: {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="space-y-2 border-t pt-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Sales Tax (10%)</span>
              <span>+${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg pt-2">
              <span>Total due:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Payment Form - Right Side */}
        <div className="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Pay</h2>
          <hr className="mb-4" />
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input 
                type="email" 
                className="w-full p-2 border rounded" 
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Card information</label>
              <div className="flex items-center border rounded p-2 mb-1">
                <span>1234 1234 1234 1234</span>
                <span className="ml-auto text-sm text-gray-500">VISA</span>
              </div>
              <p className="text-xs text-gray-500">HOME</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1">MM/YY</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="MM/YY"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">CVC</label>
                <input 
                  type="text" 
                  className="w-full p-2 border rounded" 
                  placeholder="CVC"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name on card</label>
              <input 
                type="text" 
                className="w-full p-2 border rounded" 
                placeholder="Enter your fullname"
                required
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Country / Region</label>
              <select className="w-full p-2 border rounded" required>
                <option value="Cambodia">Cambodia</option>
                {/* Add other countries as needed */}
              </select>
            </div>
            
            <hr className="mb-4" />
            
            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-3 rounded-md font-bold hover:bg-blue-700 transition-colors"
            >
              Pay ${total.toFixed(2)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Checkout;