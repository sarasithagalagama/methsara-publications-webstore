// ============================================
// ProductDetail Component
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// Purpose: View product details and reviews (E2.6, E2.8)
// ============================================

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import {
  Star,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Book,
  ShieldCheck,
  Truck,
  RefreshCw,
  Info,
  ThumbsUp,
} from "lucide-react";
import toast from "react-hot-toast";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshCounts } = useAuth();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("main"); // "main" or "back"
  const [reviewForm, setReviewForm] = useState({
    rating: 5,
    comment: "",
  });

  useEffect(() => {
    fetchProductDetails();
    fetchRelatedProducts();
    // Re-fetch recently viewed whenever id changes
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(viewed.filter((item) => item._id !== id));
  }, [id]);

  const addToRecentlyViewed = (productData) => {
    try {
      let viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];

      // Remove if already exists to move it to top
      viewed = viewed.filter((item) => item._id !== productData._id);

      // Add to beginning
      viewed.unshift({
        _id: productData._id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
      });

      // Keep only last 6
      if (viewed.length > 6) {
        viewed.pop();
      }

      localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
      setRecentlyViewed(viewed.filter((item) => item._id !== id));
    } catch (e) {
      console.error("Error saving recently viewed", e);
    }
  };

  const fetchProductDetails = async () => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data.product);
      setReviews(res.data.reviews || []);
      addToRecentlyViewed(res.data.product);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedProducts = async () => {
    try {
      const res = await axios.get(`/api/products/${id}/related`);
      setRelatedProducts(res.data.products || []);
    } catch (error) {
      console.error("Error fetching related products:", error);
    }
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        let guestCart = JSON.parse(localStorage.getItem("guestCart")) || {
          items: [],
          totalAmount: 0,
        };
        const existingItemIndex = guestCart.items.findIndex(
          (item) => item.product._id === product._id,
        );

        if (existingItemIndex > -1) {
          guestCart.items[existingItemIndex].quantity += quantity;
        } else {
          guestCart.items.push({
            product: {
              _id: product._id,
              title: product.title,
              image: product.image,
              grade: product.grade,
              author: product.author, // needed for cart display
            },
            quantity,
            price: product.price,
          });
        }

        guestCart.totalAmount = guestCart.items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0,
        );
        localStorage.setItem("guestCart", JSON.stringify(guestCart));
        refreshCounts();
        toast.success("Added to guest cart!");
        return;
      }

      await axios.post(
        "/api/cart/add",
        { productId: id, quantity },
        { headers: { Authorization: `Bearer ${token}` } },
      );
      refreshCounts();
      toast.success("Added to cart!");
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error(
        "Error adding to cart: " +
          (error.response?.data?.message || error.message),
      );
    }
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login to submit a review");
        navigate("/login");
        return;
      }

      await axios.post(`/api/products/${id}/reviews`, reviewForm, {
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Review submitted! It will be visible after moderation.");
      setReviewForm({ rating: 5, comment: "" });
      fetchProductDetails();
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error(
        "Error submitting review: " +
          (error.response?.data?.message || error.message),
      );
    }
  };

  const handleToggleHelpful = async (reviewId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Please login to vote on reviews");
        navigate("/login");
        return;
      }

      const res = await axios.put(
        `/api/products/${id}/reviews/${reviewId}/helpful`,
        {},
        { headers: { Authorization: `Bearer ${token}` } },
      );

      // Update local state to reflect the change immediately
      setReviews(
        reviews.map((review) => {
          if (review._id === reviewId) {
            const currentUserId = JSON.parse(atob(token.split(".")[1])).id;
            let newHelpfulVotes = [...(review.helpfulVotes || [])];

            if (res.data.isHelpful) {
              newHelpfulVotes.push(currentUserId);
            } else {
              newHelpfulVotes = newHelpfulVotes.filter(
                (userId) => userId !== currentUserId,
              );
            }

            return { ...review, helpfulVotes: newHelpfulVotes };
          }
          return review;
        }),
      );
    } catch (error) {
      console.error("Error toggling helpful vote:", error);
      toast.error(
        "Error: " + (error.response?.data?.message || "Failed to submit vote"),
      );
    }
  };

  if (loading) {
    return <div className="loading">Loading book...</div>;
  }

  if (!product) {
    return <div className="error">Book not found</div>;
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumbs / Back button */}
        <button className="back-link" onClick={() => navigate(-1)}>
          <ChevronLeft size={18} /> Back to Catalog
        </button>

        <div className="product-main-layout">
          {/* Left: Image Gallery */}
          <div className="product-gallery-section">
            <div className="main-image-viewport">
              <img
                src={
                  activeImage === "main"
                    ? product.image
                    : product.backCoverImage || product.image
                }
                alt={product.title}
                className={`display-image ${activeImage === "back" ? "is-back" : ""}`}
              />
              {product.isFlashSale && (
                <div className="detail-flash-badge">FLASH SALE</div>
              )}
            </div>

            {product.backCoverImage && (
              <div className="gallery-thumbnails">
                <button
                  className={`thumb-btn ${activeImage === "main" ? "active" : ""}`}
                  onClick={() => setActiveImage("main")}
                >
                  <img src={product.image} alt="Front View" />
                  <span>Front</span>
                </button>
                <button
                  className={`thumb-btn ${activeImage === "back" ? "active" : ""}`}
                  onClick={() => setActiveImage("back")}
                >
                  <img src={product.backCoverImage} alt="Back View" />
                  <span>Back</span>
                </button>
              </div>
            )}

            <div className="trust-badges">
              <div className="trust-item">
                <ShieldCheck size={18} /> <span>Authentic Book</span>
              </div>
              <div className="trust-item">
                <Truck size={18} /> <span>Islandwide Delivery</span>
              </div>
              <div className="trust-item">
                <RefreshCw size={18} /> <span>Easy Returns</span>
              </div>
            </div>
          </div>

          {/* Right: Info Section */}
          <div className="product-info-section">
            <div className="info-header">
              <span className="info-category">
                {product.grade} • {product.subject}
              </span>
              <h1 className="info-title">{product.title}</h1>
              {product.titleSinhala && (
                <h2 className="info-title-sinhala">{product.titleSinhala}</h2>
              )}

              <div className="info-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill={
                        i < Math.floor(product.averageRating || 0)
                          ? "var(--gold-medium)"
                          : "none"
                      }
                      stroke={
                        i < Math.floor(product.averageRating || 0)
                          ? "var(--gold-medium)"
                          : "#ddd"
                      }
                    />
                  ))}
                </div>
                <span className="rating-num">
                  {Number(product.averageRating || 0).toFixed(1)}
                </span>
                <span className="review-link">
                  ({product.totalReviews || 0} Customer Reviews)
                </span>
              </div>
            </div>

            <div className="info-price-area">
              <div className="price-tag-container">
                {product.hasDiscount && (
                  <span className="old-price">
                    Rs. {Number(product.originalPrice).toLocaleString()}
                  </span>
                )}
                <div className="price-tag">
                  <span className="currency">Rs.</span>
                  <span className="amount">
                    {Number(product.price).toLocaleString()}
                  </span>
                </div>
              </div>
              <div
                className={`stock-status ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}
              >
                <div className="status-dot"></div>
                {product.stock > 0
                  ? `In Stock (${product.stock} copies)`
                  : "Currently Unavailable"}
              </div>
            </div>

            <div className="info-actions">
              <div className="quantity-control">
                <button
                  className="q-btn"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={product.stock === 0}
                >
                  {" "}
                  -{" "}
                </button>
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(
                      Math.min(
                        product.stock,
                        Math.max(1, parseInt(e.target.value) || 1),
                      ),
                    )
                  }
                  readOnly
                />
                <button
                  className="q-btn"
                  onClick={() =>
                    setQuantity(Math.min(product.stock, quantity + 1))
                  }
                  disabled={product.stock === 0 || quantity >= product.stock}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <button
                className="cart-primary-btn"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
              >
                <ShoppingCart size={20} />
                {product.stock === 0 ? "Notify Me" : "Add to Shopping Cart"}
              </button>
            </div>

            <div className="info-specs">
              <h3>
                <Info size={16} /> Book Specifications
              </h3>
              <div className="specs-grid">
                <div className="spec-item">
                  <label>ISBN</label>
                  <span>{product.isbn}</span>
                </div>
                <div className="spec-item">
                  <label>Author</label>
                  <span>{product.author}</span>
                </div>
                {product.pageCount > 0 && (
                  <div className="spec-item">
                    <label>Page Count</label>
                    <span>{product.pageCount} Pages</span>
                  </div>
                )}
                <div className="spec-item">
                  <label>Exam Type</label>
                  <span>{product.examType || "General"}</span>
                </div>
                <div className="spec-item">
                  <label>Language</label>
                  <span>Sinhala / English</span>
                </div>
              </div>
            </div>

            <div className="info-summary">
              <h3>
                <Book size={16} /> Short Summary
              </h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="reviews-section">
          <h2>Customer Reviews</h2>

          {/* Submit Review Form */}
          <div className="submit-review">
            <h3>Write a Review</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="rating-input">
                <label>Rating:</label>
                <select
                  value={reviewForm.rating}
                  onChange={(e) =>
                    setReviewForm({
                      ...reviewForm,
                      rating: parseInt(e.target.value),
                    })
                  }
                >
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <textarea
                value={reviewForm.comment}
                onChange={(e) =>
                  setReviewForm({ ...reviewForm, comment: e.target.value })
                }
                placeholder="Share your experience with this book..."
                rows="4"
                required
              />
              <button type="submit" className="submit-review-btn">
                Submit Review
              </button>
            </form>
          </div>

          {/* Display Reviews */}
          <div className="reviews-list">
            {reviews.length === 0 ? (
              <p className="no-reviews">
                No reviews yet. Be the first to review!
              </p>
            ) : (
              reviews.map((review) => (
                <div key={review._id} className="review-card">
                  <div className="review-header">
                    <span className="reviewer-name">
                      {review.user?.name || "Anonymous"}
                    </span>
                    <span className="review-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < review.rating ? "gold" : "none"}
                          stroke={i < review.rating ? "gold" : "#ccc"}
                        />
                      ))}
                    </span>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <div className="review-footer">
                    <span className="review-date">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                    <button
                      className={`helpful-btn ${
                        review.helpfulVotes &&
                        localStorage.getItem("token") &&
                        review.helpfulVotes.includes(
                          JSON.parse(
                            atob(localStorage.getItem("token").split(".")[1]),
                          ).id,
                        )
                          ? "active"
                          : ""
                      }`}
                      onClick={() => handleToggleHelpful(review._id)}
                    >
                      <ThumbsUp size={14} />
                      Helpful ({review.helpfulVotes?.length || 0})
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Related Books</h2>
            <div className="related-grid">
              {relatedProducts.map((relProduct) => (
                <div
                  key={relProduct._id}
                  className="related-card"
                  onClick={() => navigate(`/books/${relProduct._id}`)}
                >
                  <img
                    src={
                      relProduct.image ||
                      "https://via.placeholder.com/200?text=Book"
                    }
                    alt={relProduct.title}
                  />
                  <h4>{relProduct.title}</h4>
                  <p className="related-price">
                    Rs. {Number(relProduct.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recently Viewed Products */}
        {recentlyViewed.length > 0 && (
          <div className="related-products">
            <h2>Recently Viewed</h2>
            <div className="related-grid">
              {recentlyViewed.map((viewedProduct) => (
                <div
                  key={viewedProduct._id}
                  className="related-card"
                  onClick={() => {
                    navigate(`/books/${viewedProduct._id}`);
                    window.scrollTo(0, 0);
                  }}
                >
                  <img
                    src={
                      viewedProduct.image ||
                      "https://via.placeholder.com/200?text=Book"
                    }
                    alt={viewedProduct.title}
                  />
                  <h4>{viewedProduct.title}</h4>
                  <p className="related-price">
                    Rs. {Number(viewedProduct.price).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
