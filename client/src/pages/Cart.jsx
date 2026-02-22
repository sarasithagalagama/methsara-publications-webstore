import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import {
  X,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  ChevronRight,
  Minus,
  Plus,
  ShieldCheck,
  RotateCcw,
  BadgeCheck,
} from "lucide-react";
import "./Cart.css";

const CHECKOUT_STEPS = ["Browse", "Cart", "Checkout", "Done"];

const Cart = () => {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const { refreshCounts } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        const guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
          items: [],
          totalAmount: 0,
          discount: 0,
        };
        setCart(guestCart);
        setLoading(false);
        return;
      }
      const res = await axios.get("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
    } finally {
      setLoading(false);
      refreshCounts();
    }
  };

  const updateQuantity = async (productId, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        let guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
          items: [],
          totalAmount: 0,
          discount: 0,
        };
        const itemIndex = guestCart.items.findIndex(
          (item) => item.product._id === productId,
        );
        if (itemIndex > -1) {
          guestCart.items[itemIndex].quantity = newQuantity;
          guestCart.totalAmount = guestCart.items.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0,
          );
          localStorage.setItem("guestCart", JSON.stringify(guestCart));
          fetchCart();
        }
        return;
      }
      await axios.put(
        "/api/cart/update",
        { productId, quantity: newQuantity },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      fetchCart();
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const removeItem = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        let guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
          items: [],
          totalAmount: 0,
          discount: 0,
        };
        guestCart.items = guestCart.items.filter(
          (item) => item.product._id !== productId,
        );
        guestCart.totalAmount = guestCart.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        localStorage.setItem("guestCart", JSON.stringify(guestCart));
        fetchCart();
        return;
      }
      await axios.delete(`/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchCart();
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  const clearCart = async () => {
    // Removed the window.confirm check as per the provided instruction snippet
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        localStorage.removeItem("guestCart");
        setCart({ items: [], totalAmount: 0, discount: 0 });
        return;
      }
      const res = await axios.delete("/api/cart/clear", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCart(res.data.cart);
      refreshCounts();
    } catch (error) {
      console.error("Error clearing cart:", error);
    }
  };

  if (loading) {
    return (
      <div className="loading" style={{ minHeight: "60vh" }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="empty-cart-view container">
        <div className="empty-cart-icon">
          <ShoppingBag size={64} strokeWidth={1.5} />
        </div>
        <h2>Your Bag is Empty</h2>
        <p>
          It seems like you haven't added any books to your cart yet. Explore
          our collection and find your next great read!
        </p>
        <Link to="/books" className="btn btn-primary">
          Start Exploring <ChevronRight size={18} />
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-wrapper">
      {/* Progress Bar */}
      <div className="checkout-progress-bar">
        <div className="container">
          <div className="progress-steps">
            {CHECKOUT_STEPS.map((step, i) => (
              <div
                key={step}
                className={`progress-step ${i === 1 ? "active" : i < 1 ? "done" : ""}`}
              >
                <div className="step-circle">{i < 1 ? "✓" : i + 1}</div>
                <span className="step-label">{step}</span>
                {i < CHECKOUT_STEPS.length - 1 && (
                  <div className={`step-connector ${i < 1 ? "filled" : ""}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="cart-header">
          <h1>
            Shopping{" "}
            <span style={{ color: "var(--secondary-color)" }}>Bag</span>
          </h1>
          <button onClick={clearCart} className="clear-cart-btn">
            <Trash2 size={16} style={{ marginRight: "8px" }} /> Clear Bag
          </button>
        </div>

        <div className="cart-content">
          <div className="cart-items-list">
            {cart.items.map((item) => (
              <div key={item._id} className="cart-item-card">
                <div className="item-thumb-container">
                  <img
                    src={
                      item.product?.image || "https://via.placeholder.com/150"
                    }
                    alt={item.product?.title}
                    className="item-thumb"
                  />
                </div>

                <div className="item-main-info">
                  <h3>{item.product?.title}</h3>
                  <p className="meta-desc">
                    {item.product?.grade} • {item.product?.author}
                  </p>
                  <p className="unit-price">
                    Rs. {Number(item.price).toFixed(2)}
                  </p>
                </div>

                <div className="item-qty-selector">
                  <button
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity - 1)
                    }
                    disabled={item.quantity <= 1}
                  >
                    <Minus size={14} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateQuantity(item.product._id, item.quantity + 1)
                    }
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="item-calculated-total">
                  Rs. {(item.price * item.quantity).toLocaleString()}
                </div>

                <button
                  onClick={() => removeItem(item.product._id)}
                  className="remove-action-btn"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>

          <aside className="cart-summary-premium">
            <h2>Bag Summary</h2>
            <div className="summary-details">
              <div className="summary-detail-row">
                <span>Items Subtotal</span>
                <span>Rs. {cart.totalAmount.toLocaleString()}</span>
              </div>
              <div
                className="summary-detail-row"
                style={{ color: "var(--text-light)" }}
              >
                <span>Standard Delivery</span>
                <span>Calculated at next step</span>
              </div>

              {cart.discount > 0 && (
                <div
                  className="summary-detail-row"
                  style={{ color: "var(--success-text)" }}
                >
                  <span>Applied Discount</span>
                  <span>- Rs. {cart.discount.toLocaleString()}</span>
                </div>
              )}

              <div className="summary-detail-row grand-total">
                <span>Total</span>
                <span>Rs. {cart.totalAmount.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="btn btn-primary checkout-action-btn"
            >
              Proceed to Payment <ChevronRight size={20} />
            </button>

            <Link to="/books" className="back-to-books">
              <ArrowLeft size={16} /> Continue Browsing
            </Link>

            {/* Trust Badges */}
            <div className="trust-badges">
              <div className="trust-badge">
                <ShieldCheck size={18} />
                <span>Secure Payment</span>
              </div>
              <div className="trust-badge">
                <RotateCcw size={18} />
                <span>Free Returns</span>
              </div>
              <div className="trust-badge">
                <BadgeCheck size={18} />
                <span>Quality Guarantee</span>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Cart;
