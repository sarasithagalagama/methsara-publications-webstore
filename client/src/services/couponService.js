// ============================================
// Coupon Service
// Epic: E6 - Promotions & Loyalty
// Owner: IT24101266 (Perera M.U.E)
// ============================================

import api from "../api/config";

const couponService = {
  getCoupons: async () => {
    const response = await api.get("/coupons");
    return response.data;
  },

  getCoupon: async (id) => {
    const response = await api.get(`/coupons/${id}`);
    return response.data;
  },

  createCoupon: async (couponData) => {
    const response = await api.post("/coupons", couponData);
    return response.data;
  },

  updateCoupon: async (id, couponData) => {
    const response = await api.put(`/coupons/${id}`, couponData);
    return response.data;
  },

  deleteCoupon: async (id) => {
    const response = await api.delete(`/coupons/${id}`);
    return response.data;
  },

  validateCoupon: async (code, orderTotal) => {
    const response = await api.post("/coupons/validate", { code, orderTotal });
    return response.data;
  },
};

export default couponService;
