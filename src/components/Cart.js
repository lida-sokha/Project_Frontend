import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const discount = 60.00; // Could be dynamic

  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const grandTotal = subtotal - discount;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      
      {/* Cart Items */}
      <div className="space-y-6">
        {cart.map((item) => (
          <div key={item.id} className="border-b pb-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="px-3">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="text-right mt-2">
              <p className="font-medium">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary - Added discount and grand total */}
      <div className="mt-6">
        <h3 className="font-bold mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          
        </div>
      </div>

      {/* Discount and Checkout */}
      <div className="mt-8 space-y-4">
        <div className="flex">
          <input 
            type="text" 
            placeholder="Enter discount code" 
            className="flex-1 border rounded-l px-4 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-gray-800 text-white px-4 py-2 rounded-r hover:bg-gray-700">
            Apply
          </button>
        </div>
        {/* In your Cart component, replace the checkout button with: */}
        <Link to="/checkout" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 font-bold block text-center">
          Check out
        </Link>
      </div>
    </div>
  );
}

export default Cart;