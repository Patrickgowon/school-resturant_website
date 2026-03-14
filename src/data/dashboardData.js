// Student Dashboard Data
export const studentStats = {
  totalOrders: 24,
  activeOrders: 3,
  walletBalance: 12500,
  rewardPoints: 450,
  favoriteRestaurants: 8,
  totalSpent: 45000,
  averageOrderValue: 1875,
  memberSince: 'September 2023'
};

export const studentOrders = [
  {
    id: 'ORD001',
    orderNumber: 'PLA-2024-001',
    restaurant: 'Tasty Bites',
    restaurantId: 1,
    restaurantImage: '/api/placeholder/50/50',
    items: [
      { name: 'Jollof Rice & Chicken', quantity: 1, price: 2500 },
      { name: 'Plantain', quantity: 1, price: 700 }
    ],
    total: 3200,
    status: 'delivered',
    statusHistory: [
      { status: 'pending', date: '2024-01-15T10:30:00', note: 'Order received' },
      { status: 'preparing', date: '2024-01-15T10:35:00', note: 'Preparing your meal' },
      { status: 'on-the-way', date: '2024-01-15T10:50:00', note: 'Rider assigned' },
      { status: 'delivered', date: '2024-01-15T11:15:00', note: 'Delivered to Hall A' }
    ],
    date: '2024-01-15',
    time: '10:30 AM',
    deliveryAddress: 'Hall A, Room 204',
    paymentMethod: 'Wallet',
    rating: 4.5,
    review: 'Great food! Really enjoyed it.',
    estimatedTime: '45 min'
  },
  {
    id: 'ORD002',
    orderNumber: 'PLA-2024-002',
    restaurant: 'Campus Cafe',
    restaurantId: 2,
    restaurantImage: '/api/placeholder/50/50',
    items: [
      { name: 'Fried Rice & Beef', quantity: 1, price: 2300 },
      { name: 'Chicken Shawarma', quantity: 2, price: 4400 },
      { name: 'Cold Drink', quantity: 2, price: 600 }
    ],
    total: 7300,
    status: 'preparing',
    statusHistory: [
      { status: 'pending', date: '2024-01-16T12:15:00', note: 'Order received' },
      { status: 'preparing', date: '2024-01-16T12:20:00', note: 'Preparing your meal' }
    ],
    date: '2024-01-16',
    time: '12:15 PM',
    deliveryAddress: 'Library Complex',
    paymentMethod: 'Paystack',
    estimatedTime: '20-25 min'
  },
  {
    id: 'ORD003',
    orderNumber: 'PLA-2024-003',
    restaurant: 'Local Delight',
    restaurantId: 3,
    restaurantImage: '/api/placeholder/50/50',
    items: [
      { name: 'Pounded Yam & Egusi', quantity: 1, price: 3000 },
      { name: 'Extra Meat', quantity: 1, price: 1200 }
    ],
    total: 4200,
    status: 'on-the-way',
    statusHistory: [
      { status: 'pending', date: '2024-01-16T13:00:00', note: 'Order received' },
      { status: 'preparing', date: '2024-01-16T13:05:00', note: 'Preparing your meal' },
      { status: 'on-the-way', date: '2024-01-16T13:25:00', note: 'Rider on the way' }
    ],
    date: '2024-01-16',
    time: '1:00 PM',
    deliveryAddress: 'CS Department, Office 204',
    paymentMethod: 'Wallet',
    estimatedTime: '10 min'
  },
  {
    id: 'ORD004',
    orderNumber: 'PLA-2024-004',
    restaurant: 'Student\'s Choice',
    restaurantId: 4,
    restaurantImage: '/api/placeholder/50/50',
    items: [
      { name: 'Beans & Plantain', quantity: 1, price: 1800 },
      { name: 'Yam & Egg Sauce', quantity: 1, price: 2000 }
    ],
    total: 3800,
    status: 'pending',
    statusHistory: [
      { status: 'pending', date: '2024-01-16T14:30:00', note: 'Order received' }
    ],
    date: '2024-01-16',
    time: '2:30 PM',
    deliveryAddress: 'Faculty of Science',
    paymentMethod: 'Paystack',
    estimatedTime: '30-40 min'
  }
];

