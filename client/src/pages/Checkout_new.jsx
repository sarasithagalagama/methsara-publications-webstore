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
    deliveryAddress: {
      street: "",
      city: "",
      postalCode: "",
      phone: "",
    },
    paymentMethod: "COD",
    bankSlip: null,
  });

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/cart", {
        headers: { Authorization: `Bearer ${token}` },
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
