import React, { useState, useEffect } from 'react';
import {
  User, ShoppingBag, TrendingUp, Clock, Star, Users, LogOut,
  BarChart3, MapPin, Coffee, Briefcase, Award, FileText,
  Bell, Check, ChevronLeft, Plus, Minus, X,
  Zap, Leaf, Flame, Search, CreditCard, Wallet
} from 'lucide-react';

const userData = {
  name: 'Dr. Emeka Okafor',
  staffId: 'STAFF/CS/007',
  department: 'Computer Science',
  email: 'e.okafor@university.edu.ng',
  office: 'Office 204, CS Block',
};

const lecturerStats = {
  totalOrders: 42,
  totalSpent: '126,500',
  averageOrderValue: '3,012',
  frequentItems: ['Jollof Rice + Chicken', 'Egusi Soup + Fufu', 'Pepper Soup', 'Fried Rice + Fish'],
  favoriteRestaurant: 'Mama Titi Kitchen',
};

const recentOrders = [
  { id: '#ORD-1041', restaurant: 'Mama Titi Kitchen', items: ['Jollof Rice + Chicken', 'Pepper Soup'], total: 3000, status: 'delivered', date: 'Today, 1:15 PM', deliveryTo: 'Office 204', rating: 5 },
  { id: '#ORD-1039', restaurant: 'Green Bowl', items: ['Protein Bowl', 'Fruit Smoothie'], total: 3300, status: 'on-the-way', date: 'Today, 11:40 AM', deliveryTo: 'Staff Lounge' },
  { id: '#ORD-1034', restaurant: 'Campus Bites', items: ['Beef Burger', 'Cappuccino'], total: 3000, status: 'delivered', date: 'Yesterday', deliveryTo: 'Office 204', rating: 4 },
];

const departmentOrders = [
  { department: 'Computer Science', orderCount: 14, totalSpent: '42,800', topItem: 'Jollof Rice + Chicken' },
  { department: 'Engineering', orderCount: 11, totalSpent: '38,200', topItem: 'Beef Burger' },
  { department: 'Business Admin', orderCount: 8, totalSpent: '21,400', topItem: 'Protein Bowl' },
  { department: 'Medicine', orderCount: 4, totalSpent: '6,600', topItem: 'Grilled Chicken Salad' },
];

const mealSuggestions = [
  { id: 1, name: 'Executive Jollof Combo', restaurant: 'Mama Titi Kitchen', price: 2800, description: 'Premium smoky jollof with grilled chicken, fried plantain, and coleslaw.', tag: 'Staff Pick', color: '#FF6B35', emoji: '🍲' },
  { id: 2, name: 'Faculty Protein Bowl', restaurant: 'Green Bowl', price: 2600, description: 'Quinoa, grilled chicken, avocado, and seasonal greens with lemon dressing.', tag: 'Healthy', color: '#6BCB77', emoji: '🥗' },
  { id: 3, name: 'Office Shawarma Pack', restaurant: 'Campus Bites', price: 2200, description: 'Beef shawarma wrap + fries + soft drink. Perfect for desk lunch.', tag: 'Popular', color: '#4ECDC4', emoji: '🌯' },
  { id: 4, name: 'Afternoon Tea Set', restaurant: 'Sip & Snack', price: 1800, description: 'Cappuccino + 2 croissants + chin chin. Great for office meetings.', tag: 'Café', color: '#A78BFA', emoji: '☕' },
];

const statusStyles = {
  delivered: { badge: 'bg-green-100 text-green-800', label: 'Delivered' },
  'on-the-way': { badge: 'bg-blue-100 text-blue-800', label: 'On the way' },
  preparing: { badge: 'bg-yellow-100 text-yellow-800', label: 'Preparing' },
};

const tagIcon = {
  'Staff Pick': <Star size={10} />,
  Healthy: <Leaf size={10} />,
  Popular: <Flame size={10} />,
  Café: <Coffee size={10} />,
};

const tabs = [
  { id: 'overview', label: 'Overview', icon: TrendingUp },
  { id: 'orders', label: 'My Orders', icon: ShoppingBag },
  { id: 'department', label: 'Department', icon: Users },
  { id: 'suggestions', label: 'Meal Menu', icon: Coffee },
  { id: 'profile', label: 'Profile', icon: User },
];

