// Epic: E2 - Product Catalog (Home Page)
// Owner: IT24100548 (Galagama S.T)
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  BookOpen,
  GraduationCap,
  FileText,
  ChevronRight,
  Star,
  ShoppingCart,
  Users,
  Award,
  MapPin,
  Tags,
} from "lucide-react";
import "./Home.css";

const TESTIMONIALS = [
  {
    name: "Nimesha Rathnayake",
    grade: "A/L Science Student – Kandy",
    initials: "NR",
    quote:
      "The Biology and Chemistry revision guides from Methsara made my A/L preparation so much smoother. Clear diagrams and focused explanations – I scored an A for both!",
  },
  {
    name: "Kavindu Jayasooriya",
    grade: "O/L Student – Colombo",
    initials: "KJ",
    quote:
      "I bought the Grade 11 Maths past paper book and it covered every key topic. The online order arrived in 2 days and the quality was excellent.",
  },
  {
    name: "Tharushi Wickramasinghe",
    grade: "Grade 9 Student – Galle",
    initials: "TW",
    quote:
      "My daughter uses the Sinhala and Science guides from Methsara every day. Her marks improved by 30% within a term. Highly recommend to every parent!",
  },
];

const STATS = [
  { icon: <Users size={28} />, value: "10,000+", label: "Students Served" },
  { icon: <BookOpen size={28} />, value: "150+", label: "Book Titles" },
  { icon: <Award size={28} />, value: "14+", label: "Years of Excellence" },
  { icon: <MapPin size={28} />, value: "3", label: "Branch Locations" },
];

const MAIN_CATEGORIES = [
  { name: "A/L", icon: <GraduationCap size={22} /> },
  { name: "Grade 6", icon: <Tags size={22} /> },
  { name: "Grade 7", icon: <Tags size={22} /> },
  { name: "Grade 8", icon: <Tags size={22} /> },
  { name: "Grade 9", icon: <Tags size={22} /> },
  { name: "Grade 10", icon: <Tags size={22} /> },
  { name: "Grade 11", icon: <Tags size={22} /> },
  { name: "Others", icon: <BookOpen size={22} /> },
];

