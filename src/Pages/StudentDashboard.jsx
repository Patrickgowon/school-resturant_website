import React, { useState, useEffect } from 'react';
import {
  User, ShoppingBag, Heart, Clock, Star, Wallet, LogOut,
  CreditCard, MapPin, Phone, Mail, Award,
  Search, Bell, Plus, Minus, X, Check,
  Zap, Coffee, Utensils, Leaf, Flame, ChevronLeft
} from 'lucide-react';

const userData = {
  name: 'Tolu Adeyemi',
  matricNumber: 'CSC/2021/045',
  department: 'Computer Science',
  email: 'tolu@university.edu.ng',
};

const restaurants = [
  {
    id: 1, name: 'Mama Titi Kitchen', cuisine: 'Nigerian', rating: 4.8,
    time: '15–25 min', tag: 'Popular', color: '#FF6B35', emoji: '🍲',
    items: [
      { id: 101, name: 'Jollof Rice + Chicken', price: 1800, desc: 'Smoky party jollof with grilled chicken' },
      { id: 102, name: 'Fried Rice + Fish', price: 1600, desc: 'Special fried rice with tilapia' },
      { id: 103, name: 'Egusi Soup + Fufu', price: 2000, desc: 'Rich melon soup with fresh fish' },
      { id: 104, name: 'Pepper Soup', price: 1200, desc: 'Spicy catfish pepper soup' },
    ],
  },
  {
    id: 2, name: 'Campus Bites', cuisine: 'Continental', rating: 4.5,
    time: '10–20 min', tag: 'Fast', color: '#4ECDC4', emoji: '🍔',
    items: [
      { id: 201, name: 'Beef Burger', price: 2200, desc: 'Double patty with fries' },
      { id: 202, name: 'Shawarma', price: 1500, desc: 'Chicken or beef wrap' },
      { id: 203, name: 'Grilled Sandwich', price: 1100, desc: 'Club sandwich, toasted' },
      { id: 204, name: 'Pasta Bolognese', price: 1800, desc: 'Spaghetti in rich meat sauce' },
    ],
  },
  {
    id: 3, name: 'Green Bowl', cuisine: 'Healthy', rating: 4.7,
    time: '12–18 min', tag: 'Healthy', color: '#6BCB77', emoji: '🥗',
    items: [
      { id: 301, name: 'Protein Bowl', price: 2400, desc: 'Quinoa, chicken, avocado, greens' },
      { id: 302, name: 'Fruit Smoothie', price: 900, desc: 'Blended seasonal fruits' },
      { id: 303, name: 'Grilled Chicken Salad', price: 2000, desc: 'Caesar dressing, croutons' },
      { id: 304, name: 'Overnight Oats', price: 1100, desc: 'Chia seeds, banana, honey' },
    ],
  },
  {
    id: 4, name: 'Sip & Snack', cuisine: 'Café', rating: 4.6,
    time: '5–15 min', tag: 'Café', color: '#A78BFA', emoji: '☕',
    items: [
      { id: 401, name: 'Cappuccino', price: 800, desc: 'Espresso with foamed milk' },
      { id: 402, name: 'Croissant', price: 700, desc: 'Buttery, flaky, fresh-baked' },
      { id: 403, name: 'Chin Chin Pack', price: 500, desc: 'Crunchy fried snack' },
      { id: 404, name: 'Meat Pie', price: 600, desc: 'Savory pastry, oven-fresh' },
    ],
  },
];

const recentOrders = [
  { id: '#ORD-2891', restaurant: 'Mama Titi Kitchen', items: ['Jollof Rice + Chicken', 'Pepper Soup'], total: 3000, status: 'delivered', date: 'Today, 12:34 PM', rating: 5 },
  { id: '#ORD-2890', restaurant: 'Campus Bites', items: ['Beef Burger', 'Pasta Bolognese'], total: 4000, status: 'on-the-way', date: 'Today, 11:15 AM' },
  { id: '#ORD-2887', restaurant: 'Green Bowl', items: ['Protein Bowl', 'Fruit Smoothie'], total: 3300, status: 'delivered', date: 'Yesterday', rating: 4 },
];

const transactions = [
  { id: 1, desc: 'Wallet Top-up', date: 'Today, 9:00 AM', amount: 5000, type: 'credit' },
  { id: 2, desc: 'Order #ORD-2891', date: 'Today, 12:30 PM', amount: 3000, type: 'debit' },
  { id: 3, desc: 'Order #ORD-2887', date: 'Yesterday', amount: 3300, type: 'debit' },
  { id: 4, desc: 'Wallet Top-up', date: '2 days ago', amount: 10000, type: 'credit' },
];

