import React, { useState, useEffect } from "react";
import axios from "axios";
import { ShoppingCart, Gift, Loader } from "lucide-react";
import { useAuth } from "../../E1_UserAndRoleManagement/context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./GiftVouchers.css";

const GiftVouchers = () => {
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchVouchers();
  }, []);

  const fetchVouchers = async () => {
    try {
      const res = await axios.get("/api/gift-vouchers/products");
      setVouchers(res.data.products || []);
    } catch (error) {
      console.error("Error fetching vouchers:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = async (voucher) => {
    if (!user) {
      navigate("/?login=true");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "/api/cart/add",
        { productId: voucher._id, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      toast.success("Gift Voucher added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add to cart");
    }
  };

  return (
    <div className="gift-vouchers-page">
      <div className="vouchers-hero">
        <div className="container">
          <h1>Give the Gift of Knowledge</h1>
          <p>
            Methsara Publications Gift Vouchers are the perfect present for
            students. Choose a value and let them pick the books they need for
            their success.
          </p>
        </div>
      </div>

      <div className="container">
        {loading ? (
          <div className="voucher-loading">
            <div className="spinner"></div>
          </div>
        ) : (
          <div className="vouchers-grid">
            {vouchers.length === 0 ? (
              <div className="voucher-empty">
                <Gift
                  size={48}
                  style={{ marginBottom: "1rem", opacity: 0.3 }}
                />
                <h3>No Vouchers Available</h3>
                <p>Check back soon for new gift options.</p>
              </div>
            ) : (
              vouchers.map((voucher) => (
                <div key={voucher._id} className="voucher-card">
                  <div className="voucher-visual">
                    {voucher.image ? (
                      <img
                        src={voucher.image}
                        alt={voucher.title}
                        className="voucher-img"
                      />
                    ) : (
                      <Gift size={64} className="voucher-icon" />
                    )}
                    <div className="voucher-value-badge">
                      Rs. {voucher.price.toLocaleString()}
                    </div>
                  </div>

                  <div className="voucher-content">
                    <h3>{voucher.title}</h3>
                    <p>
                      {voucher.description ||
                        "Valid for all books on our store."}
                    </p>

                    <button
                      className="voucher-btn"
                      onClick={() => handleAddToCart(voucher)}
                    >
                      <ShoppingCart size={18} /> Add to Cart
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftVouchers;
