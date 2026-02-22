// ============================================
// Authentication Context
// Epic: E1 - User & Admin Management
// Owner: IT24100548 (Galagama S.T)
// Purpose: Global auth state management
// ============================================

import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import ChangePasswordModal from "../components/ChangePasswordModal";

const AuthContext = createContext();

// DEMO: Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loading, setLoading] = useState(true);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // DEMO: Configure axios defaults
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      loadUser();
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  // DEMO: Load user profile
  const loadUser = async () => {
    try {
      const res = await axios.get("/api/auth/me");
      setUser(res.data.user);
      // Check if user needs to change password
      if (res.data.user && res.data.user.mustChangePassword) {
        setShowPasswordModal(true);
      }
    } catch (error) {
      console.error("Failed to load user:", error);
      logout();
    } finally {
      setLoading(false);
    }
  };

  // DEMO: Register new customer (E1.1)
  const register = async (userData) => {
    try {
      const res = await axios.post("/api/auth/register", userData);

      if (res.data.success) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        setUser(user);
        if (user.mustChangePassword) {
          setShowPasswordModal(true);
        }
        return { success: true, user };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Registration failed",
      };
    }
  };

  // DEMO: Login (E1.2)
  const login = async (email, password) => {
    try {
      const res = await axios.post("/api/auth/login", {
        email,
        password,
      });

      if (res.data.success) {
        const { token, user } = res.data;
        localStorage.setItem("token", token);
        setToken(token);
        setUser(user);
        if (user.mustChangePassword) {
          setShowPasswordModal(true);
        }
        return { success: true, user };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Login failed",
      };
    }
  };

  // DEMO: Logout
  const logout = async () => {
    try {
      await axios.post("/api/auth/logout");
    } catch (error) {
      console.error("Logout API failed", error);
    } finally {
      localStorage.removeItem("token");
      setToken(null);
      setUser(null);
      setShowPasswordModal(false); // Close modal on logout
      delete axios.defaults.headers.common["Authorization"];
    }
  };

  // DEMO: Update profile (E1.3)
  const updateProfile = async (profileData) => {
    try {
      const res = await axios.put("/api/auth/profile", profileData);

      if (res.data.success) {
        setUser(res.data.user);
        return { success: true };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || "Update failed",
      };
    }
  };

  // DEMO: Handle password change success
  const handlePasswordChangeSuccess = async () => {
    setShowPasswordModal(false);
    // Reload user data to update mustChangePassword flag
    await loadUser();
  };

  const [cartCount, setCartCount] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);

  const refreshCounts = () => {
    // Cart Count from Guest local storage or API
    const token = localStorage.getItem("token");
    if (!token) {
      const guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
        items: [],
      };
      setCartCount(
        guestCart.items.reduce((sum, item) => sum + item.quantity, 0),
      );
    } else {
      // In a real app, you'd fetch this from API. For now, we can check localStorage
      // or just wait for the component adding to cart to trigger a refresh if it's purely local
      // since we don't have a getCart API endpoint called here yet.
      // Let's assume we can fetch it if needed, or just check the last known state.
    }

    // Wishlist Count
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistCount(wishlist.length);
  };

  useEffect(() => {
    refreshCounts();
    // Listen for storage events (if changed in another tab)
    window.addEventListener("storage", refreshCounts);
    return () => window.removeEventListener("storage", refreshCounts);
  }, []);

  const value = {
    user,
    token,
    loading,
    register,
    login,
    logout,
    updateProfile,
    isAuthenticated: !!user,
    showPasswordModal,
    setShowPasswordModal,
    cartCount,
    wishlistCount,
    refreshCounts,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
      {showPasswordModal && (
        <ChangePasswordModal
          isOpen={showPasswordModal}
          onClose={() => setShowPasswordModal(false)}
          onSuccess={handlePasswordChangeSuccess}
          logout={logout}
        />
      )}
    </AuthContext.Provider>
  );
};
