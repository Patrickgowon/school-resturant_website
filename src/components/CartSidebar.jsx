import React from 'react';
import { X } from 'lucide-react';

const CartSidebar = ({ isOpen, onClose, cart, onRemoveFromCart, onPayment }) => {
  if (!isOpen) return null;

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="p-6 h-full flex flex-col">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="p-2">
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto">
            {cart.length === 0 ? (
              <p className="text-center text-gray-500 mt-8">Your cart is empty</p>
            ) : (
              <div className="space-y-4">
                {cart.map(item => (
                  <div key={item.cartId} className="flex justify-between items-center border-b pb-4">
                    <div>
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.restaurant}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="font-bold text-green-600">₦{item.price}</span>
                      <button
                        onClick={() => onRemoveFromCart(item.cartId)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {cart.length > 0 && (
            <div className="border-t pt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="font-bold text-xl text-green-600">₦{getTotalPrice()}</span>
              </div>
              <button
                onClick={onPayment}
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Pay with Paystack
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;