const tagIcon = {
  Popular: <Flame size={11} />,
  Fast: <Zap size={11} />,
  Healthy: <Leaf size={11} />,
  Café: <Coffee size={11} />,
};

const statusStyles = {
  delivered: { badge: 'bg-green-100 text-green-800', label: 'Delivered' },
  'on-the-way': { badge: 'bg-blue-100 text-blue-800', label: 'On the way' },
  preparing: { badge: 'bg-yellow-100 text-yellow-800', label: 'Preparing' },
};

const tabs = [
  { id: 'home', label: 'Order', icon: Utensils },
  { id: 'orders', label: 'Orders', icon: Clock },
  { id: 'wallet', label: 'Wallet', icon: Wallet },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [cart, setCart] = useState({});
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [search, setSearch] = useState('');
  const [walletBalance] = useState(12500);
  const [cartOpen, setCartOpen] = useState(false);

  const cartTotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    for (const r of restaurants) {
      const item = r.items.find(i => i.id === +id);
      if (item) return sum + item.price * qty;
    }
    return sum;
  }, 0);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const addToCart = (itemId) => setCart(c => ({ ...c, [itemId]: (c[itemId] || 0) + 1 }));
  const removeFromCart = (itemId) => setCart(c => {
    const n = { ...c };
    if (n[itemId] > 1) n[itemId]--; else delete n[itemId];
    return n;
  });
  const placeOrder = () => {
    setOrderPlaced(true); setCart({}); setCartOpen(false);
    setTimeout(() => setOrderPlaced(false), 3500);
  };
  const filteredRestaurants = restaurants.filter(r =>
    r.name.toLowerCase().includes(search.toLowerCase()) ||
    r.cuisine.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-green-50 text-gray-900 font-sans pb-16 md:pb-0">

      {/* Toast */}
      {orderPlaced && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-800 text-green-100 px-5 py-3 rounded-2xl flex items-center gap-2 text-sm font-semibold shadow-xl animate-bounce whitespace-nowrap">
          <Check size={16} /> Order placed! Delivery in ~20 min
        </div>
      )}

      {/* Cart Drawer Overlay */}
      {cartOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-hidden
                          sm:w-96 md:bottom-0
                          max-sm:top-auto max-sm:right-0 max-sm:bottom-0 max-sm:left-0 max-sm:rounded-t-3xl max-sm:max-h-[88vh]">
            {/* Handle for mobile */}
            <div className="sm:hidden w-10 h-1 bg-green-200 rounded-full mx-auto mt-3 mb-1 flex-shrink-0" />
            <div className="flex items-center justify-between px-5 py-4 border-b border-green-100 flex-shrink-0">
              <span className="font-bold text-green-800 text-lg">Your Cart</span>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-3">
              {cartCount === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <ShoppingBag size={44} className="mb-3 opacity-30" />
                  <p className="text-sm">Your cart is empty</p>
                  <button onClick={() => setCartOpen(false)} className="mt-3 text-green-600 text-sm font-semibold hover:text-green-700">
                    Browse restaurants →
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {Object.entries(cart).map(([id, qty]) => {
                      let item, rest;
                      for (const r of restaurants) {
                        const f = r.items.find(i => i.id === +id);
                        if (f) { item = f; rest = r; break; }
                      }
                      if (!item) return null;
                      return (
                        <div key={id} className="bg-green-50 border border-green-200 rounded-2xl p-3">
                          <div className="flex justify-between items-start gap-2 mb-2">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold text-green-800 leading-tight">{item.name}</p>
                              <p className="text-xs text-gray-500 mt-0.5">{rest.name}</p>
                            </div>
                            <span className="text-green-600 font-bold text-sm flex-shrink-0">
                              ₦{(item.price * qty).toLocaleString()}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <button onClick={() => removeFromCart(+id)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors flex-shrink-0">
                              <Minus size={13} />
                            </button>
                            <span className="font-bold text-gray-900 w-5 text-center">{qty}</span>
                            <button onClick={() => addToCart(+id)}
                              className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors flex-shrink-0">
                              <Plus size={13} />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
            {cartCount > 0 && (
              <div className="px-5 py-4 border-t border-green-100 flex-shrink-0 bg-white">
                <div className="flex justify-between text-sm text-gray-500 mb-1"><span>Subtotal</span><span>₦{cartTotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm text-gray-500 mb-3"><span>Delivery fee</span><span>₦200</span></div>
                <div className="flex justify-between font-bold text-base text-gray-900 mb-4">
                  <span>Total</span>
                  <span className="text-green-600">₦{(cartTotal + 200).toLocaleString()}</span>
                </div>
                <button onClick={placeOrder}
                  className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-3.5 rounded-2xl text-sm transition-all">
                  Place Order · ₦{(cartTotal + 200).toLocaleString()}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Paid from wallet · Balance: ₦{walletBalance.toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Top Nav */}
      <nav className="bg-white border-b border-green-100 shadow-sm sticky top-0 z-30 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between h-14 sm:h-16">
          <span className="font-black text-green-600 text-lg sm:text-xl tracking-tight">campuseats</span>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
            </button>
            <button onClick={() => setCartOpen(true)}
              className="flex items-center gap-1.5 bg-green-50 border border-green-200 text-green-600 font-semibold text-xs sm:text-sm px-3 py-1.5 rounded-xl hover:bg-green-100 transition-colors">
              <ShoppingBag size={15} />
              {cartCount > 0
                ? <span className="bg-green-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold">{cartCount}</span>
                : <span className="hidden sm:inline">Cart</span>}
              {cartCount > 0 && <span className="hidden sm:inline">₦{cartTotal.toLocaleString()}</span>}
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-green-600 to-green-800 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
              {userData.name.split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Tab Bar */}
      <div className="hidden md:block bg-white border-b border-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex gap-1">
          {tabs.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => { setActiveTab(t.id); setSelectedRestaurant(null); }}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold border-b-2 rounded-t-lg transition-all whitespace-nowrap
                  ${activeTab === t.id
                    ? 'border-green-600 text-green-600 bg-green-50'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}>
                <Icon size={14} />{t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-6">

        {/* Greeting */}
        <div className="mb-5">
          <p className="text-xs text-gray-500 mb-1">Good afternoon 👋</p>
          <h1 className="font-black text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight">
            {userData.name.split(' ')[0]}, what are you eating today?
          </h1>
          <p className="text-xs text-gray-400 mt-1">{userData.matricNumber} · {userData.department}</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Wallet', value: `₦${walletBalance.toLocaleString()}`, color: 'text-green-600', bg: 'bg-green-50', icon: <Wallet size={14} className="text-green-600" /> },
            { label: 'Total Orders', value: '24', color: 'text-teal-600', bg: 'bg-teal-50', icon: <ShoppingBag size={14} className="text-teal-600" /> },
            { label: 'Reward pts', value: '450', color: 'text-violet-600', bg: 'bg-violet-50', icon: <Award size={14} className="text-violet-600" /> },
            { label: 'Favorites', value: '8', color: 'text-rose-500', bg: 'bg-rose-50', icon: <Heart size={14} className="text-rose-500" /> },
          ].map((s, i) => (
            <div key={i} className="bg-white border border-green-100 rounded-2xl p-3 sm:p-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{s.label}</p>
                  <p className={`font-black text-lg sm:text-2xl ${s.color}`}>{s.value}</p>
                </div>
                <div className={`${s.bg} p-2 rounded-xl flex-shrink-0`}>{s.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── ORDER FOOD TAB ── */}
        {activeTab === 'home' && (
          <div className="animate-[fadeIn_0.3s_ease]">
            {selectedRestaurant ? (
              <div>
                <button onClick={() => setSelectedRestaurant(null)}
                  className="flex items-center gap-1.5 text-green-600 font-semibold text-sm mb-4 hover:text-green-700 transition-colors">
                  <ChevronLeft size={16} /> Back to restaurants
                </button>
                <div className="flex items-center gap-3 mb-5 bg-white border border-green-100 rounded-2xl p-3 sm:p-4 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${selectedRestaurant.color}20` }}>
                    {selectedRestaurant.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-base sm:text-lg text-gray-900 truncate">{selectedRestaurant.name}</h2>
                    <p className="text-xs text-gray-500 mt-0.5">{selectedRestaurant.cuisine} · ⭐ {selectedRestaurant.rating} · {selectedRestaurant.time}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedRestaurant.items.map(item => (
                    <div key={item.id} className="bg-white border border-green-100 rounded-2xl p-4 hover:-translate-y-0.5 hover:shadow-md transition-all">
                      <h3 className="font-semibold text-sm text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-xs text-gray-400 mb-3 leading-relaxed">{item.desc}</p>
                      <div className="flex justify-between items-center gap-2">
                        <span className="text-green-600 font-bold text-sm sm:text-base">₦{item.price.toLocaleString()}</span>
                        {cart[item.id] ? (
                          <div className="flex items-center gap-2">
                            <button onClick={() => removeFromCart(item.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                              <Minus size={12} />
                            </button>
                            <span className="font-bold text-gray-900 w-5 text-center text-sm">{cart[item.id]}</span>
                            <button onClick={() => addToCart(item.id)}
                              className="w-7 h-7 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                              <Plus size={12} />
                            </button>
                          </div>
                        ) : (
                          <button onClick={() => addToCart(item.id)}
                            className="bg-green-600 hover:bg-green-700 active:scale-95 text-white text-xs font-bold px-3 py-1.5 rounded-xl transition-all">
                            Add +
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {/* Mobile sticky cart bar */}
                {cartCount > 0 && (
                  <div className="md:hidden fixed bottom-16 left-3 right-3 z-20">
                    <button onClick={() => setCartOpen(true)}
                      className="w-full bg-green-600 text-white font-bold py-3.5 px-4 rounded-2xl flex justify-between items-center text-sm shadow-xl">
                      <span className="bg-white/20 rounded-lg px-2 py-0.5 text-xs">{cartCount} item{cartCount > 1 ? 's' : ''}</span>
                      <span>View Cart</span>
                      <span>₦{(cartTotal + 200).toLocaleString()}</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div>
                <div className="relative mb-5">
                  <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    placeholder="Search restaurants or cuisines..."
                    value={search} onChange={e => setSearch(e.target.value)}
                    className="w-full bg-white border border-green-100 rounded-2xl py-3 pl-10 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
                  />
                </div>

                {/* Active order banner */}
                {recentOrders.find(o => o.status === 'on-the-way') && (
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-2xl p-4 mb-5 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                      <div>
                        <p className="text-sm font-semibold text-green-800">Order on the way</p>
                        <p className="text-xs text-green-600 mt-0.5">Campus Bites · Est. 12 min</p>
                      </div>
                    </div>
                    <button onClick={() => setActiveTab('orders')} className="text-xs text-green-700 font-bold hover:text-green-900 flex-shrink-0">
                      Track →
                    </button>
                  </div>
                )}

                <h2 className="font-bold text-base sm:text-lg text-gray-900 mb-4">Restaurants on campus</h2>
                <div className="grid grid-cols-2 gap-3">
                  {filteredRestaurants.map(r => (
                    <div key={r.id} onClick={() => setSelectedRestaurant(r)}
                      className="bg-white border border-green-100 rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-0.5 hover:shadow-md transition-all">
                      <div className="h-16 sm:h-20 flex items-center justify-center text-4xl sm:text-5xl relative"
                        style={{ background: `${r.color}15` }}>
                        {r.emoji}
                        <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                          style={{ background: `${r.color}25`, color: r.color, border: `1px solid ${r.color}40` }}>
                          {tagIcon[r.tag]}{r.tag}
                        </span>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-xs sm:text-sm text-gray-900 truncate mb-0.5">{r.name}</h3>
                        <p className="text-[11px] text-gray-400 mb-2">{r.cuisine}</p>
                        <div className="flex justify-between text-[11px]">
                          <span className="flex items-center gap-1 text-green-600"><Star size={11} fill="#16a34a" />{r.rating}</span>
                          <span className="flex items-center gap-1 text-gray-400"><Clock size={11} />{r.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ── ORDERS TAB ── */}
        {activeTab === 'orders' && (
          <div>
            <h2 className="font-black text-lg sm:text-xl text-gray-900 mb-4">My Orders</h2>
            <div className="space-y-3">
              {recentOrders.map(order => {
                const s = statusStyles[order.status] || statusStyles.preparing;
                return (
                  <div key={order.id} className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 shadow-sm">
                    <div className="flex justify-between items-start gap-3 mb-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-sm sm:text-base text-gray-900">{order.restaurant}</span>
                          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.label}</span>
                        </div>
                        <p className="text-xs text-gray-400 truncate">{order.items.join(' · ')}</p>
                      </div>
                      <span className="text-green-600 font-bold text-sm sm:text-base flex-shrink-0">₦{order.total.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 border-t border-green-50 gap-2 flex-wrap">
                      <span className="text-[11px] text-gray-400">{order.id} · {order.date}</span>
                      {order.status === 'delivered' ? (
                        <div className="flex items-center gap-1.5">
                          {order.rating && Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={11} fill={i < order.rating ? '#16a34a' : 'none'} stroke="#16a34a" />
                          ))}
                          <button className="text-xs text-green-600 font-semibold ml-1 hover:text-green-800">Reorder</button>
                        </div>
                      ) : (
                        <button className="text-xs text-green-600 font-semibold hover:text-green-800">Track →</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── WALLET TAB ── */}
        {activeTab === 'wallet' && (
          <div>
            <div className="bg-gradient-to-br from-green-800 to-green-600 rounded-3xl p-6 sm:p-8 mb-5 relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/5 rounded-full" />
              <p className="text-[11px] text-green-200 uppercase tracking-widest mb-2">Available Balance</p>
              <p className="font-black text-3xl sm:text-4xl text-white mb-5">₦{walletBalance.toLocaleString()}</p>
              <button className="bg-white text-green-700 font-bold text-sm px-5 py-2.5 rounded-xl hover:bg-green-50 transition-colors">
                + Fund Wallet
              </button>
            </div>
            <h2 className="font-black text-lg text-gray-900 mb-3">Transaction History</h2>
            <div className="space-y-2">
              {transactions.map(t => (
                <div key={t.id} className="bg-white border border-green-100 rounded-2xl px-4 py-3 flex justify-between items-center gap-3 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${t.type === 'credit' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                      {t.type === 'credit' ? <CreditCard size={15} /> : <ShoppingBag size={15} />}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{t.desc}</p>
                      <p className="text-[11px] text-gray-400 mt-0.5">{t.date}</p>
                    </div>
                  </div>
                  <span className={`font-bold text-sm flex-shrink-0 ${t.type === 'credit' ? 'text-green-600' : 'text-red-500'}`}>
                    {t.type === 'credit' ? '+' : '-'}₦{t.amount.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── PROFILE TAB ── */}
        {activeTab === 'profile' && (
          <div>
            <div className="bg-white border border-green-100 rounded-2xl p-4 mb-5 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-600 to-green-800 rounded-2xl flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="font-black text-lg sm:text-xl text-gray-900">{userData.name}</h2>
                <p className="text-xs text-gray-500 mt-0.5">{userData.department}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Email', value: userData.email, icon: <Mail size={13} /> },
                { label: 'Phone', value: '+234 800 000 0000', icon: <Phone size={13} /> },
                { label: 'Matric Number', value: userData.matricNumber, icon: <Award size={13} /> },
                { label: 'Delivery Address', value: 'Hall A, Room 204', icon: <MapPin size={13} /> },
              ].map((field, i) => (
                <div key={i} className="bg-green-50 border border-green-200 rounded-xl p-3 sm:p-4">
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest mb-1.5">{field.label}</p>
                  <div className="flex items-center gap-2 text-gray-900">
                    <span className="text-green-600 flex-shrink-0">{field.icon}</span>
                    <span className="text-sm truncate">{field.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">
                Edit Profile
              </button>
              <button className="bg-white border border-green-200 text-gray-600 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-gray-50 transition-colors">
                Change Password
              </button>
              <button className="ml-auto bg-red-50 border border-red-200 text-red-600 font-semibold text-sm px-4 py-2.5 rounded-xl hover:bg-red-100 flex items-center gap-2 transition-colors">
                <LogOut size={13} /> Logout
              </button>
            </div>
          </div>
        )}

        <div className="h-8 sm:h-12" />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-green-100 flex z-30 shadow-[0_-2px_12px_rgba(22,101,52,0.08)]">
        {tabs.map(t => {
          const Icon = t.icon;
          const isActive = activeTab === t.id;
          return (
            <button key={t.id} onClick={() => { setActiveTab(t.id); setSelectedRestaurant(null); }}
              className={`flex-1 flex flex-col items-center gap-1 py-2 relative transition-colors
                ${isActive ? 'text-green-600 border-t-2 border-green-600' : 'text-gray-400 border-t-2 border-transparent'}`}>
              <Icon size={20} />
              <span className="text-[10px] font-semibold">{t.label}</span>
              {t.id === 'home' && cartCount > 0 && (
                <span className="absolute top-1.5 left-1/2 translate-x-2 bg-green-600 text-white w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}