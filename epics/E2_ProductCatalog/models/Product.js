// ============================================
// DEMO MARKER: Product Model
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// Purpose: Educational product management
// ============================================

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  // Basic Product Information
  title: {
    type: String,
    required: [true, "Book title is required"],
    trim: true,
  },
  titleSinhala: {
    type: String,
    trim: true,
  },
  author: {
    type: String,
    required: [true, "Author name is required"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
  },
  isbn: {
    type: String,
    required: [true, "ISBN is required"],
    unique: true,
    trim: true,
  },
  pageCount: {
    type: Number,
    default: 0,
  },

  // Pricing & Sales
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
  },
  isFlashSale: {
    type: Boolean,
    default: false,
  },
  displayOrder: {
    type: Number,
    default: 0,
  },

  // Categories (Educational)
  category: {
    type: String,
    default: "General",
  },
  supplier: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Supplier",
  },
  grade: {
    type: String,
    required: [true, "Grade is required"],
    enum: [
      "Grade 6",
      "Grade 7",
      "Grade 8",
      "Grade 9",
      "Grade 10",
      "Grade 11",
      "Grade 12",
      "Grade 13",
      "Other",
    ],
  },
  subject: {
    type: String,
    required: [true, "Subject is required"],
  },
  examType: {
    type: String,
    enum: ["O/L", "A/L", "Scholarship", "General", "Other"],
    default: "General",
  },
  stock: {
    type: Number,
    default: 0,
  },

  // Images
  image: {
    type: String,
    default: "https://via.placeholder.com/300x400?text=No+Image",
  },
  backCoverImage: {
    type: String,
    default: "",
  },
  images: [
    {
      url: String,
      alt: String,
    },
  ],

  // Product Status
  isActive: {
    type: Boolean,
    default: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },

  // Reviews & Ratings
  rating: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      rating: {
        type: Number,
        min: 1,
        max: 5,
      },
      comment: String,
      isVerifiedPurchase: Boolean,
      status: {
        type: String,
        enum: ["pending", "approved", "rejected"],
        default: "pending",
      },
      helpfulVotes: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  averageRating: {
    type: Number,
    default: 0,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },

  // Analytics
  viewCount: {
    type: Number,
    default: 0,
  },
  purchaseCount: {
    type: Number,
    default: 0,
  },

  // Timestamps
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Middleware to keep 'rating' and 'averageRating' synced and update timestamp
productSchema.pre("save", function (next) {
  this.updatedAt = Date.now();

  if (this.reviews && this.reviews.length > 0) {
    const approvedReviews = this.reviews.filter((r) => r.status === "approved");
    if (approvedReviews.length > 0) {
      const sum = approvedReviews.reduce(
        (acc, review) => acc + review.rating,
        0,
      );
      this.averageRating = (sum / approvedReviews.length).toFixed(1);
      this.rating = this.averageRating;
      this.totalReviews = approvedReviews.length;
    }
  }

  next();
});

module.exports = mongoose.model("Product", productSchema);
