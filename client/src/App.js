// ============================================
// Main App Component
// Epic: E1 - User & Admin Management
// Owner: IT24100548 (Galagama S.T)
// Purpose: Application routing with RBAC
// ============================================

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Context
import { AuthProvider } from "./context/AuthContext";

// Layouts
import CustomerLayout from "./components/Layouts/CustomerLayout";
import DashboardLayout from "./components/Layouts/DashboardLayout";

// Auth Components
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ManageProducts from "./pages/ManageProducts";
import OrderHistory from "./pages/OrderHistory";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import ReviewModeration from "./pages/ReviewModeration";
import LowStockAlerts from "./pages/LowStockAlerts";
import OrderDetail from "./pages/OrderDetail";

// Customer Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GiftVouchers from "./pages/GiftVouchers";

// Dashboard Pages
import CustomerDashboard from "./pages/dashboards/CustomerDashboard";
import AdminDashboard from "./pages/dashboards/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminOrders from "./pages/admin/AdminOrders";
import AdminSettings from "./pages/admin/AdminSettings";
import SupplierManagerDashboard from "./pages/dashboards/SupplierManagerDashboard";
import CreatePurchaseOrder from "./pages/supplier/CreatePurchaseOrder";
import PurchaseOrderList from "./pages/supplier/PurchaseOrderList";
import SupplierPerformance from "./pages/supplier/SupplierPerformance";
import DeliverySchedule from "./pages/supplier/DeliverySchedule";
import SupplierList from "./components/Suppliers/SupplierList";
import InventoryManagerDashboard from "./pages/dashboards/InventoryManagerDashboard";
import FinanceManagerDashboard from "./pages/dashboards/FinanceManagerDashboard";
import ProductManagerDashboard from "./pages/dashboards/ProductManagerDashboard";
import CategoryManager from "./pages/product-manager/CategoryManager";
import MarketingManagerDashboard from "./pages/dashboards/MarketingManagerDashboard";

import "./App.css";

function App() {
  return (
    <AuthProvider>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "8px",
            fontSize: "14px",
          },
          success: {
            iconTheme: {
              primary: "#5D4037", // Dark Brown
              secondary: "#fff",
            },
          },
        }}
      />
      <Router>
        <Routes>
          {/* =========================================
              PUBLIC ROUTES (Customer Layout)
             ========================================= */}
          <Route element={<CustomerLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/books" element={<ProductList />} />
            <Route path="/books/:id" element={<ProductDetail />} />
            <Route path="/books/:id" element={<ProductDetail />} />
            <Route path="/gift-vouchers" element={<GiftVouchers />} />

            {/* Customer Routes (Within Layout) */}
            <Route
              path="/customer/dashboard"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <CustomerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/cart"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <Checkout />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <OrderHistory />
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders/:id"
              element={
                <ProtectedRoute allowedRoles={["customer"]}>
                  <OrderDetail />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* =========================================
              AUTH ROUTES (No Layout)
             ========================================= */}
          <Route
            path="/login"
            element={<Navigate to="/?login=true" replace />}
          />
          <Route
            path="/register"
            element={<Navigate to="/?register=true" replace />}
          />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* =========================================
              CUSTOMER ROUTES
             ========================================= */}

          {/* =========================================
              MANAGER DASHBOARDS (Shared Layout)
             ========================================= */}
          <Route element={<DashboardLayout />}>
            {/* ADMIN */}
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <ManageProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminOrders />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute allowedRoles={["admin"]}>
                  <AdminSettings />
                </ProtectedRoute>
              }
            />
            {/* SUPPLIER MANAGER */}
            <Route
              path="/supplier-manager/dashboard"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <SupplierManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/supplier-manager/purchase-orders"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <PurchaseOrderList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/supplier-manager/purchase-orders/create"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <CreatePurchaseOrder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/supplier-manager/suppliers"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <SupplierList />
                </ProtectedRoute>
              }
            />
            <Route
              path="/supplier-manager/performance"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <SupplierPerformance />
                </ProtectedRoute>
              }
            />
            <Route
              path="/supplier-manager/schedule"
              element={
                <ProtectedRoute allowedRoles={["supplier_manager", "admin"]}>
                  <DeliverySchedule />
                </ProtectedRoute>
              }
            />
            {/* INVENTORY MANAGER */}
            <Route
              path="/inventory-manager/dashboard"
              element={
                <ProtectedRoute
                  allowedRoles={[
                    "master_inventory_manager",
                    "location_inventory_manager",
                    "admin",
                  ]}
                >
                  <InventoryManagerDashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path="/inventory-manager/alerts"
              element={
                <ProtectedRoute
                  allowedRoles={[
                    "master_inventory_manager",
                    "location_inventory_manager",
                    "admin",
                  ]}
                >
                  <LowStockAlerts />
                </ProtectedRoute>
              }
            />
            {/* FINANCE MANAGER */}
            <Route
              path="/finance-manager/dashboard"
              element={
                <ProtectedRoute allowedRoles={["finance_manager", "admin"]}>
                  <FinanceManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finance-manager/transactions"
              element={
                <ProtectedRoute allowedRoles={["finance_manager", "admin"]}>
                  <FinanceManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finance-manager/payroll"
              element={
                <ProtectedRoute allowedRoles={["finance_manager", "admin"]}>
                  <FinanceManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/finance-manager/reports"
              element={
                <ProtectedRoute allowedRoles={["finance_manager", "admin"]}>
                  <FinanceManagerDashboard />
                </ProtectedRoute>
              }
            />
            {/* PRODUCT MANAGER */}
            <Route
              path="/product-manager/dashboard"
              element={
                <ProtectedRoute allowedRoles={["product_manager", "admin"]}>
                  <ProductManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product-manager/products"
              element={
                <ProtectedRoute allowedRoles={["product_manager", "admin"]}>
                  <ManageProducts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/product-manager/categories"
              element={
                <ProtectedRoute allowedRoles={["product_manager", "admin"]}>
                  <CategoryManager />
                </ProtectedRoute>
              }
            />
            {/* MARKETING MANAGER */}
            <Route
              path="/marketing-manager/dashboard"
              element={
                <ProtectedRoute allowedRoles={["marketing_manager", "admin"]}>
                  <MarketingManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketing-manager/campaigns"
              element={
                <ProtectedRoute allowedRoles={["marketing_manager", "admin"]}>
                  <MarketingManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketing-manager/analytics"
              element={
                <ProtectedRoute allowedRoles={["marketing_manager", "admin"]}>
                  <MarketingManagerDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/marketing-manager/gift-vouchers"
              element={
                <ProtectedRoute allowedRoles={["marketing_manager", "admin"]}>
                  <MarketingManagerDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Fallback for 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
