import React, { useState, useEffect, useRef } from 'react';
import {
  ShoppingCart, X, Plus, Minus, Trash2, Menu, Bell,
  Star, Clock, MapPin, Zap, Shield, Truck, ChevronRight,
  Search, Heart, Instagram, Twitter, Facebook, Phone, Mail,
  Leaf, Flame, Coffee, Check, ArrowRight, Utensils
} from 'lucide-react';

// ─── DATA ──────────────────────────────────────────────────────────────────
const categories = [
  { id: 'all', label: 'All Items', emoji: '🍽️' },
  { id: 'rice', label: 'Rice Dishes', emoji: '🍚' },
  { id: 'soup', label: 'Soups', emoji: '🍲' },
  { id: 'protein', label: 'Protein', emoji: '🍗' },
  { id: 'snacks', label: 'Snacks', emoji: '🥨' },
  { id: 'drinks', label: 'Drinks', emoji: '🥤' },
  { id: 'healthy', label: 'Healthy', emoji: '🥗' },
];

const menuItems = [
  { id: 1, name: 'Jollof Rice + Chicken', price: 1800, category: 'rice', rating: 4.9, time: '15 min', restaurant: 'Mama Titi Kitchen', emoji: '🍚', tag: 'Bestseller', desc: 'Smoky party jollof with perfectly grilled chicken thigh and coleslaw.' },
  { id: 2, name: 'Fried Rice + Fish', price: 1600, category: 'rice', rating: 4.7, time: '15 min', restaurant: 'Mama Titi Kitchen', emoji: '🍛', tag: null, desc: 'Flavourful Nigerian fried rice with fresh tilapia fillet.' },
  { id: 3, name: 'Egusi Soup + Fufu', price: 2000, category: 'soup', rating: 4.8, time: '20 min', restaurant: 'Mama Titi Kitchen', emoji: '🍲', tag: 'Popular', desc: 'Rich melon seed soup slow-cooked with assorted fish and beef.' },
  { id: 4, name: 'Pepper Soup', price: 1200, category: 'soup', rating: 4.6, time: '12 min', restaurant: 'Mama Titi Kitchen', emoji: '🥣', tag: null, desc: 'Spicy catfish pepper soup with scent leaves and utazi.' },
  { id: 5, name: 'Beef Burger', price: 2200, category: 'snacks', rating: 4.5, time: '10 min', restaurant: 'Campus Bites', emoji: '🍔', tag: null, desc: 'Double beef patty, cheddar, lettuce, pickles, secret sauce.' },
  { id: 6, name: 'Chicken Shawarma', price: 1500, category: 'snacks', rating: 4.6, time: '8 min', restaurant: 'Campus Bites', emoji: '🌯', tag: 'Fast', desc: 'Seasoned chicken wrap with garlic sauce and fresh veggies.' },
  { id: 7, name: 'Grilled Chicken', price: 2400, category: 'protein', rating: 4.8, time: '18 min', restaurant: 'Campus Bites', emoji: '🍗', tag: 'New', desc: 'Half chicken marinated in suya spice, grilled to perfection.' },
  { id: 8, name: 'Protein Bowl', price: 2600, category: 'healthy', rating: 4.9, time: '12 min', restaurant: 'Green Bowl', emoji: '🥗', tag: 'Healthy', desc: 'Quinoa, grilled chicken, avocado, cherry tomatoes, lemon dressing.' },
  { id: 9, name: 'Fruit Smoothie', price: 900, category: 'drinks', rating: 4.7, time: '5 min', restaurant: 'Green Bowl', emoji: '🥤', tag: null, desc: 'Blended mango, banana, pineapple with ginger and honey.' },
  { id: 10, name: 'Cappuccino', price: 800, category: 'drinks', rating: 4.6, time: '5 min', restaurant: 'Sip & Snack', emoji: '☕', tag: null, desc: 'Espresso with steamed micro-foam milk, dusted cocoa.' },
  { id: 11, name: 'Chin Chin Pack', price: 500, category: 'snacks', rating: 4.4, time: '2 min', restaurant: 'Sip & Snack', emoji: '🍪', tag: null, desc: 'Classic crunchy Nigerian chin chin, perfectly sweet.' },
  { id: 12, name: 'Overnight Oats', price: 1100, category: 'healthy', rating: 4.8, time: '2 min', restaurant: 'Green Bowl', emoji: '🥣', tag: 'Healthy', desc: 'Chia seeds, banana slices, honey drizzle, almond milk.' },
];