export default function LecturerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [orderCart, setOrderCart] = useState({});
  const [cartOpen, setCartOpen] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const cartCount = Object.values(orderCart).reduce((a, b) => a + b, 0);
  const cartTotal = Object.entries(orderCart).reduce((sum, [id, qty]) => {
    const meal = mealSuggestions.find(m => m.id === +id);
    return meal ? sum + meal.price * qty : sum;
  }, 0);
  const discountedTotal = Math.round(cartTotal * 0.85);

  const addToCart = (id) => setOrderCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = (id) => setOrderCart(c => {
    const n = { ...c };
    if (n[id] > 1) n[id]--; else delete n[id];
    return n;
  });
  const placeOrder = () => {
    setOrderPlaced(true); setOrderCart({}); setCartOpen(false);
    setTimeout(() => setOrderPlaced(false), 3500);
  };

  return (
    <div className="min-h-screen bg-green-50 text-gray-900 font-sans pb-16 md:pb-0">

      {/* Toast */}
      {orderPlaced && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-green-800 text-green-100 px-5 py-3 rounded-2xl flex items-center gap-2 text-sm font-semibold shadow-xl animate-bounce whitespace-nowrap">
          <Check size={16} /> Order placed with 15% staff discount!
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/40" onClick={() => setCartOpen(false)} />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col overflow-hidden
                          max-sm:top-auto max-sm:right-0 max-sm:bottom-0 max-sm:left-0 max-sm:rounded-t-3xl max-sm:max-h-[88vh]">
            <div className="sm:hidden w-10 h-1 bg-green-200 rounded-full mx-auto mt-3 mb-1 flex-shrink-0" />
            <div className="flex items-center justify-between px-5 py-4 border-b border-green-100 flex-shrink-0">
              <span className="font-bold text-green-800 text-lg">Order Cart</span>
              <button onClick={() => setCartOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-3">
              {cartCount === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                  <ShoppingBag size={44} className="mb-3 opacity-25" />
                  <p className="text-sm">No items yet</p>
                  <button onClick={() => { setCartOpen(false); setActiveTab('suggestions'); }}
                    className="mt-3 text-green-600 text-sm font-semibold hover:text-green-700">
                    Browse meal menu →
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  {Object.entries(orderCart).map(([id, qty]) => {
                    const meal = mealSuggestions.find(m => m.id === +id);
                    if (!meal) return null;
                    return (
                      <div key={id} className="bg-green-50 border border-green-200 rounded-2xl p-3">
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <div className="flex-1">
                            <p className="text-sm font-semibold text-green-800 leading-tight">{meal.name}</p>
                            <p className="text-xs text-gray-500 mt-0.5">{meal.restaurant}</p>
                          </div>
                          <span className="text-green-600 font-bold text-sm flex-shrink-0">
                            ₦{(meal.price * qty).toLocaleString()}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => removeFromCart(+id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors flex-shrink-0">
                            <Minus size={12} />
                          </button>
                          <span className="font-bold text-gray-900 w-5 text-center">{qty}</span>
                          <button onClick={() => addToCart(+id)}
                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors flex-shrink-0">
                            <Plus size={12} />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {cartCount > 0 && (
              <div className="px-5 py-4 border-t border-green-100 flex-shrink-0 bg-white">
                <div className="flex justify-between text-sm text-gray-500 mb-1"><span>Subtotal</span><span>₦{cartTotal.toLocaleString()}</span></div>
                <div className="flex justify-between text-sm text-green-600 font-semibold mb-1">
                  <span>Staff discount (15%)</span>
                  <span>-₦{(cartTotal - discountedTotal).toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mb-3"><span>Delivery</span><span>Free to office</span></div>
                <div className="flex justify-between font-bold text-base text-gray-900 mb-4">
                  <span>Total</span>
                  <span className="text-green-600">₦{discountedTotal.toLocaleString()}</span>
                </div>
                <button onClick={placeOrder}
                  className="w-full bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold py-3.5 rounded-2xl text-sm transition-all">
                  Place Order · ₦{discountedTotal.toLocaleString()}
                </button>
                <p className="text-center text-xs text-gray-400 mt-2">Delivers to {userData.office}</p>
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
              {cartCount > 0 && <span className="hidden sm:inline">₦{discountedTotal.toLocaleString()}</span>}
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 bg-gradient-to-br from-green-700 to-green-900 rounded-xl flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0">
              {userData.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('')}
            </div>
          </div>
        </div>
      </nav>

      {/* Desktop Tab Bar */}
      <div className="hidden md:block bg-white border-b border-green-50 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto flex gap-1 overflow-x-auto">
          {tabs.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setActiveTab(t.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-semibold border-b-2 rounded-t-lg transition-all whitespace-nowrap
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
          <p className="text-xs text-gray-500 mb-1">Faculty Portal 👨‍🏫</p>
          <h1 className="font-black text-xl sm:text-2xl lg:text-3xl text-gray-900 leading-tight">
            Welcome, {userData.name}
          </h1>
          <p className="text-xs text-gray-400 mt-1">{userData.staffId} · {userData.department}</p>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Total Orders', value: lecturerStats.totalOrders, color: 'text-green-600', bg: 'bg-green-50', icon: <ShoppingBag size={14} className="text-green-600" /> },
            { label: 'Total Spent', value: `₦${lecturerStats.totalSpent}`, color: 'text-teal-600', bg: 'bg-teal-50', icon: <TrendingUp size={14} className="text-teal-600" /> },
            { label: 'Avg. Order', value: `₦${lecturerStats.averageOrderValue}`, color: 'text-violet-600', bg: 'bg-violet-50', icon: <BarChart3 size={14} className="text-violet-600" /> },
            { label: 'Staff Discount', value: '15%', color: 'text-amber-600', bg: 'bg-amber-50', icon: <Award size={14} className="text-amber-600" /> },
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

        {/* ── OVERVIEW TAB ── */}
        {activeTab === 'overview' && (
          <div className="space-y-4">

            {/* Active order banner */}
            {recentOrders.find(o => o.status === 'on-the-way') && (
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-300 rounded-2xl p-4 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-green-800">Order on the way to your office</p>
                    <p className="text-xs text-green-600 mt-0.5">
                      {recentOrders.find(o => o.status === 'on-the-way')?.restaurant} · Est. 15 min
                    </p>
                  </div>
                </div>
                <button onClick={() => setActiveTab('orders')} className="text-xs font-bold text-green-700 hover:text-green-900 flex-shrink-0">
                  Track →
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Favourite Items */}
              <div className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 shadow-sm">
                <h2 className="font-black text-base text-gray-900 mb-4">Favourite Items</h2>
                <div className="space-y-3">
                  {lecturerStats.frequentItems.map((item, i) => (
                    <div key={i} className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm bg-green-100">
                          {['🍲','🥘','🍜','🍚'][i]}
                        </div>
                        <span className="text-sm text-gray-800">{item}</span>
                      </div>
                      <span className="text-[11px] bg-green-50 text-green-700 border border-green-200 rounded-full px-2 py-0.5 font-semibold flex-shrink-0">
                        {5 - i}x
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-green-50">
                  <p className="text-xs text-gray-500">Fav restaurant: <span className="font-bold text-green-600">{lecturerStats.favoriteRestaurant}</span></p>
                </div>
              </div>

              {/* Order Summary */}
              <div className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 shadow-sm">
                <h2 className="font-black text-base text-gray-900 mb-4">Order Summary</h2>
                <div className="space-y-4">
                  {[{ label: 'This Month', count: 24, pct: 70 }, { label: 'Last Month', count: 18, pct: 50 }].map((m, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1.5">
                        <span className="text-gray-500">{m.label}</span>
                        <span className="font-semibold text-gray-900">{m.count} orders</span>
                      </div>
                      <div className="w-full bg-green-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-gradient-to-r from-green-600 to-emerald-400 h-2 rounded-full transition-all duration-700"
                          style={{ width: `${m.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-green-50">
                  <p className="text-sm font-bold text-green-600">↑ 33% increase from last month</p>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-black text-base text-gray-900">Recent Orders</h2>
                <button onClick={() => setActiveTab('orders')} className="text-xs text-green-600 font-semibold hover:text-green-800">View all →</button>
              </div>
              <div className="space-y-3">
                {recentOrders.map(order => {
                  const s = statusStyles[order.status] || statusStyles.preparing;
                  return (
                    <div key={order.id} className="border border-green-50 rounded-xl p-3 sm:p-4">
                      <div className="flex justify-between items-start gap-2 mb-2">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1 flex-wrap">
                            <span className="font-bold text-sm text-gray-900">{order.restaurant}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.label}</span>
                          </div>
                          <p className="text-xs text-gray-400 truncate">{order.items.join(' · ')}</p>
                        </div>
                        <span className="text-green-600 font-bold text-sm flex-shrink-0">₦{order.total.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center pt-2 border-t border-green-50 gap-2 flex-wrap">
                        <span className="text-[11px] text-gray-400 flex items-center gap-1">
                          <MapPin size={10} /> {order.deliveryTo} · {order.date}
                        </span>
                        {order.status === 'delivered'
                          ? <div className="flex items-center gap-1">
                              {order.rating && Array.from({ length: 5 }).map((_, i) => <Star key={i} size={10} fill={i < order.rating ? '#16a34a' : 'none'} stroke="#16a34a" />)}
                              <button className="text-xs text-green-600 font-semibold ml-1">Reorder</button>
                            </div>
                          : <button className="text-xs text-green-600 font-semibold">Track →</button>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Dept Snapshot */}
            <div className="bg-white border border-green-100 rounded-2xl p-4 sm:p-5 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-black text-base text-gray-900">Department Snapshot</h2>
                <button onClick={() => setActiveTab('department')} className="text-xs text-green-600 font-semibold hover:text-green-800">Full report →</button>
              </div>
              <div className="divide-y divide-green-50">
                {departmentOrders.map((dept, i) => (
                  <div key={i} className="flex justify-between items-center py-3 gap-3">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{dept.department}</p>
                      <p className="text-xs text-gray-400 mt-0.5">Top: {dept.topItem}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-sm font-semibold text-gray-900">{dept.orderCount} orders</p>
                      <p className="text-xs text-green-600">₦{dept.totalSpent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── MY ORDERS TAB ── */}
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
                      <span className="text-[11px] text-gray-400 flex items-center gap-1">
                        <MapPin size={10} /> {order.deliveryTo} · {order.date}
                      </span>
                      {order.status === 'delivered'
                        ? <div className="flex items-center gap-1.5">
                            {order.rating && Array.from({ length: 5 }).map((_, i) => <Star key={i} size={11} fill={i < order.rating ? '#16a34a' : 'none'} stroke="#16a34a" />)}
                            <button className="text-xs text-green-600 font-semibold ml-1">Reorder</button>
                          </div>
                        : <button className="text-xs text-green-600 font-semibold">Track →</button>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── DEPARTMENT TAB ── */}
        {activeTab === 'department' && (
          <div>
            <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
              <h2 className="font-black text-lg sm:text-xl text-gray-900">Department Analytics</h2>
              <button className="flex items-center gap-2 bg-white border border-green-200 text-green-600 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-green-50 transition-colors">
                <FileText size={14} /> Export Report
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Total Dept. Orders', value: '37', bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
                { label: 'Total Spent', value: '₦109,000', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
                { label: 'Avg per Department', value: '₦36,333', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
              ].map((c, i) => (
                <div key={i} className={`${c.bg} border ${c.border} rounded-2xl p-4 sm:p-5`}>
                  <p className={`text-xs font-semibold ${c.text} mb-2`}>{c.label}</p>
                  <p className={`font-black text-2xl sm:text-3xl ${c.text}`}>{c.value}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-green-100 rounded-2xl overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-green-50 border-b border-green-100">
                      {['Department', 'Orders', 'Total Spent', 'Top Item', 'Action'].map((h, i) => (
                        <th key={i} className={`text-left px-4 py-3 text-[10px] font-bold text-green-800 uppercase tracking-wider whitespace-nowrap ${i === 3 ? 'hidden sm:table-cell' : ''}`}>
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-green-50">
                    {departmentOrders.map((dept, i) => (
                      <tr key={i} className="hover:bg-green-50/50 transition-colors">
                        <td className="px-4 py-3 font-semibold text-gray-900">{dept.department}</td>
                        <td className="px-4 py-3 text-gray-500">{dept.orderCount}</td>
                        <td className="px-4 py-3 text-green-600 font-semibold">₦{dept.totalSpent}</td>
                        <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{dept.topItem}</td>
                        <td className="px-4 py-3">
                          <button className="text-green-600 font-semibold text-xs hover:text-green-800 transition-colors">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* ── MEAL MENU TAB ── */}
        {activeTab === 'suggestions' && (
          <div>
            <div className="flex flex-wrap justify-between items-start gap-3 mb-5">
              <div>
                <h2 className="font-black text-lg sm:text-xl text-gray-900">Recommended for Faculty</h2>
                <p className="text-xs text-gray-400 mt-1">15% staff discount applied automatically at checkout</p>
              </div>
              {cartCount > 0 && (
                <button onClick={() => setCartOpen(true)}
                  className="hidden md:flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors">
                  <ShoppingBag size={14} /> View Cart ({cartCount}) · ₦{discountedTotal.toLocaleString()}
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mealSuggestions.map(meal => (
                <div key={meal.id} className="bg-white border border-green-100 rounded-2xl overflow-hidden hover:-translate-y-0.5 hover:shadow-md transition-all">
                  <div className="h-20 sm:h-24 flex items-center justify-center text-5xl relative"
                    style={{ background: `${meal.color}15` }}>
                    {meal.emoji}
                    <span className="absolute top-2 right-2 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
                      style={{ background: `${meal.color}22`, color: meal.color, border: `1px solid ${meal.color}40` }}>
                      {tagIcon[meal.tag]}{meal.tag}
                    </span>
                    <span className="absolute top-2 left-2 bg-green-800 text-green-100 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      -15%
                    </span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start gap-2 mb-1">
                      <h3 className="font-bold text-sm sm:text-base text-gray-900 leading-tight">{meal.name}</h3>
                      <div className="text-right flex-shrink-0">
                        <p className="text-green-600 font-bold text-sm">₦{Math.round(meal.price * 0.85).toLocaleString()}</p>
                        <p className="text-[10px] text-gray-400 line-through">₦{meal.price.toLocaleString()}</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400 mb-1">{meal.restaurant}</p>
                    <p className="text-xs text-gray-500 leading-relaxed mb-4">{meal.description}</p>
                    <div className="flex items-center gap-2">
                      {orderCart[meal.id] ? (
                        <div className="flex items-center gap-2">
                          <button onClick={() => removeFromCart(meal.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-xl bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                            <Minus size={12} />
                          </button>
                          <span className="font-bold text-gray-900 w-5 text-center">{orderCart[meal.id]}</span>
                          <button onClick={() => addToCart(meal.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-xl bg-green-100 border border-green-300 text-green-700 hover:bg-green-200 transition-colors">
                            <Plus size={12} />
                          </button>
                        </div>
                      ) : (
                        <button onClick={() => addToCart(meal.id)}
                          className="flex-1 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-bold text-xs py-2.5 rounded-xl transition-all">
                          Order Now
                        </button>
                      )}
                      <button className="bg-white border border-green-200 text-green-600 font-semibold text-xs px-3 py-2.5 rounded-xl hover:bg-green-50 transition-colors">
                        Details
                      </button>
                    </div>
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
                  <span>₦{discountedTotal.toLocaleString()}</span>
                </button>
              </div>
            )}
          </div>
        )}

        {/* ── PROFILE TAB ── */}
        {activeTab === 'profile' && (
          <div>
            <div className="bg-white border border-green-100 rounded-2xl p-4 mb-5 flex items-center gap-4 shadow-sm">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-700 to-green-900 rounded-2xl flex items-center justify-center text-white font-black text-xl sm:text-2xl flex-shrink-0">
                {userData.name.replace('Dr. ', '').split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h2 className="font-black text-lg sm:text-xl text-gray-900">{userData.name}</h2>
                <p className="text-xs text-gray-500 mt-0.5">{userData.department} · Faculty</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
              {[
                { label: 'Full Name', value: `Prof. ${userData.name}`, icon: <User size={13} /> },
                { label: 'Email', value: userData.email, icon: <User size={13} /> },
                { label: 'Phone', value: '+234 800 000 0000', icon: <User size={13} /> },
                { label: 'Staff ID', value: userData.staffId, icon: <Briefcase size={13} /> },
                { label: 'Department', value: userData.department, icon: <Users size={13} /> },
                { label: 'Office', value: userData.office, icon: <MapPin size={13} /> },
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

            <div className="flex flex-wrap gap-2 mb-8">
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

            {/* Staff Benefits */}
            <h3 className="font-black text-base text-gray-900 mb-3">Staff Benefits</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { icon: <Award size={20} className="text-green-600" />, title: '15% Staff Discount', desc: 'On all food orders', bg: 'bg-green-50', border: 'border-green-200' },
                { icon: <Clock size={20} className="text-blue-600" />, title: 'Priority Delivery', desc: 'Direct to your office', bg: 'bg-blue-50', border: 'border-blue-200' },
                { icon: <Coffee size={20} className="text-amber-600" />, title: 'Faculty Specials', desc: 'Exclusive meal options', bg: 'bg-amber-50', border: 'border-amber-200' },
              ].map((b, i) => (
                <div key={i} className={`${b.bg} border ${b.border} rounded-2xl p-4 flex items-start gap-3`}>
                  <div className="flex-shrink-0 mt-0.5">{b.icon}</div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900 mb-0.5">{b.title}</p>
                    <p className="text-xs text-gray-500">{b.desc}</p>
                  </div>
                </div>
              ))}
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
            <button key={t.id} onClick={() => setActiveTab(t.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-2 relative transition-colors
                ${isActive ? 'text-green-600 border-t-2 border-green-600' : 'text-gray-400 border-t-2 border-transparent'}`}>
              <Icon size={18} />
              <span className="text-[9px] font-semibold">{t.label}</span>
              {t.id === 'suggestions' && cartCount > 0 && (
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