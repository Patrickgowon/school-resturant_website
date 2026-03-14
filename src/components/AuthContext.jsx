import React, { createContext, useState, useContext, useEffect } from 'react';

// Create Context
const AuthContext = createContext();

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Mock user data for demonstration
const MOCK_USERS = {
  student: {
    id: 1,
    name: 'John Student',
    email: 'student@uni.edu',
    password: 'password123',
    userType: 'student',
    matricNumber: 'CS2023001',
    department: 'Computer Science',
    level: '300 Level',
    profileImage: '/api/placeholder/100/100',
    phone: '+234 801 234 5678',
    address: 'Hall A, Room 204, Campus Main Gate',
    walletBalance: 12500,
    rewardPoints: 450
  },
  lecturer: {
    id: 2,
    name: 'Dr. Smith',
    email: 'lecturer@uni.edu',
    password: 'password123',
    userType: 'lecturer',
    staffId: 'LEC2023001',
    department: 'Computer Science',
    designation: 'Senior Lecturer',
    profileImage: '/api/placeholder/100/100',
    phone: '+234 802 345 6789',
    office: 'Office 204, CS Department',
    walletBalance: 25000,
    staffDiscount: 15
  }
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check for saved user on initial load
  useEffect(() => {
    const savedUser = localStorage.getItem('plasu_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('plasu_user');
      }
    }
    setIsInitialized(true);
  }, []);

  // Login function
  const login = async (email, password, userType) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - In production, this would be a real API call
      const mockUser = MOCK_USERS[userType];
      
      if (mockUser && mockUser.email === email && mockUser.password === password) {
        // Remove password before storing
        const { password: _, ...userWithoutPassword } = mockUser;
        setUser(userWithoutPassword);
        
        // Save to localStorage for persistence
        localStorage.setItem('plasu_user', JSON.stringify(userWithoutPassword));
        
        return { success: true, user: userWithoutPassword };
      } else {
        setError('Invalid email or password');
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (err) {
      setError('Login failed. Please try again.');
      return { success: false, error: 'Login failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In production, this would create a new user in your database
      const newUser = {
        id: Date.now(),
        ...userData,
        walletBalance: 0,
        rewardPoints: 0
      };
      
      // For demo purposes, we'll just log the user in
      setUser(newUser);
      localStorage.setItem('plasu_user', JSON.stringify(newUser));
      
      return { success: true, user: newUser };
    } catch (err) {
      setError('Registration failed. Please try again.');
      return { success: false, error: 'Registration failed. Please try again.' };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem('plasu_user');
  };

  // Update user profile
  const updateProfile = async (updatedData) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { ...user, ...updatedData };
      setUser(updatedUser);
      localStorage.setItem('plasu_user', JSON.stringify(updatedUser));
      
      return { success: true, user: updatedUser };
    } catch (err) {
      setError('Profile update failed');
      return { success: false, error: 'Profile update failed' };
    } finally {
      setLoading(false);
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // In production, verify current password with backend
      return { success: true };
    } catch (err) {
      setError('Password change failed');
      return { success: false, error: 'Password change failed' };
    } finally {
      setLoading(false);
    }
  };

  // Fund wallet
  const fundWallet = async (amount) => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      const updatedUser = { 
        ...user, 
        walletBalance: (user.walletBalance || 0) + amount 
      };
      setUser(updatedUser);
      localStorage.setItem('plasu_user', JSON.stringify(updatedUser));
      
      return { success: true, newBalance: updatedUser.walletBalance };
    } catch (err) {
      setError('Failed to fund wallet');
      return { success: false, error: 'Failed to fund wallet' };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    // State
    user,
    loading,
    error,
    isInitialized,
    isAuthenticated: !!user,
    
    // User type checks
    isStudent: user?.userType === 'student',
    isLecturer: user?.userType === 'lecturer',
    
    // Auth methods
    login,
    register,
    logout,
    updateProfile,
    changePassword,
    fundWallet,
    
    // Helper methods
    hasPermission: (requiredType) => {
      if (!user) return false;
      if (!requiredType) return true;
      return user.userType === requiredType;
    },
    
    clearError: () => setError(null)
  };

  // Don't render children until we've checked localStorage
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};