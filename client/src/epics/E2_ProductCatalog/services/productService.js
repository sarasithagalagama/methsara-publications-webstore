// ============================================
// Product Service
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// ============================================

import api from "../../../api/config";

const productService = {
  // DEMO: Get all products with filters
  getProducts: async (filters = {}) => {
    const params = new URLSearchParams();
    if (filters.search) params.append("search", filters.search);
    if (filters.grade) params.append("grade", filters.grade);
    if (filters.subject) params.append("subject", filters.subject);
    if (filters.minPrice) params.append("minPrice", filters.minPrice);
    if (filters.maxPrice) params.append("maxPrice", filters.maxPrice);
    if (filters.sort) params.append("sort", filters.sort);

    const response = await api.get(`/products?${params.toString()}`);
    return response.data;
  },

  // DEMO: Get single product
  getProduct: async (id) => {
    const response = await api.get(`/products/${id}`);
    return response.data;
  },

  // DEMO: Create product (admin)
  createProduct: async (productData) => {
    const response = await api.post("/products", productData);
    return response.data;
  },

  // DEMO: Update product (admin)
  updateProduct: async (id, productData) => {
    const response = await api.put(`/products/${id}`, productData);
    return response.data;
  },

  // DEMO: Delete product (admin)
  deleteProduct: async (id) => {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  },

  // DEMO: Add review
  addReview: async (productId, reviewData) => {
    const response = await api.post(
      `/products/${productId}/reviews`,
      reviewData,
    );
    return response.data;
  },
};

export default productService;
