// ============================================
// Authentication Service
// Epic: E1 - User & Role Management
// Owner: IT24100548 (Galagama S.T)
// ============================================

import api from "../../../api/config";

const authService = {
  // DEMO: Register new customer
  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // DEMO: Login
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
    }
    return response.data;
  },

  // DEMO: Logout
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  // DEMO: Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem("user");
    return userStr ? JSON.parse(userStr) : null;
  },

  // DEMO: Check if user is logged in
  isAuthenticated: () => {
    return !!localStorage.getItem("token");
  },

  // DEMO: Get user profile
  getProfile: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },

  // DEMO: Update profile
  updateProfile: async (userData) => {
    const response = await api.put("/auth/profile", userData);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    return response.data;
  },
};

export default authService;