const features = [
  { icon: <Zap size={22} />, title: 'Lightning Fast', desc: 'Average delivery in under 20 minutes across campus', color: 'text-amber-500', bg: 'bg-amber-50 border-amber-100' },
  { icon: <Shield size={22} />, title: 'Safe & Hygienic', desc: 'All vendors verified and food safety certified', color: 'text-blue-500', bg: 'bg-blue-50 border-blue-100' },
  { icon: <Truck size={22} />, title: 'Free Delivery', desc: 'No delivery charges on orders above ₦2,000', color: 'text-green-600', bg: 'bg-green-50 border-green-200' },
  { icon: <Star size={22} />, title: 'Top Rated', desc: '4.8★ average across 2,000+ student reviews', color: 'text-violet-500', bg: 'bg-violet-50 border-violet-100' },
];

// ─── NAVBAR ────────────────────────────────────────────────────────────────
function Navbar({ cartCount, onCartClick, setAuthModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-md'} border-b border-green-100`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center">
              <Utensils size={16} className="text-white" />
            </div>
            <span className="font-black text-xl text-green-700 tracking-tight">plasu</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#menu" className="hover:text-green-600 transition-colors">Menu</a>
            <a href="#features" className="hover:text-green-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-green-600 transition-colors">Contact</a>
            <div className="flex items-center gap-2 ml-2">
              <button onClick={() => setAuthModal('login')}
                className="text-sm font-semibold text-green-700 px-4 py-2 rounded-xl border border-green-200 hover:bg-green-50 transition-all">
                Login
              </button>
              <button onClick={() => setAuthModal('register')}
                className="text-sm font-bold text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl transition-all active:scale-95 shadow-sm shadow-green-200">
                Register
              </button>
            </div>
            <button className="relative p-2 text-gray-500 hover:text-gray-700 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white" />
            </button>
          </div>

          {/* Cart + mobile menu */}
          <div className="flex items-center gap-2">
            <button onClick={onCartClick}
              className="relative flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-all active:scale-95">
              <ShoppingCart size={16} />
              <span className="hidden sm:inline">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button onClick={() => setMobileOpen(o => !o)}
              className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-green-100 pb-5 pt-3">
            {/* Nav links */}
            <div className="space-y-0.5 mb-4">
              {[
                { label: 'Menu', href: '#menu' },
                { label: 'About', href: '#features' },
                { label: 'Contact', href: '#contact' },
              ].map(l => (
                <a key={l.label} href={l.href} onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-xl transition-colors group">
                  <span>{l.label}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-green-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              ))}
            </div>

            {/* Divider with label */}
            <div className="flex items-center gap-3 px-4 mb-4">
              <div className="flex-1 h-px bg-green-100" />
              <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">Account</span>
              <div className="flex-1 h-px bg-green-100" />
            </div>

            {/* Auth buttons */}
            <div className="flex flex-col gap-2.5 px-1">
              <button
                onClick={() => { setAuthModal('login'); setMobileOpen(false); }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-green-700 py-3 rounded-2xl border-2 border-green-200 bg-white hover:bg-green-50 active:scale-[0.98] transition-all shadow-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                Login
              </button>
              <button
                onClick={() => { setAuthModal('register'); setMobileOpen(false); }}
                className="w-full flex items-center justify-center gap-2 text-sm font-bold text-white py-3 rounded-2xl bg-green-600 hover:bg-green-700 active:scale-[0.98] transition-all shadow-lg shadow-green-200">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Create Account
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// ─── HERO ──────────────────────────────────────────────────────────────────
function Hero({ onOrderClick }) {
  return (
    <section className="pt-24 pb-16 sm:pt-28 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-green-200">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              Now delivering across campus
            </div>
            <h1 className="font-black text-4xl sm:text-5xl lg:text-6xl text-gray-900 leading-[1.05] mb-5">
              Campus food,<br />
              <span className="text-green-600 relative">
                delivered fast
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10 Q75 2 150 8 Q225 14 298 6" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.4"/>
                </svg>
              </span>
            </h1>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
              Order from your favourite campus restaurants. Fresh food, straight to your hostel or office — in under 20 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#menu"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold text-sm px-6 py-3.5 rounded-2xl transition-all shadow-lg shadow-green-200">
                Order Now <ArrowRight size={16} />
              </a>
              <a href="#features"
                className="flex items-center justify-center gap-2 bg-white border border-green-200 text-green-700 font-semibold text-sm px-6 py-3.5 rounded-2xl hover:bg-green-50 transition-all">
                Learn More
              </a>
            </div>
            {/* Social proof */}
            <div className="flex items-center gap-4 mt-8">
              <div className="flex -space-x-2">
                {['🧑🏿','👩🏽','🧑🏾','👨🏿'].map((e, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-green-100 border-2 border-white flex items-center justify-center text-sm">{e}</div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {Array.from({length:5}).map((_,i) => <Star key={i} size={13} fill="#fbbf24" className="text-amber-400" />)}
                  <span className="text-sm font-bold text-gray-900 ml-1">4.8</span>
                </div>
                <p className="text-xs text-gray-500">from 2,000+ students</p>
              </div>
            </div>
          </div>

          {/* Visual card */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="absolute inset-0 bg-green-100 rounded-[3rem] -rotate-3 opacity-60" />
            <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-6 w-80 rotate-1">
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-green-50">
                <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center text-white font-black text-sm">PL</div>
                <div>
                  <p className="font-bold text-sm text-gray-900">plasu</p>
                  <p className="text-xs text-gray-400">Your order is confirmed ✓</p>
                </div>
              </div>
              <div className="space-y-3 mb-4">
                {[
                  { e:'🍚', n:'Jollof Rice + Chicken', p:'₦1,800' },
                  { e:'🥗', n:'Protein Bowl', p:'₦2,600' },
                  { e:'☕', n:'Cappuccino', p:'₦800' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 bg-green-50 rounded-xl">
                    <span className="text-xl">{item.e}</span>
                    <span className="flex-1 text-xs font-medium text-gray-800">{item.n}</span>
                    <span className="text-xs font-bold text-green-700">{item.p}</span>
                  </div>
                ))}
              </div>
              <div className="bg-green-600 text-white rounded-2xl p-3 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-green-200">Estimated delivery</p>
                  <p className="font-black text-lg">18 mins</p>
                </div>
                <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                  <Truck size={18} className="text-white" />
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-amber-400 text-white font-black text-xs px-3 py-1.5 rounded-full shadow-lg rotate-6">
              Free Delivery!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white border border-green-200 font-semibold text-xs px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 -rotate-3">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" /> Live tracking
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURES ──────────────────────────────────────────────────────────────
function Features() {
  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-2">Why plasu?</p>
          <h2 className="font-black text-2xl sm:text-3xl text-gray-900">Built for campus life</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div key={i} className={`${f.bg} border rounded-2xl p-5`}>
              <div className={`${f.color} mb-3`}>{f.icon}</div>
              <h3 className="font-bold text-sm text-gray-900 mb-1">{f.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CATEGORY FILTER ───────────────────────────────────────────────────────
function CategoryFilter({ selected, onChange }) {
  const ref = useRef(null);
  return (
    <div ref={ref} className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map(c => (
        <button key={c.id} onClick={() => onChange(c.id)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold whitespace-nowrap flex-shrink-0 border transition-all
            ${selected === c.id
              ? 'bg-green-600 text-white border-green-600 shadow-md shadow-green-200'
              : 'bg-white text-gray-600 border-green-100 hover:border-green-300 hover:text-green-700'}`}>
          <span>{c.emoji}</span>{c.label}
        </button>
      ))}
    </div>
  );
}

// ─── MENU CARD ─────────────────────────────────────────────────────────────
function MenuCard({ item, onAdd, inCart, qty, onRemove }) {
  const tagColors = {
    Bestseller: 'bg-amber-100 text-amber-700 border-amber-200',
    Popular: 'bg-rose-100 text-rose-700 border-rose-200',
    New: 'bg-blue-100 text-blue-700 border-blue-200',
    Healthy: 'bg-green-100 text-green-700 border-green-200',
    Fast: 'bg-violet-100 text-violet-700 border-violet-200',
  };

  return (
    <div className="bg-white border border-green-100 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-100 transition-all group">
      {/* Food visual */}
      <div className="h-32 sm:h-36 flex items-center justify-center text-6xl relative bg-gradient-to-br from-green-50 to-emerald-50">
        {item.emoji}
        {item.tag && (
          <span className={`absolute top-2.5 left-2.5 text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagColors[item.tag]}`}>
            {item.tag}
          </span>
        )}
        <button className="absolute top-2.5 right-2.5 w-7 h-7 bg-white/80 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
          <Heart size={13} />
        </button>
      </div>

      <div className="p-3.5">
        <div className="mb-1">
          <h3 className="font-bold text-sm text-gray-900 leading-tight">{item.name}</h3>
          <p className="text-[10px] text-gray-400 mt-0.5">{item.restaurant}</p>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{item.desc}</p>

        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="flex items-center gap-0.5"><Star size={10} fill="#fbbf24" className="text-amber-400" />{item.rating}</span>
            <span className="flex items-center gap-0.5"><Clock size={10} />{item.time}</span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2">
          <span className="font-black text-base text-green-600">₦{item.price.toLocaleString()}</span>
          {qty > 0 ? (
            <div className="flex items-center gap-2">
              <button onClick={onRemove}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                <Minus size={12} />
              </button>
              <span className="font-bold text-sm text-gray-900 w-4 text-center">{qty}</span>
              <button onClick={() => onAdd(item)}
                className="w-7 h-7 flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                <Plus size={12} />
              </button>
            </div>
          ) : (
            <button onClick={() => onAdd(item)}
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold text-xs px-3 py-1.5 rounded-xl transition-all">
              <Plus size={12} /> Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── MENU SECTION ──────────────────────────────────────────────────────────
function MenuSection({ items, onAdd, cartItems }) {
  const [search, setSearch] = useState('');

  const displayed = items.filter(i =>
    i.name.toLowerCase().includes(search.toLowerCase()) ||
    i.restaurant.toLowerCase().includes(search.toLowerCase())
  );

  const getQty = (id) => cartItems.filter(c => c.id === id).length;

  return (
    <section id="menu" className="py-10 px-4 sm:px-6 lg:px-8 bg-green-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Today's Selection</p>
            <h2 className="font-black text-2xl sm:text-3xl text-gray-900">What's on the menu?</h2>
          </div>
          {/* Search */}
          <div className="relative sm:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search dishes..."
              className="w-full pl-9 pr-4 py-2.5 bg-white border border-green-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
            />
          </div>
        </div>

        {displayed.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <span className="text-5xl block mb-3">🔍</span>
            <p className="font-semibold">No dishes found for "{search}"</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {displayed.map(item => (
              <MenuCard
                key={item.id}
                item={item}
                onAdd={onAdd}
                qty={getQty(item.id)}
                onRemove={() => {/* handled in parent */}}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── CART SIDEBAR ──────────────────────────────────────────────────────────
function CartSidebar({ isOpen, onClose, cart, onRemove, onPayment }) {
  const subtotal = cart.reduce((s, i) => s + i.price, 0);
  const delivery = subtotal >= 2000 ? 0 : 200;
  const total = subtotal + delivery;

  // Group cart items by id for display
  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, qty: 0, cartIds: [] };
    acc[item.id].qty += 1;
    acc[item.id].cartIds.push(item.cartId);
    return acc;
  }, {});

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} />}

      {/* Drawer */}
      <div className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl flex flex-col
        transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        max-sm:max-w-full`}>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-green-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="font-black text-lg text-gray-900">Your Cart</span>
            {cart.length > 0 && (
              <span className="bg-green-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </div>
          <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-5 py-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-3">
              <ShoppingCart size={48} className="opacity-20" />
              <p className="font-semibold text-sm">Your cart is empty</p>
              <p className="text-xs text-center">Add some delicious items from the menu!</p>
              <button onClick={onClose}
                className="mt-2 text-green-600 text-sm font-semibold hover:text-green-800 flex items-center gap-1">
                Browse menu <ChevronRight size={14} />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {Object.values(grouped).map(item => (
                <div key={item.id} className="flex items-center gap-3 bg-green-50 border border-green-100 rounded-2xl p-3">
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-gray-900 truncate">{item.name}</p>
                    <p className="text-xs text-gray-500 mt-0.5">₦{item.price.toLocaleString()} × {item.qty}</p>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="font-bold text-sm text-green-700">₦{(item.price * item.qty).toLocaleString()}</span>
                    <button onClick={() => onRemove(item.cartIds[item.cartIds.length - 1])}
                      className="p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary + Checkout */}
        {cart.length > 0 && (
          <div className="px-5 py-4 border-t border-green-100 flex-shrink-0 bg-white space-y-3">
            {/* Free delivery progress */}
            {subtotal < 2000 && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-3">
                <p className="text-xs text-amber-700 font-semibold mb-1.5">
                  Add ₦{(2000 - subtotal).toLocaleString()} more for free delivery!
                </p>
                <div className="w-full bg-amber-100 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-amber-400 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${Math.min((subtotal / 2000) * 100, 100)}%` }} />
                </div>
              </div>
            )}
            {subtotal >= 2000 && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-center gap-2">
                <Check size={14} className="text-green-600 flex-shrink-0" />
                <p className="text-xs text-green-700 font-semibold">You've unlocked free delivery! 🎉</p>
              </div>
            )}

            <div className="space-y-1.5">
              <div className="flex justify-between text-sm text-gray-500"><span>Subtotal</span><span>₦{subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Delivery</span>
                <span className={delivery === 0 ? 'text-green-600 font-semibold' : ''}>{delivery === 0 ? 'Free' : `₦${delivery}`}</span>
              </div>
            </div>
            <div className="flex justify-between font-black text-base text-gray-900 pt-1 border-t border-green-100">
              <span>Total</span>
              <span className="text-green-600">₦{total.toLocaleString()}</span>
            </div>

            <button onClick={onPayment}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] text-white font-bold py-3.5 rounded-2xl text-sm transition-all shadow-lg shadow-green-200 flex items-center justify-center gap-2">
              Pay with Paystack · ₦{total.toLocaleString()}
            </button>
            <p className="text-center text-[11px] text-gray-400">Secured by Paystack · SSL encrypted</p>
          </div>
        )}
      </div>
    </>
  );
}

// ─── FOOTER ────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-400 pt-14 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center">
                <Utensils size={16} className="text-white" />
              </div>
              <span className="font-black text-white text-lg">plasu</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">Fast, fresh campus food delivery. Built for students, loved by everyone.</p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Facebook].map((Icon, i) => (
                <button key={i} className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors">
                  <Icon size={14} className="text-white" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Menu', 'About Us', 'Restaurants', 'Track Order'].map(l => (
                <li key={l}><a href="#" className="hover:text-green-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'].map(l => (
                <li key={l}><a href="#" className="hover:text-green-400 transition-colors">{l}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>University Campus, Main Gate Road</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-green-500 flex-shrink-0" />
                <span>+234 800 000 0000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-green-500 flex-shrink-0" />
                <span>hello@plasu.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs">
          <p>© {new Date().getFullYear()} plasu. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Payments secured by</span>
            <span className="font-bold text-white bg-green-600 px-2 py-0.5 rounded-md text-[11px]">Paystack</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── AUTH MODAL ────────────────────────────────────────────────────────────
function AuthModal({ mode, onClose, onSwitch, onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', password: '', matric: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const isLogin = mode === 'login';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Basic validation
    if (!form.email || !form.password) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!isLogin && (!form.name || !form.matric)) {
      setError('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    // Simulate API call — replace with your real auth logic
    setTimeout(() => {
      setLoading(false);
      onSuccess(); // redirect to /student
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-md bg-white sm:rounded-3xl rounded-t-3xl shadow-2xl overflow-hidden">
        {/* Top accent bar */}
        <div className="h-1 w-full bg-gradient-to-r from-green-400 via-green-600 to-emerald-500" />

        <div className="px-6 pt-6 pb-8">
          {/* Handle (mobile) */}
          <div className="sm:hidden w-10 h-1 bg-gray-200 rounded-full mx-auto mb-5" />

          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
                  <Utensils size={13} className="text-white" />
                </div>
                <span className="font-black text-green-700 text-base">plasu</span>
              </div>
              <h2 className="font-black text-2xl text-gray-900">{isLogin ? 'Welcome back' : 'Create account'}</h2>
              <p className="text-sm text-gray-500 mt-0.5">
                {isLogin ? 'Sign in to order your favourite meals' : 'Join thousands of campus foodies'}
              </p>
            </div>
            <button onClick={onClose} className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-colors flex-shrink-0">
              <X size={18} />
            </button>
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold px-3 py-2.5 rounded-xl mb-4">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            {!isLogin && (
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Full Name</label>
                <input
                  type="text" placeholder="e.g. Tolu Adeyemi"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>
            )}
            {!isLogin && (
              <div>
                <label className="text-xs font-semibold text-gray-600 mb-1 block">Matric / Staff ID</label>
                <input
                  type="text" placeholder="e.g. CSC/2021/045"
                  value={form.matric} onChange={e => setForm(f => ({ ...f, matric: e.target.value }))}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all placeholder-gray-400"
                />
              </div>
            )}
            <div>
              <label className="text-xs font-semibold text-gray-600 mb-1 block">Email Address</label>
              <input
                type="email" placeholder="you@university.edu.ng"
                value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-xs font-semibold text-gray-600">Password</label>
                {isLogin && <button type="button" className="text-xs text-green-600 font-semibold hover:text-green-800">Forgot password?</button>}
              </div>
              <input
                type="password" placeholder="••••••••"
                value={form.password} onChange={e => setForm(f => ({ ...f, password: e.target.value }))}
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-transparent transition-all placeholder-gray-400"
              />
            </div>

            {!isLogin && (
              <div className="flex items-start gap-2.5 pt-1">
                <input type="checkbox" id="terms" className="mt-0.5 accent-green-600 w-4 h-4 flex-shrink-0" />
                <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed">
                  I agree to the <span className="text-green-600 font-semibold cursor-pointer">Terms of Service</span> and <span className="text-green-600 font-semibold cursor-pointer">Privacy Policy</span>
                </label>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-600 hover:bg-green-700 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold py-3 rounded-2xl text-sm transition-all shadow-lg shadow-green-200 mt-1 flex items-center justify-center gap-2">
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                  </svg>
                  {isLogin ? 'Signing in…' : 'Creating account…'}
                </>
              ) : (
                isLogin ? 'Sign In' : 'Create Account'
              )}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 py-1">
              <div className="flex-1 h-px bg-gray-100" />
              <span className="text-xs text-gray-400">or continue with</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>

            {/* Google */}
            <button
              type="button"
              onClick={onSuccess}
              className="w-full flex items-center justify-center gap-2.5 border border-gray-200 text-gray-700 font-semibold text-sm py-2.5 rounded-2xl hover:bg-gray-50 transition-all">
              <svg viewBox="0 0 24 24" className="w-4 h-4" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </button>
          </form>

          {/* Switch mode */}
          <p className="text-center text-sm text-gray-500 mt-5">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button type="button" onClick={onSwitch} className="text-green-600 font-bold hover:text-green-800 transition-colors">
              {isLogin ? 'Register' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── HOME PAGE ──────────────────────────────────────────────────────────────
export default function HomePage() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [authModal, setAuthModal] = useState(null); // 'login' | 'register' | null

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    setCart(prev => [...prev, { ...item, cartId: Date.now() + Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(prev => prev.filter(item => item.cartId !== cartId));
  };

  const handlePayment = () => {
    const subtotal = cart.reduce((total, item) => total + item.price, 0);
    const delivery = subtotal >= 2000 ? 0 : 200;
    const total = subtotal + delivery;

    if (typeof window.PaystackPop === 'undefined') {
      alert('Paystack not loaded. Add the Paystack script to your index.html:\n<script src="https://js.paystack.co/v1/inline.js"></script>');
      return;
    }

    const paystack = new window.PaystackPop();
    paystack.newTransaction({
      key: 'pk_test_xxxxxxxxxxxxx', // Replace with your Paystack public key
      email: 'customer@email.com',  // Collect from user in production
      amount: total * 100,           // Paystack uses kobo
      currency: 'NGN',
      metadata: {
        custom_fields: [{ display_name: 'Order Items', variable_name: 'items', value: cart.map(i => i.name).join(', ') }]
      },
      callback: (response) => {
        setCart([]);
        setShowCart(false);
        alert(`🎉 Payment successful!\nReference: ${response.reference}\nYour order is being prepared.`);
      },
      onClose: () => {
        // user closed the payment modal — no action needed
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white font-sans">
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} setAuthModal={setAuthModal} />

      <Hero />
      <Features />

      {/* Menu Section */}
      <section id="menu" className="py-10 px-4 sm:px-6 lg:px-8 bg-green-50/40">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <div>
              <p className="text-xs font-bold text-green-600 uppercase tracking-widest mb-1">Today's Selection</p>
              <h2 className="font-black text-2xl sm:text-3xl text-gray-900">What's on the menu?</h2>
            </div>
            <div className="relative sm:w-64">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                placeholder="Search dishes..."
                className="w-full pl-9 pr-4 py-2.5 bg-white border border-green-100 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-300 shadow-sm"
              />
            </div>
          </div>

          {/* Category filter */}
          <div className="mb-6">
            <CategoryFilter selected={selectedCategory} onChange={setSelectedCategory} />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredItems.map(item => {
              const qty = cart.filter(c => c.id === item.id).length;
              const tagColors = {
                Bestseller: 'bg-amber-100 text-amber-700 border-amber-200',
                Popular: 'bg-rose-100 text-rose-700 border-rose-200',
                New: 'bg-blue-100 text-blue-700 border-blue-200',
                Healthy: 'bg-green-100 text-green-700 border-green-200',
                Fast: 'bg-violet-100 text-violet-700 border-violet-200',
              };
              return (
                <div key={item.id} className="bg-white border border-green-100 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-100 transition-all group">
                  <div className="h-28 sm:h-32 flex items-center justify-center text-5xl relative bg-gradient-to-br from-green-50 to-emerald-50">
                    {item.emoji}
                    {item.tag && (
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full border ${tagColors[item.tag]}`}>
                        {item.tag}
                      </span>
                    )}
                    <button className="absolute top-2 right-2 w-6 h-6 bg-white/80 rounded-full flex items-center justify-center text-gray-400 hover:text-rose-500 transition-colors opacity-0 group-hover:opacity-100">
                      <Heart size={11} />
                    </button>
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-xs sm:text-sm text-gray-900 leading-tight mb-0.5">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 mb-1">{item.restaurant}</p>
                    <p className="text-[11px] text-gray-500 leading-relaxed mb-2.5 line-clamp-2 hidden sm:block">{item.desc}</p>
                    <div className="flex items-center gap-2 text-[10px] text-gray-400 mb-2.5">
                      <span className="flex items-center gap-0.5"><Star size={9} fill="#fbbf24" className="text-amber-400" />{item.rating}</span>
                      <span className="flex items-center gap-0.5"><Clock size={9} />{item.time}</span>
                    </div>
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-black text-sm text-green-600">₦{item.price.toLocaleString()}</span>
                      {qty > 0 ? (
                        <div className="flex items-center gap-1.5">
                          <button onClick={() => {
                            const last = [...cart].reverse().find(c => c.id === item.id);
                            if (last) removeFromCart(last.cartId);
                          }} className="w-6 h-6 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                            <Minus size={10} />
                          </button>
                          <span className="font-bold text-xs text-gray-900 w-3.5 text-center">{qty}</span>
                          <button onClick={() => addToCart(item)} className="w-6 h-6 flex items-center justify-center rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors">
                            <Plus size={10} />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => addToCart(item)}
                          className="flex items-center gap-0.5 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold text-[11px] px-2.5 py-1.5 rounded-xl transition-all">
                          <Plus size={10} /> Add
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CartSidebar
        isOpen={showCart}
        onClose={() => setShowCart(false)}
        cart={cart}
        onRemove={removeFromCart}
        onPayment={handlePayment}
      />

      {/* Mobile floating cart button */}
      {cart.length > 0 && (
        <div className="md:hidden fixed bottom-5 left-4 right-4 z-30">
          <button onClick={() => setShowCart(true)}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 px-5 rounded-2xl flex justify-between items-center shadow-xl shadow-green-300/50 text-sm active:scale-[0.98] transition-all">
            <span className="bg-white/20 rounded-lg px-2 py-0.5 text-xs font-bold">{cart.length} item{cart.length > 1 ? 's' : ''}</span>
            <span className="flex items-center gap-1.5"><ShoppingCart size={16} /> View Cart</span>
            <span>₦{(cart.reduce((s, i) => s + i.price, 0) + (cart.reduce((s,i)=>s+i.price,0) >= 2000 ? 0 : 200)).toLocaleString()}</span>
          </button>
        </div>
      )}

      <Footer />

      {/* Auth Modal */}
      {authModal && (
        <AuthModal
          mode={authModal}
          onClose={() => setAuthModal(null)}
          onSwitch={() => setAuthModal(authModal === 'login' ? 'register' : 'login')}
          onSuccess={() => { window.location.href = '/student'; }}
        />
      )}
    </div>
  );
}