export const favoriteRestaurants = [
  {
    id: 1,
    name: 'Tasty Bites',
    image: '/api/placeholder/200/150',
    coverImage: '/api/placeholder/400/200',
    cuisine: 'Nigerian',
    rating: 4.5,
    totalRatings: 128,
    deliveryTime: '20-30 min',
    deliveryFee: 200,
    minimumOrder: 1000,
    orders: 150,
    isOpen: true,
    openingHours: '8:00 AM - 10:00 PM',
    location: 'Campus Gate Area',
    phone: '+234 801 234 5678',
    popularItems: ['Jollof Rice', 'Grilled Chicken', 'Plantain'],
    offers: ['Free delivery on orders above ₦3000', '10% off for students']
  },
  {
    id: 2,
    name: 'Campus Cafe',
    image: '/api/placeholder/200/150',
    coverImage: '/api/placeholder/400/200',
    cuisine: 'Continental',
    rating: 4.3,
    totalRatings: 98,
    deliveryTime: '15-25 min',
    deliveryFee: 150,
    minimumOrder: 800,
    orders: 120,
    isOpen: true,
    openingHours: '7:00 AM - 11:00 PM',
    location: 'Student Union Building',
    phone: '+234 802 345 6789',
    popularItems: ['Shawarma', 'Fried Rice', 'Burger'],
    offers: ['Combo meals available', 'Student discount 5%']
  },
  {
    id: 3,
    name: 'Local Delight',
    image: '/api/placeholder/200/150',
    coverImage: '/api/placeholder/400/200',
    cuisine: 'Traditional',
    rating: 4.7,
    totalRatings: 156,
    deliveryTime: '25-35 min',
    deliveryFee: 250,
    minimumOrder: 1500,
    orders: 200,
    isOpen: true,
    openingHours: '9:00 AM - 9:00 PM',
    location: 'Market Road',
    phone: '+234 803 456 7890',
    popularItems: ['Pounded Yam', 'Egusi Soup', 'Amala'],
    offers: ['Buy 1 get 1 free on drinks', 'Weekend specials']
  },
  {
    id: 4,
    name: 'Ocean Basket',
    image: '/api/placeholder/200/150',
    coverImage: '/api/placeholder/400/200',
    cuisine: 'Seafood',
    rating: 4.6,
    totalRatings: 89,
    deliveryTime: '20-30 min',
    deliveryFee: 200,
    minimumOrder: 2000,
    orders: 95,
    isOpen: true,
    openingHours: '10:00 AM - 10:00 PM',
    location: 'Main Market',
    phone: '+234 804 567 8901',
    popularItems: ['Grilled Fish', 'Seafood Rice', 'Pepper Soup'],
    offers: ['Free pepper soup with every order']
  },
  {
    id: 5,
    name: 'Morning Fresh',
    image: '/api/placeholder/200/150',
    coverImage: '/api/placeholder/400/200',
    cuisine: 'Breakfast',
    rating: 4.4,
    totalRatings: 67,
    deliveryTime: '10-20 min',
    deliveryFee: 100,
    minimumOrder: 500,
    orders: 110,
    isOpen: false,
    openingHours: '6:00 AM - 6:00 PM',
    location: 'Faculty of Science',
    phone: '+234 805 678 9012',
    popularItems: ['Yam & Egg', 'Akara & Pap', 'Tea & Bread'],
    offers: ['Breakfast combo specials']
  }
];

export const walletTransactions = [
  {
    id: 1,
    type: 'credit',
    amount: 5000,
    description: 'Wallet Funding',
    date: '2024-01-15',
    time: '09:30 AM',
    status: 'successful',
    reference: 'TRX-2024-001',
    paymentMethod: 'Paystack',
    balance: 12500
  },
  {
    id: 2,
    type: 'debit',
    amount: 3200,
    description: 'Order Payment - ORD001',
    date: '2024-01-15',
    time: '10:35 AM',
    status: 'successful',
    reference: 'TRX-2024-002',
    paymentMethod: 'Wallet',
    balance: 9300
  },
  {
    id: 3,
    type: 'debit',
    amount: 7300,
    description: 'Order Payment - ORD002',
    date: '2024-01-16',
    time: '12:20 PM',
    status: 'pending',
    reference: 'TRX-2024-003',
    paymentMethod: 'Paystack',
    balance: 9300
  },
  {
    id: 4,
    type: 'credit',
    amount: 2000,
    description: 'Referral Bonus',
    date: '2024-01-14',
    time: '02:15 PM',
    status: 'successful',
    reference: 'TRX-2024-004',
    paymentMethod: 'Bonus',
    balance: 11300
  },
  {
    id: 5,
    type: 'debit',
    amount: 4200,
    description: 'Order Payment - ORD003',
    date: '2024-01-13',
    time: '01:30 PM',
    status: 'successful',
    reference: 'TRX-2024-005',
    paymentMethod: 'Wallet',
    balance: 7100
  }
];