const Home = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [activeCampaigns, setActiveCampaigns] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [loadingCats, setLoadingCats] = useState(true);
  const [addingToCart, setAddingToCart] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const res = await axios.get("/api/products?sort=popular&limit=4");
        const books = (res.data.products || []).slice(0, 4);
        setBestSellers(books);
      } catch {
        setBestSellers([]);
      } finally {
        setLoadingBooks(false);
      }
    };

    const fetchActiveCampaigns = async () => {
      try {
        const res = await axios.get("/api/coupons/campaigns/active");
        setActiveCampaigns(res.data.campaigns || []);
      } catch (error) {
        console.error("Error fetching active campaigns", error);
      }
    };

    const fetchCategories = async () => {
      try {
        const res = await axios.get("/api/products/categories");
        setCategories(res.data.categories || []);
      } catch {
        setCategories([]);
      } finally {
        setLoadingCats(false);
      }
    };

    fetchBestSellers();
    fetchActiveCampaigns();
    fetchCategories();
  }, []);

  const handleAddToCart = async (productId, e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    setAddingToCart(productId);
    try {
      await axios.post(
        "/api/cart/add",
        { productId, quantity: 1 },
        { headers: { Authorization: `Bearer ${token}` } },
      );
    } catch {
      // silently fail – user can still click product
    } finally {
      setAddingToCart(null);
    }
  };

  return (
    <main className="home-page" role="main">
      {/* ── Hero Section ── */}
      <section className="hero-section">
        <div className="hero-bg-shapes">
          <div className="hero-shape hero-shape-1" />
          <div className="hero-shape hero-shape-2" />
        </div>
        <div className="container">
          <div className="hero-content">
            <span className="hero-badge">
              📚 Trusted by Sri Lankan Students
            </span>
            <h1 className="hero-title">
              Explore your world <br />
              <span className="highlight">through books</span>
            </h1>
            <p className="hero-subtitle">
              Methsara Publications provides trusted exam-focused textbooks and
              study guides for Grade 6 through Advanced Level.
            </p>
            <div className="hero-buttons">
              <Link to="/books" className="btn btn-primary">
                Browse Collection
              </Link>
              <Link
                to="/about"
                className="btn btn-outline"
                style={{ borderColor: "white", color: "white" }}
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Active Campaigns Banner ── */}
      {activeCampaigns.length > 0 && (
        <section className="campaign-banner-wrapper">
          <div className="container">
            {activeCampaigns.map((campaign, idx) => (
              <div
                key={campaign._id}
                className="campaign-banner fade-in-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="campaign-banner-content">
                  <span className="campaign-type-badge">
                    {campaign.type} Offer
                  </span>
                  <h2 className="campaign-banner-title">{campaign.name}</h2>
                  <p className="campaign-banner-desc">{campaign.description}</p>
                </div>
                <div className="campaign-banner-action">
                  <div className="discount-circle">
                    <strong>{campaign.discountValue}</strong>
                    <span>
                      {campaign.discountType === "Percentage"
                        ? "% OFF"
                        : "LKR OFF"}
                    </span>
                  </div>
                  <Link to="/books" className="btn btn-campaign">
                    Shop Now <ChevronRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── Shop by Category ── */}
      <section className="section categories-section">
        <div className="container">
          <div className="section-header">
            <h2>
              Explore by <span className="highlight">Category</span>
            </h2>
            <Link to="/books" className="btn-chip">
              View All
            </Link>
          </div>
          <div className="category-flex-grid">
            {MAIN_CATEGORIES.map((cat) => (
              <Link
                key={cat.name}
                to={`/books?category=${encodeURIComponent(cat.name)}`}
                className="cat-pill-card"
              >
                <div className="cat-card-icon-min">{cat.icon}</div>
                <div className="cat-card-min-info">
                  <strong>{cat.name}</strong>
                  <span>Explore books</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Best Sellers ── */}
      <section className="section best-sellers">
        <div className="container">
          <div className="section-header">
            <h2>Best Sellers</h2>
            <Link to="/books" className="btn-chip">
              View All
            </Link>
          </div>
          <div className="grid grid-4">
            {loadingBooks
              ? [1, 2, 3, 4].map((i) => (
                  <div key={i} className="home-book-card skeleton-card">
                    <div className="skeleton-img" />
                    <div className="skeleton-line" />
                    <div className="skeleton-line short" />
                  </div>
                ))
              : bestSellers.length > 0
                ? bestSellers.map((book) => (
                    <Link
                      key={book._id}
                      to={`/books/${book._id}`}
                      className="home-book-card"
                    >
                      <div className="book-image-container">
                        <div className="book-shadow-overlay" />
                        <img
                          src={
                            book.image ||
                            `https://via.placeholder.com/300x400?text=${encodeURIComponent(book.title)}`
                          }
                          alt={book.title}
                          loading="lazy"
                          className="home-book-img"
                        />
                        <button
                          className="quick-cart-btn"
                          onClick={(e) => handleAddToCart(book._id, e)}
                          disabled={addingToCart === book._id}
                          title="Add to Cart"
                          aria-label={`Add ${book.title} to cart`}
                        >
                          {addingToCart === book._id ? (
                            "..."
                          ) : (
                            <ShoppingCart size={16} aria-hidden="true" />
                          )}
                        </button>
                      </div>
                      <div className="book-info-content">
                        <h3>{book.title}</h3>
                        <p className="author">
                          {book.author || "Methsara Authors"}
                        </p>
                        {book.averageRating > 0 && (
                          <div className="book-rating">
                            <Star size={12} fill="currentColor" />
                            <span>{book.averageRating}</span>
                          </div>
                        )}
                        <p className="price">
                          Rs. {book.price?.toLocaleString()}
                        </p>
                      </div>
                    </Link>
                  ))
                : /* Fallback placeholders if DB empty */
                  [
                    { title: "Grade 11 Science", price: 650 },
                    { title: "Grade 10 Maths", price: 580 },
                    { title: "A/L Physics", price: 750 },
                    { title: "Grade 9 Sinhala", price: 520 },
                  ].map((book, i) => (
                    <Link key={i} to="/books" className="home-book-card">
                      <div className="book-image-container">
                        <div className="book-shadow-overlay" />
                        <img
                          src={`https://via.placeholder.com/300x400/2563EB/FFFFFF?text=${encodeURIComponent(book.title)}`}
                          alt={book.title}
                          loading="lazy"
                          className="home-book-img"
                        />
                      </div>
                      <div className="book-info-content">
                        <h3>{book.title}</h3>
                        <p className="author">Methsara Authors</p>
                        <p className="price">Rs. {book.price}</p>
                      </div>
                    </Link>
                  ))}
          </div>
        </div>
      </section>

      {/* ── Educational Books – Split Layout ── */}
      <section className="section educational-section">
        <div className="container">
          <div className="educational-split">
            <div className="split-image-box">
              <img
                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Students studying with Methsara books"
                loading="lazy"
              />
              <div className="split-image-badge">
                <Award size={18} />
                <span>Award-Winning Publisher</span>
              </div>
            </div>

            <div className="split-text">
              <h2>Educational Books</h2>
              <span className="sub-gold">Curated for Excellence</span>
              <p
                className="hero-subtitle"
                style={{
                  color: "var(--text-secondary)",
                  margin: "0 0 3rem 0",
                  textAlign: "left",
                }}
              >
                Our collection includes carefully selected textbooks, past
                papers, and revision guides designed to help students master
                their subjects with confidence.
              </p>

              <div className="feature-list">
                <div className="feature-item">
                  <div className="icon-square">
                    <BookOpen size={24} />
                  </div>
                  <div className="feature-info">
                    <h4>Grade 6–11 Essentials</h4>
                    <p
                      style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                    >
                      Comprehensive guides for core national subjects.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="icon-square">
                    <GraduationCap size={24} />
                  </div>
                  <div className="feature-info">
                    <h4>G.C.E O/L &amp; A/L</h4>
                    <p
                      style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                    >
                      Master guides with revision notes and papers.
                    </p>
                  </div>
                </div>

                <div className="feature-item">
                  <div className="icon-square">
                    <FileText size={24} />
                  </div>
                  <div className="feature-info">
                    <h4>Advanced Level</h4>
                    <p
                      style={{ color: "var(--text-light)", fontSize: "0.9rem" }}
                    >
                      Specialized revisions for Science and Commerce streams.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/books"
                className="btn btn-primary"
                style={{ marginTop: "1rem" }}
              >
                Explore Collection <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey Banner ── */}
      <section className="container">
        <div className="journey-banner">
          <h2>
            Start Your Journey to <br />{" "}
            <span className="banner-gold">Academic Success</span>
          </h2>
          <p className="hero-subtitle">
            Join thousands of students who trust Methsara Publications for their
            exam preparation and academic journey.
          </p>
          <Link to="/books" className="btn btn-gold">
            Order Your Books Now
          </Link>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section
        className="section testimonials-section"
        style={{ background: "#fcfcfc" }}
      >
        <div className="container">
          <div
            className="section-header"
            style={{ justifyContent: "center", textAlign: "center" }}
          >
            <h2>What Students Say ⭐</h2>
          </div>

          <div className="grid grid-3">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-avatar">{t.initials}</div>
                <div className="user-meta">
                  <h4>{t.name}</h4>
                  <span>{t.grade}</span>
                </div>
                <div className="testimonial-stars">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={14} fill="currentColor" />
                  ))}
                </div>
                <p
                  style={{
                    marginTop: "1rem",
                    fontStyle: "italic",
                    color: "var(--text-secondary)",
                    lineHeight: 1.7,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
