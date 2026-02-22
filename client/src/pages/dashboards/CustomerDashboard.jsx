// Epic: E1 - User Management
// Owner: IT24100548 (Galagama S.T)
// Purpose: Customer portal for orders, wishlist, profile

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import {
  ShoppingBag,
  Bell,
  Settings,
  LogOut,
  User,
  MapPin,
  Mail,
  Phone,
  LayoutDashboard,
  Box,
} from "lucide-react";
import ProfileSettingsModal from "../../components/profile/ProfileSettingsModal";
import { LogoutModal } from "../../components/Auth/AuthModals";
import "./CustomerDashboard.css";

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState("overview");
  const [orders, setOrders] = useState([]);
  const [stats, setStats] = useState({
    totalOrders: 0,
    deliveredOrders: 0,
  });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomerData();
  }, []);

  const fetchCustomerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const ordersRes = await axios.get("/api/orders/my-orders", config);
      const userOrders = ordersRes.data.orders || [];

      setOrders(userOrders);
      setStats({
        totalOrders: userOrders.length,
        deliveredOrders: userOrders.filter((o) => o.orderStatus === "Delivered")
          .length,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching customer data:", error);
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    navigate("/");
  };

  const getStatusColor = (status) => {
    const colors = {
      Pending: "status-pending",
      Processing: "status-processing",
      Shipped: "status-shipped",
      Delivered: "status-delivered",
      Cancelled: "status-cancelled",
    };
    return colors[status] || "status-default";
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="customer-dashboard-layout">
      {/* Sidebar */}
      <aside className="customer-sidebar">
        <div className="user-profile-summary">
          <div className="profile-avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <h3 className="profile-name">{user?.name}</h3>
          <p className="profile-email">{user?.email}</p>
        </div>

        <nav className="customer-nav">
          <button
            className={`customer-nav-item ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            <LayoutDashboard size={20} />
            <span>Overview</span>
          </button>
          <button
            className={`customer-nav-item ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            <Box size={20} />
            <span>My Orders</span>
          </button>
          <button
            className="customer-nav-item"
            onClick={() => setShowProfileModal(true)}
          >
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </nav>

        <div className="customer-sidebar-footer">
          <button
            className="customer-nav-item customer-logout-btn"
            onClick={handleLogout}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="customer-main">
        {activeTab === "overview" && (
          <div className="overview-content">
            {/* Welcome Banner */}
            <div className="welcome-banner">
              <div className="welcome-text">
                <h1>Welcome back, {user?.name}! 👋</h1>
                <p>
                  Manage your profile, check your orders, and update settings.
                </p>
              </div>
            </div>

            <div className="customer-content-grid">
              {/* Profile Info Card */}
              <div className="customer-info-card profile-info-card">
                <div className="customer-card-header">
                  <User size={20} className="card-icon" />
                  <h3>Profile Information</h3>
                </div>
                <div className="card-body">
                  <div className="info-row">
                    <Mail size={16} />
                    <span>{user?.email}</span>
                  </div>
                  <div className="info-row">
                    <Phone size={16} />
                    <span>{user?.phone || "No phone number added"}</span>
                  </div>
                  <div className="info-row address-row">
                    <MapPin size={16} />
                    <span>
                      {user?.address
                        ? `${user.address.street}, ${user.address.city}, ${user.address.postalCode}`
                        : "No address added"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Stats Card */}
              <div className="customer-info-card customer-stats-card">
                <div className="customer-card-header">
                  <Box size={20} className="customer-card-icon" />
                  <h3>Order Stats</h3>
                </div>
                <div className="customer-stats-grid">
                  <div className="customer-stat-item">
                    <span className="stat-value">{stats.totalOrders}</span>
                    <span className="stat-label">TOTAL ORDERS</span>
                  </div>
                  <div className="customer-stat-item success">
                    <span className="stat-value">{stats.deliveredOrders}</span>
                    <span className="stat-label">DELIVERED</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="customer-recent-orders-section">
              <div className="customer-section-header">
                <h3>Recent Orders</h3>
                <button
                  className="customer-view-all-btn"
                  onClick={() => setActiveTab("orders")}
                >
                  View All
                </button>
              </div>

              {orders.length === 0 ? (
                <div className="empty-orders">
                  <p>No orders placed yet.</p>
                  <Link to="/books" className="start-shopping-btn">
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="recent-orders-list">
                  {orders.slice(0, 3).map((order) => (
                    <div key={order._id} className="customer-mini-order-card">
                      <div className="order-info">
                        <h4>Order #{order._id.slice(-6).toUpperCase()}</h4>
                        <span className="order-date">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="order-meta">
                        <span
                          className={`customer-status-pill ${getStatusColor(order.orderStatus)}`}
                        >
                          {order.orderStatus}
                        </span>
                        <span className="order-amount">
                          Rs. {order.total.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === "orders" && (
          <div className="orders-tab-content">
            <div className="tab-header">
              <h2>My Orders</h2>
              <p>Track your order history and status</p>
            </div>

            <div className="orders-list-full">
              {orders.map((order) => (
                <div key={order._id} className="order-card-full">
                  <div className="order-full-header">
                    <div>
                      <h4>Order #{order._id.slice(-8).toUpperCase()}</h4>
                      <span className="order-full-date">
                        Placed on{" "}
                        {new Date(order.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <span
                      className={`status-badge-lg ${getStatusColor(order.orderStatus)}`}
                    >
                      {order.orderStatus}
                    </span>
                  </div>
                  <div className="order-full-body">
                    <div className="order-summary">
                      <span>{order.items.length} items</span>
                      <span className="total-amount">
                        Total: Rs. {order.total.toLocaleString()}
                      </span>
                    </div>
                    <Link
                      to={`/orders/${order._id}`}
                      className="view-details-btn"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <ProfileSettingsModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
      />
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </div>
  );
};

export default CustomerDashboard;