export const savedAddresses = [
  {
    id: 1,
    label: 'Hostel',
    address: 'Hall A, Room 204, Campus Main Gate',
    isDefault: true,
    instructions: 'Call when at the gate'
  },
  {
    id: 2,
    label: 'Department',
    address: 'Computer Science Department, Faculty of Science',
    isDefault: false,
    instructions: 'Deliver to office 204'
  },
  {
    id: 3,
    label: 'Library',
    address: 'Main Library Complex',
    isDefault: false,
    instructions: 'Leave at the reception'
  }
];

export const rewardHistory = [
  {
    id: 1,
    action: 'Order placed',
    points: 50,
    date: '2024-01-15',
    description: 'Earned from order ORD001'
  },
  {
    id: 2,
    action: 'Referral',
    points: 200,
    date: '2024-01-14',
    description: 'Referred a friend'
  },
  {
    id: 3,
    action: 'Redeemed',
    points: -100,
    date: '2024-01-13',
    description: 'Redeemed for free delivery'
  },
  {
    id: 4,
    action: 'Review',
    points: 20,
    date: '2024-01-12',
    description: 'Reviewed restaurant'
  }
];

// Lecturer Dashboard Data
export const lecturerStats = {
  totalOrders: 45,
  totalSpent: 125000,
  averageOrderValue: 2778,
  favoriteRestaurant: 'Local Delight',
  frequentItems: ['Pounded Yam', 'Jollof Rice', 'Grilled Chicken'],
  monthlyAverage: 15,
  staffDiscount: 15,
  rewardPoints: 850,
  pendingDeliveries: 2
};

export const lecturerOrders = [
  {
    id: 'LEC001',
    orderNumber: 'LEC-2024-001',
    items: [
      { name: 'Pounded Yam & Egusi', quantity: 1, price: 3000 },
      { name: 'Extra Meat', quantity: 1, price: 1200 }
    ],
    restaurant: 'Local Delight',
    restaurantId: 3,
    total: 4200,
    status: 'delivered',
    date: '2024-01-16',
    time: '12:30 PM',
    deliveryTo: 'Office 204, CS Department',
    paymentMethod: 'Wallet',
    staffDiscount: 630,
    finalAmount: 3570
  },
  {
    id: 'LEC002',
    orderNumber: 'LEC-2024-002',
    items: [
      { name: 'Jollof Rice & Chicken', quantity: 1, price: 2500 },
      { name: 'Salad', quantity: 1, price: 500 },
      { name: 'Cold Drink', quantity: 1, price: 300 }
    ],
    restaurant: 'Tasty Bites',
    restaurantId: 1,
    total: 3300,
    status: 'preparing',
    date: '2024-01-16',
    time: '01:15 PM',
    deliveryTo: 'Staff Room, Engineering',
    paymentMethod: 'Paystack',
    staffDiscount: 495,
    finalAmount: 2805
  },
  {
    id: 'LEC003',
    orderNumber: 'LEC-2024-003',
    items: [
      { name: 'Fried Rice & Fish', quantity: 2, price: 5400 }
    ],
    restaurant: 'Ocean Basket',
    restaurantId: 4,
    total: 5400,
    status: 'on-the-way',
    date: '2024-01-16',
    time: '01:45 PM',
    deliveryTo: 'Faculty Meeting Room',
    paymentMethod: 'Wallet',
    staffDiscount: 810,
    finalAmount: 4590
  }
];

