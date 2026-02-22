import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  CheckCircle,
  Truck,
  CreditCard,
  Info,
  ChevronLeft,
  Package,
  X,
  Check,
  Banknote,
  ShieldCheck,
} from "lucide-react";
import StatusModal from "../components/common/StatusModal";
import "./Checkout.css";

const CHECKOUT_STEPS = ["Browse", "Cart", "Checkout", "Done"];

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderRef, setOrderRef] = useState(null);
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: "error",
    title: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    guestName: "",
    guestEmail: "",
    deliveryAddress: {
      street: "",
      city: "",
      postalCode: "",
      phone: "",
    },
    paymentMethod: "COD",
    bankSlip: null,
  });

  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    fetchCart();
    setIsGuest(!localStorage.getItem("token"));
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        const guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
          items: [],
          totalAmount: 0,
        };
        if (guestCart.items.length === 0) {
          navigate("/cart");
        } else {
          setCart(guestCart);
        }
        setLoading(false);
        return;
      }
      const res = await axios.get("/api/cart", {
        headers: { Authorization: "Bearer " + token },
      });
      setCart(res.data.cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      navigate("/cart");
    } finally {
      setLoading(false);
    }
  };

  const handleApplyCoupon = async () => {
    if (!couponCode) return;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        "/api/coupons/apply",
        { code: couponCode, orderAmount: cart.totalAmount },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      setAppliedCoupon(res.data.coupon);
      setDiscount(res.data.discount);
    } catch (error) {
      setStatusModal({
        isOpen: true,
        type: "error",
        title: "Coupon Error",
        message:
          error.response?.data?.message || "Invalid or expired coupon code",
      });
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, bankSlip: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const errors = {};
    const phoneRegex = /^0\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (isGuest) {
      if (!formData.guestName.trim())
        errors.guestName = "Name is required for guests";
      if (!formData.guestEmail.trim()) {
        errors.guestEmail = "Email is required for guests";
      } else if (!emailRegex.test(formData.guestEmail)) {
        errors.guestEmail = "Please enter a valid email address";
      }
    }

    if (!formData.deliveryAddress.street.trim())
      errors.street = "Street address is required";
    if (!formData.deliveryAddress.city.trim())
      errors.city = "City / Town is required";
    if (!formData.deliveryAddress.phone.trim())
      errors.phone = "Contact phone is required";
    else if (
      !phoneRegex.test(formData.deliveryAddress.phone.replace(/\s/g, ""))
    )
      errors.phone = "Enter a valid 10-digit phone (e.g. 0771234567)";

    if (formData.paymentMethod === "Bank Transfer" && !formData.bankSlip)
      errors.bankSlip = "Please upload a bank slip for Bank Transfer payment";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem("token");
      const orderData = {
        items: cart.items.map((item) => ({
          product: item.product._id,
          quantity: item.quantity,
          price: item.price,
        })),
        deliveryAddress: formData.deliveryAddress,
        paymentMethod: formData.paymentMethod,
        bankSlip: formData.bankSlip,
        couponCode: appliedCoupon?.code,
      };

      if (isGuest) {
        orderData.guestName = formData.guestName;
        orderData.guestEmail = formData.guestEmail;
      }

      const headers = {};
      if (token) {
        headers.Authorization = "Bearer " + token;
      }

      const res = await axios.post("/api/orders", orderData, { headers });

      if (isGuest) {
        localStorage.removeItem("guestCart");
      }

      setOrderRef(res.data.order?._id?.slice(-8).toUpperCase() || "ORD-OK");
      setShowSuccessModal(true);
    } catch (error) {
      console.error("Error placing order:", error);
      setStatusModal({
        isOpen: true,
        type: "error",
        title: "Order Failed",
        message:
          error.response?.data?.message ||
          "Error placing order. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );

  const deliveryFee = 350;
  const subtotal = cart.totalAmount;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="checkout-page-wrapper">
      {/* Progress Bar */}
      <div className="checkout-progress-bar">
        <div className="container">
          <div className="progress-steps">
            {CHECKOUT_STEPS.map((step, i) => (
              <div
                key={step}
                className={`progress-step ${i === 2 ? "active" : i < 2 ? "done" : ""}`}
              >
                <div className="step-circle">{i < 2 ? "✓" : i + 1}</div>
                <span className="step-label">{step}</span>
                {i < CHECKOUT_STEPS.length - 1 && (
                  <div className={`step-connector ${i < 2 ? "filled" : ""}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <button className="btn-back" onClick={() => navigate("/cart")}>
          <ChevronLeft size={18} /> Back to Bag
        </button>
        <h1 className="checkout-title">
          Complete Your{" "}
          <span style={{ color: "var(--secondary-color)" }}>Order</span>
        </h1>

        <div className="checkout-grid">
          <main className="checkout-main">
            <form
              onSubmit={handlePlaceOrder}
              className="checkout-form"
              noValidate
            >
              {isGuest && (
                <div className="checkout-card">
                  <div className="form-header">
                    <span className="step-num">!</span>
                    <h2>Guest Information</h2>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input
                        type="text"
                        className={`form-input ${formErrors.guestName ? "input-error" : ""}`}
                        value={formData.guestName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestName: e.target.value,
                          })
                        }
                      />
                      {formErrors.guestName && (
                        <p className="field-error">{formErrors.guestName}</p>
                      )}
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        className={`form-input ${formErrors.guestEmail ? "input-error" : ""}`}
                        value={formData.guestEmail}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            guestEmail: e.target.value,
                          })
                        }
                      />
                      {formErrors.guestEmail && (
                        <p className="field-error">{formErrors.guestEmail}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Delivery Section */}
              <div className="checkout-card">
                <div className="form-header">
                  <span className="step-num">1</span>
                  <h2>Shipping Information</h2>
                </div>

                <div className="form-group">
                  <label className="form-label">Street Address *</label>
                  <input
                    type="text"
                    className={`form-input ${formErrors.street ? "input-error" : ""}`}
                    placeholder="House number and street name"
                    value={formData.deliveryAddress.street}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        deliveryAddress: {
                          ...formData.deliveryAddress,
                          street: e.target.value,
                        },
                      })
                    }
                  />
                  {formErrors.street && (
                    <p className="field-error">{formErrors.street}</p>
                  )}
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">City / Town *</label>
                    <input
                      type="text"
                      className={`form-input ${formErrors.city ? "input-error" : ""}`}
                      value={formData.deliveryAddress.city}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          deliveryAddress: {
                            ...formData.deliveryAddress,
                            city: e.target.value,
                          },
                        })
                      }
                    />
                    {formErrors.city && (
                      <p className="field-error">{formErrors.city}</p>
                    )}
                  </div>
                  <div className="form-group">
                    <label className="form-label">Postal Code</label>
                    <input
                      type="text"
                      className="form-input"
                      value={formData.deliveryAddress.postalCode}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          deliveryAddress: {
                            ...formData.deliveryAddress,
                            postalCode: e.target.value,
                          },
                        })
                      }
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Contact Phone *</label>
                  <input
                    type="tel"
                    className={`form-input ${formErrors.phone ? "input-error" : ""}`}
                    placeholder="07XXXXXXXX"
                    value={formData.deliveryAddress.phone}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        deliveryAddress: {
                          ...formData.deliveryAddress,
                          phone: e.target.value
                            .replace(/[^0-9]/g, "")
                            .slice(0, 10),
                        },
                      })
                    }
                  />
                  {formErrors.phone && (
                    <p className="field-error">{formErrors.phone}</p>
                  )}
                </div>

                {/* Delivery estimate note based on payment method */}
                <div className="delivery-estimate-note">
                  <Package size={16} />
                  {formData.paymentMethod === "COD"
                    ? "Estimated delivery: 3–5 business days after order confirmation."
                    : "Estimated delivery: 1–2 business days after payment verification."}
                </div>
              </div>

              {/* Payment Section */}
              <div className="checkout-card">
                <div className="form-header">
                  <span className="step-num">2</span>
                  <h2>Payment Method</h2>
                </div>

                <div className="payment-methods-grid">
                  <div
                    className={`payment-method-card ${formData.paymentMethod === "COD" ? "selected" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, paymentMethod: "COD" })
                    }
                  >
                    <div className="method-icon">
                      <Truck size={24} />
                    </div>
                    <span>Cash on Delivery</span>
                    {formData.paymentMethod === "COD" && (
                      <div className="method-selected-badge">
                        <Check size={14} />
                      </div>
                    )}
                  </div>

                  <div
                    className={`payment-method-card ${formData.paymentMethod === "Bank Transfer" ? "selected" : ""}`}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        paymentMethod: "Bank Transfer",
                      })
                    }
                  >
                    <div className="method-icon">
                      <Banknote size={24} />
                    </div>
                    <span>Bank Transfer</span>
                    {formData.paymentMethod === "Bank Transfer" && (
                      <div className="method-selected-badge">
                        <Check size={14} />
                      </div>
                    )}
                  </div>
                </div>

                {formData.paymentMethod === "Bank Transfer" && (
                  <div className="bank-info-box">
                    <p>
                      <span>Bank:</span> <strong>Commercial Bank</strong>
                    </p>
                    <p>
                      <span>Account Name:</span>{" "}
                      <strong>Methsara Publications</strong>
                    </p>
                    <p>
                      <span>Account No:</span> <strong>1234 5678 9012</strong>
                    </p>
                    <p
                      style={{
                        marginTop: "1rem",
                        fontStyle: "italic",
                        fontSize: "0.85rem",
                        color: "var(--text-light)",
                      }}
                    >
                      * Please upload the bank slip below or send to our
                      WhatsApp after payment.
                    </p>
                    <div className="form-group mt-3">
                      <label className="form-label">
                        Upload Bank Slip (Image/PDF) *
                      </label>
                      <input
                        type="file"
                        id="bank-slip-upload"
                        className={`form-input ${formErrors.bankSlip ? "input-error" : ""}`}
                        accept="image/*,.pdf"
                        onChange={handleFileChange}
                      />
                      {formErrors.bankSlip && (
                        <p className="field-error">{formErrors.bankSlip}</p>
                      )}
                      {formData.bankSlip && (
                        <p
                          className="mt-2 text-success"
                          style={{
                            fontSize: "0.8rem",
                            color: "var(--success-color)",
                          }}
                        >
                          ✓ File selected successfully
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="checkout-info-banner"
                style={{
                  display: "flex",
                  gap: "1rem",
                  background: "#f8f9fa",
                  padding: "1.5rem",
                  borderRadius: "12px",
                  border: "1px dashed #ddd",
                }}
              >
                <ShieldCheck color="var(--primary-color)" />
                <p style={{ fontSize: "0.9rem", color: "#666" }}>
                  Your personal data will be used to process your order, support
                  your experience throughout this website, and for other
                  purposes described in our privacy policy.
                </p>
              </div>

              <button
                type="submit"
                className="btn btn-primary place-order-action"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Placing Order..." : "Confirm & Place Order"}
              </button>
            </form>
          </main>

          <aside className="checkout-summary-panel">
            <h2>Order Summary</h2>

            <div className="summary-items-list">
              {cart.items.map((item) => (
                <div key={item._id} className="summary-item-row">
                  <span>
                    {item.product?.title}{" "}
                    <span className="item-qty">× {item.quantity}</span>
                  </span>
                  <span>
                    Rs. {(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="coupon-area">
              <label className="form-label" style={{ fontSize: "0.85rem" }}>
                Have a coupon?
              </label>
              <div className="coupon-control">
                <input
                  type="text"
                  className="form-input"
                  placeholder="CODE"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                />
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleApplyCoupon}
                  style={{ whiteSpace: "nowrap" }}
                >
                  Apply
                </button>
              </div>
              {appliedCoupon && (
                <p
                  style={{
                    color: "var(--success-text)",
                    fontSize: "0.85rem",
                    marginTop: "-1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <Check size={14} /> Coupon "{appliedCoupon.code}" applied!
                </p>
              )}
            </div>

            <div className="total-stack">
              <div className="total-row">
                <span>Subtotal</span>
                <span>Rs. {subtotal.toLocaleString()}</span>
              </div>
              <div className="total-row">
                <span>Delivery Fee</span>
                <span>Rs. {deliveryFee.toLocaleString()}</span>
              </div>
              {discount > 0 && (
                <div
                  className="total-row"
                  style={{ color: "var(--success-text)" }}
                >
                  <span>Discount</span>
                  <span>- Rs. {discount.toLocaleString()}</span>
                </div>
              )}
              <div className="total-row grand">
                <span>Total</span>
                <span>Rs. {total.toLocaleString()}</span>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Order Success Modal */}
      <StatusModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          navigate("/customer/dashboard");
        }}
        type="success"
        title="Order Placed!"
        message={`Thank you for your order. Reference: #${orderRef}. You will receive an email confirmation shortly.${formData.paymentMethod === "Bank Transfer" ? " Please complete your bank transfer to confirm your order." : ""}`}
        actions={
          <div
            className="success-actions"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "100%",
            }}
          >
            <button
              className="btn btn-primary"
              style={{
                width: "100%",
                padding: "1.125rem",
                borderRadius: "16px",
                fontWeight: 700,
              }}
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/customer/dashboard");
              }}
            >
              Track My Order
            </button>
            <button
              className="btn btn-outline-dark"
              style={{
                width: "100%",
                padding: "1.125rem",
                borderRadius: "16px",
                fontWeight: 700,
                borderColor: "var(--primary-color)",
                color: "var(--primary-color)",
              }}
              onClick={() => {
                setShowSuccessModal(false);
                navigate("/books");
              }}
            >
              Continue Shopping
            </button>
          </div>
        }
      />
      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
};

export default Checkout;
