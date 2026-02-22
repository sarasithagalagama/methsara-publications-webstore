// ============================================
// ReviewModeration Component
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// Purpose: Moderate customer reviews (E2.9)
// ============================================

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Star, CheckCircle, XCircle } from "lucide-react";
import "./ReviewModeration.css";

const ReviewModeration = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const res = await axios.get("/api/reviews", config);
      setReviews(res.data.reviews || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching reviews:", error);
      setLoading(false);
    }
  };

  const handleAction = async (id, action) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `/api/reviews/${id}/${action}`,
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );
      fetchReviews();
    } catch (error) {
      console.error(`Error ${action}ing review:`, error);
    }
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="review-moderation-container">
      <h2>Review Moderation</h2>
      <div className="reviews-grid">
        {reviews
          .filter((r) => r.status === "Pending")
          .map((review) => (
            <div key={review._id} className="review-card">
              <div className="review-header">
                <span className="product-name">{review.product?.title}</span>
                <span className="rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < review.rating ? "gold" : "none"}
                      stroke={i < review.rating ? "gold" : "currentColor"}
                    />
                  ))}
                </span>
              </div>
              <p className="review-comment">"{review.comment}"</p>
              <p className="review-author">- {review.user?.name}</p>
              <div className="review-actions">
                <button
                  className="btn-approve"
                  onClick={() => handleAction(review._id, "approve")}
                >
                  <CheckCircle size={16} /> Approve
                </button>
                <button
                  className="btn-reject"
                  onClick={() => handleAction(review._id, "reject")}
                >
                  <XCircle size={16} /> Reject
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewModeration;