export const departmentOrders = [
  {
    department: 'Computer Science',
    orderCount: 15,
    totalSpent: 45000,
    averageOrder: 3000,
    topItem: 'Jollof Rice',
    popularRestaurant: 'Tasty Bites',
    staff: 8
  },
  {
    department: 'Engineering',
    orderCount: 12,
    totalSpent: 36000,
    averageOrder: 3000,
    topItem: 'Fried Rice',
    popularRestaurant: 'Campus Cafe',
    staff: 6
  },
  {
    department: 'Business Admin',
    orderCount: 10,
    totalSpent: 28000,
    averageOrder: 2800,
    topItem: 'Shawarma',
    popularRestaurant: 'Campus Cafe',
    staff: 5
  },
  {
    department: 'Medicine',
    orderCount: 8,
    totalSpent: 24000,
    averageOrder: 3000,
    topItem: 'Pounded Yam',
    popularRestaurant: 'Local Delight',
    staff: 4
  },
  {
    department: 'Law',
    orderCount: 7,
    totalSpent: 21000,
    averageOrder: 3000,
    topItem: 'Grilled Fish',
    popularRestaurant: 'Ocean Basket',
    staff: 4
  }
];

export const mealSuggestions = [
  {
    id: 1,
    name: 'Faculty Special Rice',
    description: 'Special jollof rice with grilled chicken, vegetables, and extra protein',
    price: 3500,
    discountedPrice: 2975,
    restaurant: 'Local Delight',
    restaurantId: 3,
    image: '/api/placeholder/300/200',
    category: 'Faculty Special',
    preparationTime: '20-25 min',
    rating: 4.8,
    available: true
  },
  {
    id: 2,
    name: 'Staff Meal Deal',
    description: 'Any main meal + drink + fruit + dessert',
    price: 4000,
    discountedPrice: 3400,
    restaurant: 'Campus Cafe',
    restaurantId: 2,
    image: '/api/placeholder/300/200',
    category: 'Combo',
    preparationTime: '15-20 min',
    rating: 4.6,
    available: true
  },
  {
    id: 3,
    name: 'Executive Lunch Box',
    description: 'Assorted rice, grilled fish, plantain, coleslaw, and drink',
    price: 4500,
    discountedPrice: 3825,
    restaurant: 'Tasty Bites',
    restaurantId: 1,
    image: '/api/placeholder/300/200',
    category: 'Executive',
    preparationTime: '25-30 min',
    rating: 4.7,
    available: true
  },
  {
    id: 4,
    name: 'Faculty Meeting Platter',
    description: 'Large platter serving 4-5 people with assorted dishes',
    price: 15000,
    discountedPrice: 12750,
    restaurant: 'Ocean Basket',
    restaurantId: 4,
    image: '/api/placeholder/300/200',
    category: 'Group Order',
    preparationTime: '35-40 min',
    rating: 4.9,
    available: true
  }
];

export const monthlyAnalytics = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  orders: [12, 15, 18, 22, 25, 30],
  spending: [36000, 45000, 54000, 66000, 75000, 90000],
  averageOrderValue: [3000, 3000, 3000, 3000, 3000, 3000]
};

export const staffBenefits = [
  {
    id: 1,
    title: 'Staff Discount',
    description: '15% discount on all orders',
    icon: 'percent',
    usageCount: 45
  },
  {
    id: 2,
    title: 'Priority Delivery',
    description: 'Your orders are prioritized',
    icon: 'clock',
    usageCount: 38
  },
  {
    id: 3,
    title: 'Faculty Specials',
    description: 'Exclusive meals for faculty',
    icon: 'star',
    usageCount: 22
  },
  {
    id: 4,
    title: 'Office Delivery',
    description: 'Direct delivery to your office',
    icon: 'building',
    usageCount: 41
  }
];

