// ============================================
// OrderDetail
// Epic: E3 - Order & Transaction
// Owner: IT24100191 (Jayasinghe D.B.P)
// Purpose: OrderDetail page component
// ============================================
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import {
  ChevronLeft,
  MapPin,
  CreditCard,
  Calendar,
  Package,
  Truck,
  CheckCircle,
  Clock,
  FileText,
} from "lucide-react";
import "./OrderDetail.css";

const OrderDetail = () => {
  const { id } = useParams();
  // ─────────────────────────────────
  // State Variables
  // ─────────────────────────────────
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  // ─────────────────────────────────
  // Side Effects
  // ─────────────────────────────────
  useEffect(() => {
    fetchOrderDetails();
  }, [id]);

  // ─────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────
  const fetchOrderDetails = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`/api/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrder(res.data.order);
    } catch (error) {
      console.error("Error fetching order details:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    // ─────────────────────────────────
    // Render
    // ─────────────────────────────────
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );

  if (!order)
    return (
      <div
        className="container"
        style={{ textAlign: "center", padding: "100px 0" }}
      >
        <h2>Order Not Found</h2>
        <Link to="/orders" className="btn btn-primary mt-4">
          Back to My Orders
        </Link>
      </div>
    );

  const steps = ["Pending", "Processing", "Shipped", "Delivered"];
  const currentStatusIndex = steps.indexOf(order.orderStatus);

  return (
    <div className="order-detail-container">
      <Link to="/orders" className="btn-back">
        <ChevronLeft size={18} /> Back to My Orders
      </Link>

      <div className="order-detail-header">
        <div>
          <h1>Order Details</h1>
          <p className="order-date">
            Placed on{" "}
            {new Date(order.orderDate).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="order-id-badge">#{order._id.toUpperCase()}</div>
      </div>

      {/* Status Stepper */}
      <div className="status-stepper">
        {steps.map((step, index) => (
          <div
            key={step}
            className={`step ${index < currentStatusIndex ? "completed" : index === currentStatusIndex ? "active" : ""}`}
          >
            <div className="step-circle">
              {index < currentStatusIndex ? (
                <CheckCircle size={18} />
              ) : (
                index + 1
              )}
            </div>
            <span className="step-label">{step}</span>
          </div>
        ))}
      </div>

      <div className="order-detail-grid">
        <main>
          {/* Items Card */}
          <div className="detail-card">
            <h3>Ordered Items</h3>
            <div className="item-list">
              {order.items.map((item, index) => (
                <div key={index} className="order-item-row">
                  <img
                    src={
                      item.product?.image || "https://via.placeholder.com/60"
                    }
                    alt={item.product?.title || item.productTitle}
                    className="item-img"
                  />
                  <div className="item-info">
                    <p className="item-name">
                      {item.product?.title || item.productTitle}
                    </p>
                    <p className="item-meta">Quantity: {item.quantity}</p>
                  </div>
                  <div className="item-price">
                    Rs. {(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Generated Vouchers Section */}
          {order.generatedVouchers && order.generatedVouchers.length > 0 && (
            <div className="detail-card voucher-codes-card">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    padding: "8px",
                    background: "rgba(93, 64, 55, 0.1)",
                    borderRadius: "8px",
                  }}
                >
                  <FileText size={20} color="var(--primary-color)" />
                </div>
                <h3 style={{ margin: 0 }}>Gift Voucher Codes</h3>
              </div>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "#666",
                  marginBottom: "1rem",
                }}
              >
                Use these codes at checkout to apply your gift balance.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
                  gap: "1rem",
                }}
              >
                {order.generatedVouchers.map((v) => (
                  <div
                    key={v.code}
                    style={{
                      border: "2px dashed var(--primary-color)",
                      padding: "1rem",
                      borderRadius: "12px",
                      textAlign: "center",
                      background: "#fff9f8",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        textTransform: "uppercase",
                        color: "#999",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Voucher Code
                    </div>
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        fontFamily: "monospace",
                        color: "var(--primary-color)",
                        margin: "0.25rem 0",
                      }}
                    >
                      {v.code}
                    </div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        color: "#555",
                      }}
                    >
                      Balance: Rs. {v.balance.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Delivery & Payment Info */}
          <div
            className="order-info-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
            }}
          >
            <div className="detail-card">
              <h3>
                <MapPin size={18} className="mr-2" /> Shipping Address
              </h3>
              <div className="info-group">
                <label>Street</label>
                <p>{order.deliveryAddress.street}</p>
              </div>
              <div className="info-group">
                <label>City & Postal Code</label>
                <p>
                  {order.deliveryAddress.city},{" "}
                  {order.deliveryAddress.postalCode}
                </p>
              </div>
              <div className="info-group">
                <label>Phone</label>
                <p>{order.deliveryAddress.phone}</p>
              </div>
            </div>

            <div className="detail-card">
              <h3>
                <CreditCard size={18} className="mr-2" /> Payment Info
              </h3>
              <div className="info-group">
                <label>Method</label>
                <p>{order.paymentMethod}</p>
              </div>
              <div className="info-group">
                <label>Payment Status</label>
                <span
                  className={`status-badge ${order.isPaid ? "success" : "warning"}`}
                >
                  {order.isPaid ? "Paid" : "Pending Payment"}
                </span>
              </div>
              {order.paymentMethod === "Bank Transfer" && order.bankSlipUrl && (
                <div className="info-group">
                  <label>Bank Slip</label>
                  <a
                    href={order.bankSlipUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link"
                  >
                    View Uploaded Slip
                  </a>
                </div>
              )}
            </div>
          </div>
        </main>

        <aside>
          <div className="detail-card">
            <h3>Order Summary</h3>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>
                Rs.{" "}
                {order.items
                  .reduce((acc, item) => acc + item.price * item.quantity, 0)
                  .toFixed(2)}
              </span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>Rs. {(order.deliveryFee || 0).toFixed(2)}</span>
            </div>
            {order.discount > 0 && (
              <div
                className="summary-row"
                style={{ color: "var(--success-text)" }}
              >
                <span>Discount</span>
                <span>- Rs. {order.discount.toFixed(2)}</span>
              </div>
            )}
            <div className="summary-row total">
              <span>Total Amount</span>
              <span>Rs. {order.total.toFixed(2)}</span>
            </div>

            {order.orderStatus === "Pending" && (
              <div
                className="mt-4 p-3 bg-light rounded text-center"
                style={{ fontSize: "0.9rem" }}
              >
                <Clock
                  size={20}
                  className="mb-2"
                  style={{ color: "#f59e0b" }}
                />
                <p>
                  We are waiting for your order to be processed. You'll receive
                  an email once it's shipped.
                </p>
              </div>
            )}
          </div>

          <div className="detail-card">
            <h3>Need Help?</h3>
            <p style={{ fontSize: "0.9rem", color: "#666" }}>
              If you have any questions about your order, please contact our
              support team.
            </p>
            <Link to="/contact" className="btn btn-outline mt-3 w-100">
              Contact Support
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default OrderDetail;
