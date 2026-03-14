import React, { useState } from 'react';
import { Menu, X, ShoppingCart, Leaf } from 'lucide-react';

const Navbar = ({ cartItemsCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <span className="text-2xl font-bold text-green-700">Plasu</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">Restaurants</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">How it Works</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition">Contact</a>
            
            {/* Cart Icon */}
            <button 
              onClick={onCartClick}
              className="relative p-2 text-green-600 hover:text-green-700"
            >
              <ShoppingCart className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-green-600 hover:text-green-700 font-medium">Login</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button onClick={onCartClick} className="relative p-2">
              <ShoppingCart className="h-6 w-6 text-green-600" />
              {cartItemsCount > 0 && (
                <span className="absolute top-0 right-0 bg-green-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-2">
            <a href="#" className="block py-2 text-gray-700">Home</a>
            <a href="#" className="block py-2 text-gray-700">Restaurants</a>
            <a href="#" className="block py-2 text-gray-700">How it Works</a>
            <a href="#" className="block py-2 text-gray-700">Contact</a>
            <div className="pt-4 space-y-2">
              <button className="w-full text-green-600 border border-green-600 px-4 py-2 rounded-lg">
                Login
              </button>
              <button className="w-full bg-green-600 text-white px-4 py-2 rounded-lg">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;