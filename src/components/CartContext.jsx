import React, { createContext, useState, useContext, useMemo } from 'react';

// Create Context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Provider Component
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => [...prevCart, { ...item, cartId: Date.now() }]);
  };

  // Remove item from cart
  const removeFromCart = (cartId) => {
    setCart(prevCart => prevCart.filter(item => item.cartId !== cartId));
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
  };

  // Get total price
  const getTotalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + item.price, 0);
  }, [cart]);

  // Get total items
  const getTotalItems = useMemo(() => {
    return cart.length;
  }, [cart]);

  // Toggle cart sidebar
  const toggleCart = () => {
    setShowCart(prev => !prev);
  };

  // Open cart
  const openCart = () => {
    setShowCart(true);
  };

  // Close cart
  const closeCart = () => {
    setShowCart(false);
  };

  // Paystack payment handler
  const handlePayment = () => {
    // Initialize Paystack payment
    const paystack = new window.PaystackPop();
    paystack.newTransaction({
      key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY || 'pk_test_xxxxxxxxxxxxx',
      email: 'customer@email.com', // This should come from user context in production
      amount: getTotalPrice * 100, // Paystack expects amount in kobo
      currency: 'NGN',
      callback: (response) => {
        // Handle successful payment
        alert(`Payment successful! Reference: ${response.reference}`);
        clearCart();
        closeCart();
        // You can also send this reference to your backend
      },
      onClose: () => {
        alert('Payment window closed');
      }
    });
  };

  const value = {
    cart,
    showCart,
    addToCart,
    removeFromCart,
    clearCart,
    getTotalPrice,
    getTotalItems,
    toggleCart,
    openCart,
    closeCart,
    handlePayment
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};