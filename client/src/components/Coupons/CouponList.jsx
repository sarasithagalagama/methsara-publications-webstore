// ============================================
// Coupon List Component
// Epic: E6 - Promotions & Loyalty
// Owner: IT24101266 (Perera M.U.E)
// Features: View coupons, Create/Edit/Delete
// ============================================

import React, { useState, useEffect } from "react";
import couponService from "../../services/couponService";
import ConfirmModal from "../../components/common/ConfirmModal";

function CouponList() {
  const [coupons, setCoupons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    id: null,
  });

  const closeConfirm = () => setConfirmModal({ isOpen: false, id: null });

  useEffect(() => {
    loadCoupons();
  }, []);

  const loadCoupons = async () => {
    try {
      const response = await couponService.getCoupons();
      setCoupons(response.coupons || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteCoupon = (id) => {
    setConfirmModal({ isOpen: true, id });
  };

  const processDelete = async () => {
    const id = confirmModal.id;
    closeConfirm();
    try {
      await couponService.deleteCoupon(id);
      loadCoupons();
    } catch (err) {
      alert("Failed to delete coupon");
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Coupon Management</h1>
        <p>Create and manage promotional coupons</p>
      </div>

      <div className="grid grid-2">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="card">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
              }}
            >
              <h3>{coupon.code}</h3>
              <span
                className={`badge ${coupon.isActive ? "badge-success" : "badge-error"}`}
              >
                {coupon.isActive ? "Active" : "Inactive"}
              </span>
            </div>

            <p style={{ marginTop: "1rem" }}>{coupon.description}</p>

            <div style={{ marginTop: "1rem" }}>
              <p>
                <strong>Discount:</strong>{" "}
                {coupon.discountType === "percentage"
                  ? `${coupon.discountValue}%`
                  : `Rs. ${coupon.discountValue}`}
              </p>
              <p>
                <strong>Min Purchase:</strong> Rs.{" "}
                {coupon.minPurchaseAmount || 0}
              </p>
              <p>
                <strong>Used:</strong> {coupon.usedCount} /{" "}
                {coupon.maxUsageCount || "∞"}
              </p>
              <p>
                <strong>Valid Until:</strong>{" "}
                {new Date(coupon.validUntil).toLocaleDateString()}
              </p>
            </div>

            <div style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => deleteCoupon(coupon._id)}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {coupons.length === 0 && (
        <div className="card">
          <p>No coupons found. Create your first promotional coupon!</p>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={closeConfirm}
        onConfirm={processDelete}
        title="Delete Coupon"
        message="Are you sure you want to delete this coupon? This action cannot be undone."
        confirmText="Delete Coupon"
        variant="danger"
      />
    </div>
  );
}

export default CouponList;
