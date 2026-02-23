// ============================================
// ProductDetail Component (Premium Redesign)
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// Purpose: View product details and reviews (E2.6, E2.8) - Editorial Layout
// ============================================

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../E1_UserAndRoleManagement/context/AuthContext";
import {
  Star,
  ShoppingCart,
  ChevronLeft,
  ShieldCheck,
  Truck,
  RefreshCw,
  ThumbsUp,
} from "lucide-react";
import toast from "react-hot-toast";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshCounts } = useAuth();

  // ─────────────────────────────────
  // State Variables
  // ─────────────────────────────────
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

  // ─────────────────────────────────
  // Side Effects
  // ─────────────────────────────────
  useEffect(() => {
    fetchProductDetails();
    fetchRelatedProducts();
    // Re-fetch recently viewed whenever id changes
    const viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
    setRecentlyViewed(viewed.filter((item) => item._id !== id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const addToRecentlyViewed = (productData) => {
    try {
      let viewed = JSON.parse(localStorage.getItem("recentlyViewed")) || [];
      viewed = viewed.filter((item) => item._id !== productData._id);
      viewed.unshift({
        _id: productData._id,
        title: productData.title,
        image: productData.image,
        price: productData.price,
      });
      if (viewed.length > 4) viewed.pop();
      localStorage.setItem("recentlyViewed", JSON.stringify(viewed));
      setRecentlyViewed(viewed.filter((item) => item._id !== id));
    } catch (e) {
      console.error("Error saving recently viewed", e);
    }
  };

  // ─────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────
  const fetchProductDetails = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data.product);
      setReviews(res.data.reviews || []);
      addToRecentlyViewed(res.data.product);
      setActiveImage("main"); // Reset image state
      setQuantity(1); // Reset quantity
      window.scrollTo(0, 0); // Scroll to top on load
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
              author: product.author,
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
        "Error submitting to review: " +
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
    // ─────────────────────────────────
    // Render
    // ─────────────────────────────────
    return (
      <div className="product-loading-screen">
        <div className="loader"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="error-screen">
        <h2>Book not found</h2>
        <button onClick={() => navigate("/books")} className="btn-primary">
          Return to Catalog
        </button>
      </div>
    );
  }

  return (
    <div className="editorial-product-page">
      {/* Top Navigation Bar */}
      <nav className="product-nav-bar">
        <div className="nav-container">
          <button className="nav-back-btn" onClick={() => navigate("/books")}>
            <ChevronLeft size={20} />
            <span>Catalog</span>
          </button>
          <div className="nav-breadcrumbs">
            <span>Books</span>
            <span className="separator">/</span>
            <span>{product.grade}</span>
            <span className="separator">/</span>
            <span className="current">{product.title}</span>
          </div>
        </div>
      </nav>

      <main className="product-showcase">
        {/* Left: Sticky Image Gallery */}
        <section className="product-gallery-view">
          <div className="image-presentation">
            {product.isFlashSale && (
              <span className="flash-badge">Flash Sale</span>
            )}
            <div className="main-image-wrapper">
              <img
                src={
                  activeImage === "main"
                    ? product.image
                    : product.backCoverImage || product.image
                }
                alt={product.title}
                className="showcase-img"
              />
            </div>
            {product.backCoverImage && (
              <div className="image-toggles">
                <button
                  className={`toggle-dot ${activeImage === "main" ? "active" : ""}`}
                  onClick={() => setActiveImage("main")}
                  aria-label="View front cover"
                />
                <button
                  className={`toggle-dot ${activeImage === "back" ? "active" : ""}`}
                  onClick={() => setActiveImage("back")}
                  aria-label="View back cover"
                />
              </div>
            )}
          </div>
        </section>

        {/* Right: Editorial Content */}
        <section className="product-editorial-content">
          <header className="content-header">
            <h1 className="book-title">{product.title}</h1>
            {product.titleSinhala && (
              <h2 className="book-title-sinhala">{product.titleSinhala}</h2>
            )}

            <div className="book-meta">
              <div className="author-meta">
                <span className="label">By</span>
                <span className="value">{product.author}</span>
              </div>
              <div className="rating-meta">
                <div className="star-display">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={
                        i < Math.floor(product.averageRating || 0)
                          ? "var(--gold-medium)"
                          : "none"
                      }
                      stroke={
                        i < Math.floor(product.averageRating || 0)
                          ? "var(--gold-medium)"
                          : "#ccc"
                      }
                    />
                  ))}
                </div>
                <span className="rating-score">
                  {Number(product.averageRating || 0).toFixed(1)}
                </span>
                <a href="#reviews" className="review-jump">
                  ({product.totalReviews || 0} reviews)
                </a>
              </div>
            </div>
          </header>

          <div className="pricing-block">
            <div className="price-display">
              {product.hasDiscount && (
                <span className="original-price">
                  Rs. {Number(product.originalPrice).toLocaleString()}
                </span>
              )}
              <div className="current-price">
                <span className="currency">Rs.</span>
                <span className="value">
                  {Number(product.price).toLocaleString()}
                </span>
              </div>
            </div>

            <div
              className={`availability-status ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}
            >
              {product.stock > 0 ? (
                <>
                  <span className="status-indicator" />
                  Available to dispatch ({product.stock} left)
                </>
              ) : (
                "Currently out of print"
              )}
            </div>
          </div>

          <div className="action-block">
            <div className="qty-selector">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={product.stock === 0}
              >
                -
              </button>
              <input type="number" value={quantity} readOnly />
              <button
                onClick={() =>
                  setQuantity(Math.min(product.stock, quantity + 1))
                }
                disabled={product.stock === 0 || quantity >= product.stock}
              >
                +
              </button>
            </div>

            <button
              className="editorial-add-btn"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              <ShoppingCart size={20} />
              {product.stock === 0 ? "Notify When Available" : "Add to Cart"}
            </button>
          </div>

          <div className="trust-indicators">
            <div className="indicator">
              <ShieldCheck size={20} />
              <span>Authentic Publication</span>
            </div>
            <div className="indicator">
              <Truck size={20} />
              <span>Islandwide Delivery</span>
            </div>
            <div className="indicator">
              <RefreshCw size={20} />
              <span>Easy Returns</span>
            </div>
          </div>

          <article className="book-synopsis">
            <h3>Synopsis</h3>
            <p>{product.description}</p>
          </article>

          <aside className="book-specifications">
            <h3>Details</h3>
            <ul className="spec-list">
              <li>
                <span className="spec-key">ISBN</span>
                <span className="spec-val">{product.isbn}</span>
              </li>
              <li>
                <span className="spec-key">Category</span>
                <span className="spec-val">
                  {product.grade} / {product.subject}
                </span>
              </li>
              {product.examType && (
                <li>
                  <span className="spec-key">Exam</span>
                  <span className="spec-val">{product.examType}</span>
                </li>
              )}
              {product.pageCount > 0 && (
                <li>
                  <span className="spec-key">Pages</span>
                  <span className="spec-val">{product.pageCount}</span>
                </li>
              )}
              <li>
                <span className="spec-key">Language</span>
                <span className="spec-val">Sinhala / English</span>
              </li>
            </ul>
          </aside>
        </section>
      </main>

      {/* Reviews Section */}
      <section id="reviews" className="editorial-reviews">
        <div className="reviews-container">
          <div className="reviews-header-block">
            <h2>Reader Perspectives</h2>
            <p className="reviews-subtitle">
              Insights from those who have read this publication.
            </p>
          </div>

          <div className="reviews-layout">
            <div className="review-composition">
              <h3>Share Your Thoughts</h3>
              <form
                className="elegant-review-form"
                onSubmit={handleSubmitReview}
              >
                <div className="form-group">
                  <label>Rating</label>
                  <div className="rating-select-wrapper">
                    <select
                      value={reviewForm.rating}
                      onChange={(e) =>
                        setReviewForm({
                          ...reviewForm,
                          rating: parseInt(e.target.value),
                        })
                      }
                    >
                      <option value="5">5 - Masterpiece</option>
                      <option value="4">4 - Excellent</option>
                      <option value="3">3 - Good</option>
                      <option value="2">2 - Fair</option>
                      <option value="1">1 - Poor</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Your Review</label>
                  <textarea
                    value={reviewForm.comment}
                    onChange={(e) =>
                      setReviewForm({ ...reviewForm, comment: e.target.value })
                    }
                    placeholder="Describe your experience with this book..."
                    required
                  />
                </div>
                <button type="submit" className="submit-elegance-btn">
                  Publish Review
                </button>
              </form>
            </div>

            <div className="reviews-feed">
              {reviews.length === 0 ? (
                <div className="empty-reviews">
                  <p>Be the first to share your perspective on this book.</p>
                </div>
              ) : (
                reviews.map((review) => (
                  <div key={review._id} className="editorial-review-item">
                    <div className="review-meta-top">
                      <div className="reviewer">
                        <span className="name">
                          {review.user?.name || "Anonymous Reader"}
                        </span>
                        <span className="verified-badge">Verified</span>
                      </div>
                      <span className="date">
                        {new Date(review.createdAt).toLocaleDateString(
                          undefined,
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          },
                        )}
                      </span>
                    </div>

                    <div className="review-stars-display">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={
                            i < review.rating ? "var(--gold-medium)" : "none"
                          }
                          stroke={
                            i < review.rating ? "var(--gold-medium)" : "#eaeaea"
                          }
                        />
                      ))}
                    </div>

                    <p className="review-text">{review.comment}</p>

                    <div className="review-actions">
                      <button
                        className={`vote-helpful ${
                          review.helpfulVotes &&
                          localStorage.getItem("token") &&
                          review.helpfulVotes.includes(
                            JSON.parse(
                              atob(localStorage.getItem("token").split(".")[1]),
                            ).id,
                          )
                            ? "voted"
                            : ""
                        }`}
                        onClick={() => handleToggleHelpful(review._id)}
                      >
                        <ThumbsUp size={14} />
                        Found Helpful ({review.helpfulVotes?.length || 0})
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      {(relatedProducts.length > 0 || recentlyViewed.length > 0) && (
        <section className="product-discovery">
          <div className="discovery-container">
            {relatedProducts.length > 0 && (
              <div className="discovery-section">
                <h2>Curated For You</h2>
                <div className="discovery-grid">
                  {relatedProducts.slice(0, 4).map((item) => (
                    <div
                      key={item._id}
                      className="discovery-card"
                      onClick={() => navigate(`/books/${item._id}`)}
                    >
                      <div className="card-img-wrap">
                        <img
                          src={item.image || "https://via.placeholder.com/200"}
                          alt={item.title}
                        />
                      </div>
                      <div className="card-info">
                        <h4>{item.title}</h4>
                        <span className="card-price">
                          Rs. {Number(item.price).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {recentlyViewed.length > 0 && (
              <div className="discovery-section">
                <h2>Recently Contextualized</h2>
                <div className="discovery-grid">
                  {recentlyViewed.slice(0, 4).map((item) => (
                    <div
                      key={item._id}
                      className="discovery-card"
                      onClick={() => navigate(`/books/${item._id}`)}
                    >
                      <div className="card-img-wrap">
                        <img
                          src={item.image || "https://via.placeholder.com/200"}
                          alt={item.title}
                        />
                      </div>
                      <div className="card-info">
                        <h4>{item.title}</h4>
                        <span className="card-price">
                          Rs. {Number(item.price).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductDetail;
