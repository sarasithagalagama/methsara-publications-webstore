// ============================================
// Supplier Service
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// ============================================

import api from "../../../api/config";

const supplierService = {
  // [E4.1] Fetch all suppliers — returns array of Material Suppliers, Distributors, and Bookshops
  getSuppliers: async () => {
    const response = await api.get("/suppliers");
    return response.data;
  },

  getSupplier: async (id) => {
    const response = await api.get(`/suppliers/${id}`);
    return response.data;
  },

  // [E4.1] Create new supplier with business registration, bank details, payment terms
  createSupplier: async (supplierData) => {
    const response = await api.post("/suppliers", supplierData);
    return response.data;
  },

  updateSupplier: async (id, supplierData) => {
    const response = await api.put(`/suppliers/${id}`, supplierData);
    return response.data;
  },

  deleteSupplier: async (id) => {
    const response = await api.delete(`/suppliers/${id}`);
    return response.data;
  },

  // [E4.6] Analytics: on-time delivery rate, quality score, total orders per supplier
  getAnalytics: async () => {
    const response = await api.get("/suppliers/analytics");
    return response.data;
  },
};

export default supplierService;