// Restaurant Data
export const restaurants = [
  {
    id: 1,
    name: 'Tasty Bites',
    description: 'Delicious Nigerian dishes with a modern twist',
    cuisine: 'Nigerian',
    rating: 4.5,
    totalRatings: 128,
    deliveryTime: '20-30 min',
    deliveryFee: 200,
    minimumOrder: 1000,
    isOpen: true,
    openingHours: '8:00 AM - 10:00 PM',
    location: 'Campus Gate Area',
    phone: '+234 801 234 5678',
    email: 'tastybites@example.com',
    image: '/api/placeholder/400/200',
    menu: [
      {
        category: 'Rice Dishes',
        items: [
          { id: 101, name: 'Jollof Rice & Chicken', price: 2500, popular: true },
          { id: 102, name: 'Fried Rice & Beef', price: 2300, popular: true },
          { id: 103, name: 'Coconut Rice & Fish', price: 2700 }
        ]
      },
      {
        category: 'Swallow',
        items: [
          { id: 104, name: 'Pounded Yam & Egusi', price: 3000 },
          { id: 105, name: 'Amala & Ewedu', price: 2800 }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Campus Cafe',
    description: 'Continental and fast food favorites',
    cuisine: 'Continental',
    rating: 4.3,
    totalRatings: 98,
    deliveryTime: '15-25 min',
    deliveryFee: 150,
    minimumOrder: 800,
    isOpen: true,
    openingHours: '7:00 AM - 11:00 PM',
    location: 'Student Union Building',
    phone: '+234 802 345 6789',
    email: 'campuscafe@example.com',
    image: '/api/placeholder/400/200'
  },
  {
    id: 3,
    name: 'Local Delight',
    description: 'Traditional Nigerian cuisine at its best',
    cuisine: 'Traditional',
    rating: 4.7,
    totalRatings: 156,
    deliveryTime: '25-35 min',
    deliveryFee: 250,
    minimumOrder: 1500,
    isOpen: true,
    openingHours: '9:00 AM - 9:00 PM',
    location: 'Market Road',
    phone: '+234 803 456 7890',
    email: 'localdelight@example.com',
    image: '/api/placeholder/400/200'
  },
  {
    id: 4,
    name: 'Ocean Basket',
    description: 'Fresh seafood prepared to perfection',
    cuisine: 'Seafood',
    rating: 4.6,
    totalRatings: 89,
    deliveryTime: '20-30 min',
    deliveryFee: 200,
    minimumOrder: 2000,
    isOpen: true,
    openingHours: '10:00 AM - 10:00 PM',
    location: 'Main Market',
    phone: '+234 804 567 8901',
    email: 'oceanbasket@example.com',
    image: '/api/placeholder/400/200'
  },
  {
    id: 5,
    name: 'Morning Fresh',
    description: 'Breakfast and light meals',
    cuisine: 'Breakfast',
    rating: 4.4,
    totalRatings: 67,
    deliveryTime: '10-20 min',
    deliveryFee: 100,
    minimumOrder: 500,
    isOpen: false,
    openingHours: '6:00 AM - 6:00 PM',
    location: 'Faculty of Science',
    phone: '+234 805 678 9012',
    email: 'morningfresh@example.com',
    image: '/api/placeholder/400/200'
  }
];

// Notification Data
export const notifications = [
  {
    id: 1,
    type: 'order',
    title: 'Order Confirmed',
    message: 'Your order #ORD001 has been confirmed',
    time: '5 min ago',
    read: false,
    actionUrl: '/student/orders/ORD001'
  },
  {
    id: 2,
    type: 'promo',
    title: 'Weekend Special!',
    message: '20% off on all orders above ₦3000',
    time: '1 hour ago',
    read: false,
    actionUrl: '/offers'
  },
  {
    id: 3,
    type: 'delivery',
    title: 'Order On The Way',
    message: 'Your order #ORD003 is on the way',
    time: '2 hours ago',
    read: true,
    actionUrl: '/student/orders/ORD003'
  }
];

// Coupons and Offers
export const coupons = [
  {
    id: 1,
    code: 'STUDENT10',
    description: '10% off on your next order',
    discount: 10,
    minOrder: 2000,
    expiryDate: '2024-02-01',
    used: false
  },
  {
    id: 2,
    code: 'FIRSTORDER',
    description: 'Free delivery on first order',
    discount: 'Free Delivery',
    minOrder: 1000,
    expiryDate: '2024-03-01',
    used: true
  },
  {
    id: 3,
    code: 'WEEKEND20',
    description: '20% off on weekends',
    discount: 20,
    minOrder: 3000,
    expiryDate: '2024-01-31',
    used: false
  }
];

// Support Messages
export const supportMessages = [
  {
    id: 1,
    user: 'John Student',
    message: 'My order is delayed',
    time: '10 min ago',
    status: 'pending',
    orderId: 'ORD003'
  },
  {
    id: 2,
    user: 'Dr. Smith',
    message: 'Wrong item delivered',
    time: '30 min ago',
    status: 'resolved',
    orderId: 'LEC002'
  }
];

// Export all data
export default {
  studentStats,
  studentOrders,
  favoriteRestaurants,
  walletTransactions,
  savedAddresses,
  rewardHistory,
  lecturerStats,
  lecturerOrders,
  departmentOrders,
  mealSuggestions,
  monthlyAnalytics,
  staffBenefits,
  restaurants,
  notifications,
  coupons,
  supportMessages
};