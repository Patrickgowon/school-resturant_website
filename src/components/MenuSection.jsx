import React from 'react';
import { Star } from 'lucide-react';

const MenuSection = ({ items, onAddToCart }) => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Popular Meals Near You
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="text-green-600 font-bold">₦{item.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{item.restaurant}</p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                    {item.prepTime}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="text-sm ml-1">{item.rating}</span>
                  </div>
                </div>
                <button
                  onClick={() => onAddToCart(item)}
                  className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;