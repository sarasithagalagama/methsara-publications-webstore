// ============================================
// Inventory Service
// Epic: E5 - Inventory Management
// Owner: IT24100264 (Bandara N W C D)
// ============================================

import api from "../../../api/config";

const inventoryService = {
  // [E5.2] Master view: admin/master_inventory_manager fetches stock across ALL locations
  getAllInventory: async () => {
    const response = await api.get("/inventory/all");
    return response.data;
  },

  // [E5.1] Location-scoped view: location_inventory_manager sees only their assigned warehouse/branch
  getInventoryByLocation: async (location) => {
    const response = await api.get(`/inventory/location/${location}`);
    return response.data;
  },

  getProductInventory: async (productId) => {
    const response = await api.get(`/inventory/product/${productId}`);
    return response.data;
  },

  updateInventory: async (inventoryData) => {
    const response = await api.post("/inventory", inventoryData);
    return response.data;
  },

  // [E5.3] Manual stock adjustment: payload includes productId, location, change amount (+/-), reason
  adjustStock: async (adjustmentData) => {
    const response = await api.post("/inventory/adjust", adjustmentData);
    return response.data;
  },

  // [E5.9] Low stock alerts: backend compares currentQuantity against reorderLevel per product per location
  getLowStockItems: async (location = null) => {
    const params = location ? `?location=${location}` : "";
    const response = await api.get(`/inventory/low-stock${params}`);
    return response.data;
  },
};

export default inventoryService;
