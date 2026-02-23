// ============================================
// Product Controller
// Epic: E2 - Product Catalog
// Owner: IT24101314 (Appuhami H A P L)
// Features: CRUD, Search, Filter
// ============================================

const Product = require("../models/Product");
const Review = require("../models/Review");
const Category = require("../models/Category");
const Order = require("../../E3_OrderAndTransaction/models/Order");
const Campaign = require("../../E6_PromotionAndLoyalty/models/Campaign");

// Get All Products with Search & Filter (E2.4, E2.5)
exports.getProducts = async (req, res) => {
  try {
    const {
      search,
      grade,
      subject,
      category,
      examType,
      minPrice,
      maxPrice,
      sort,
    } = req.query;

    // Build query
    let query = { isActive: true };

    // Search by title or ISBN
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { isbn: { $regex: search, $options: "i" } },
      ];
    }

    // Filter by grade
    if (grade) {
      if (grade.includes(",")) {
        query.grade = { $in: grade.split(",") };
      } else {
        query.grade = grade;
      }
    }

    // Filter by subject
    if (subject) {
      query.subject = subject;
    }

    // Filter by category
    if (category) {
      query.category = category;
    } else {
      // DEFAULT: Hide Gift Vouchers from general book listings
      query.category = { $ne: "Gift Voucher" };
    }

    // Filter by exam type
    if (examType) {
      query.examType = examType;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      query.price = {};
      if (minPrice) query.price.$gte = Number(minPrice);
      if (maxPrice) query.price.$lte = Number(maxPrice);
    }

    // Pagination
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12; // 12 items per page by default
    const skip = (page - 1) * limit;

    // Execute query with pagination
    let productsQuery = Product.find(query);

    // Sort
    if (sort === "price_asc") {
      productsQuery = productsQuery.sort({ price: 1 });
    } else if (sort === "price_desc") {
      productsQuery = productsQuery.sort({ price: -1 });
    } else if (sort === "title") {
      productsQuery = productsQuery.sort({ title: 1 });
    } else if (sort === "newest") {
      productsQuery = productsQuery.sort({ createdAt: -1 });
    } else if (sort === "popular") {
      productsQuery = productsQuery.sort({ purchaseCount: -1 });
    }

    // Get total count for pagination
    const total = await Product.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    const result = await productsQuery.skip(skip).limit(limit);

    // Apply campaign discounts
    const productsWithDiscounts = await Promise.all(
      result.map(async (p) => {
        const pricing = await Campaign.getDiscountedPrice(p);
        return {
          ...p.toObject(),
          originalPrice: pricing.originalPrice,
          price: pricing.discountedPrice, // Show discounted price as the main price
          hasDiscount: pricing.hasDiscount,
          discountAmount: pricing.discountAmount,
        };
      }),
    );

    res.status(200).json({
      success: true,
      count: productsWithDiscounts.length,
      total,
      totalPages,
      currentPage: page,
      products: productsWithDiscounts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get products",
      error: error.message,
    });
  }
};

// Get Single Product (E2.6)
exports.getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Increment view count
    product.viewCount += 1;
    await product.save();

    // Apply discount for single product view
    const pricing = await Campaign.getDiscountedPrice(product);
    const productWithDiscount = {
      ...product.toObject(),
      originalPrice: pricing.originalPrice,
      price: pricing.discountedPrice,
      hasDiscount: pricing.hasDiscount,
      discountAmount: pricing.discountAmount,
    };

    // Fetch approved reviews from the Review collection
    const approvedReviews = await Review.find({
      product: product._id,
      status: "approved",
    })
      .populate("user", "name")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      product: productWithDiscount,
      reviews: approvedReviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get product",
      error: error.message,
    });
  }
};

// Create Product (E2.1) - Admin only
exports.createProduct = async (req, res) => {
  try {
    const { isbn } = req.body;

    // Check if product with this ISBN already exists (including soft-deleted ones)
    const existingProduct = await Product.findOne({ isbn });

    if (existingProduct) {
      if (existingProduct.isActive) {
        return res.status(400).json({
          success: false,
          message: "Duplicate ISBN detected",
          error: "A book with this ISBN already exists in the catalog.",
        });
      } else {
        // If it was "deleted" (isActive: false), restore and update it
        // This avoids duplicate key errors while preserving ID for order history consistency
        const updatedProduct = await Product.findByIdAndUpdate(
          existingProduct._id,
          {
            ...req.body,
            isActive: true,
            // Reset stats for the "new" product entry
            viewCount: 0,
            purchaseCount: 0,
            reviews: [],
            rating: 0,
            averageRating: 0,
            totalReviews: 0,
          },
          { new: true, runValidators: true },
        );

        return res.status(201).json({
          success: true,
          message: "Product restored and updated successfully",
          product: updatedProduct,
        });
      }
    }

    const product = await Product.create(req.body);

    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.error("Product Creation Error:", error);
    // Fallback duplicate key handler (if race condition occurs)
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Duplicate ISBN detected",
        error: "A book with this ISBN already exists in the catalog.",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to create product",
      error: error.message,
      details: error.errors,
    });
  }
};

// Update Product (E2.1) - Admin only
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "Update failed: Duplicate ISBN",
        error: "This ISBN is already assigned to another book.",
      });
    }
    res.status(500).json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};

// Delete Product (E2.1) - Admin only
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true },
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
      error: error.message,
    });
  }
};

// Add Review (E2.8)
exports.addReview = async (req, res) => {
  try {
    const { rating, comment, title } = req.body;
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Add review as a proper document
    const review = await Review.create({
      product: product._id,
      user: req.user.id,
      rating,
      comment,
      title, // Optional
      status: "pending",
    });

    res.status(201).json({
      success: true,
      message:
        "Review submitted successfully. It will be visible after moderation.",
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to submit review",
      error: error.message,
    });
  }
};

// Toggle Helpful Vote for Review (E2.12)
exports.toggleReviewHelpful = async (req, res) => {
  try {
    const { id, reviewId } = req.params;
    const userId = req.user.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const review = product.reviews.id(reviewId);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    // Initialize helpfulVotes if it doesn't exist
    if (!review.helpfulVotes) {
      review.helpfulVotes = [];
    }

    const voteIndex = review.helpfulVotes.indexOf(userId);
    let isHelpful = false;

    if (voteIndex === -1) {
      // Add vote
      review.helpfulVotes.push(userId);
      isHelpful = true;
    } else {
      // Remove vote
      review.helpfulVotes.splice(voteIndex, 1);
    }

    await product.save();

    res.status(200).json({
      success: true,
      message: isHelpful ? "Marked as helpful" : "Helpful mark removed",
      isHelpful,
      helpfulCount: review.helpfulVotes.length,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating helpful vote",
      error: error.message,
    });
  }
};

// Moderate Review - Product Manager only (E2.9)
exports.moderateReview = async (req, res) => {
  try {
    const { reviewId } = req.params;
    const { status, moderationNote } = req.body;

    const review = await Review.findByIdAndUpdate(
      reviewId,
      {
        status,
        moderationNote,
        moderatedBy: req.user.id,
        moderatedAt: Date.now(),
      },
      { new: true },
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: "Review not found",
      });
    }

    res.status(200).json({
      success: true,
      message: `Review ${status} successfully`,
      review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error moderating review",
      error: error.message,
    });
  }
};

// Get Related Products (E2.10)
exports.getRelatedProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    const relatedProducts = await Product.find({
      _id: { $ne: product._id },
      grade: product.grade,
      subject: product.subject,
      isActive: true,
    })
      .limit(6)
      .sort({ averageRating: -1 });

    res.status(200).json({
      success: true,
      count: relatedProducts.length,
      products: relatedProducts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching related products",
      error: error.message,
    });
  }
};

// Get Product Analytics - Product Manager only (E2.11)
exports.getProductAnalytics = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Calculate sales trend (Last 7 Days)
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
    sevenDaysAgo.setHours(0, 0, 0, 0);

    const recentOrders = await Order.find({
      createdAt: { $gte: sevenDaysAgo },
      "items.product": product._id,
    });

    const salesTrendData = new Array(7).fill(0);
    const labels = [];

    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(d.toLocaleDateString("en-US", { weekday: "short" }));
    }

    recentOrders.forEach((order) => {
      const orderDate = new Date(order.createdAt);
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      const diffTime = today - orderDate;
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays >= 0 && diffDays < 7) {
        const item = order.items.find(
          (i) => i.product.toString() === product._id.toString(),
        );
        if (item) {
          salesTrendData[6 - diffDays] += item.quantity;
        }
      }
    });

    const analytics = {
      productId: product._id,
      productTitle: product.title,
      viewCount: product.viewCount,
      purchaseCount: product.purchaseCount,
      averageRating: product.averageRating,
      totalReviews: product.totalReviews,
      conversionRate:
        product.viewCount > 0
          ? ((product.purchaseCount / product.viewCount) * 100).toFixed(2)
          : 0,
      salesTrend: {
        labels,
        data: salesTrendData,
      },
    };

    res.status(200).json({
      success: true,
      analytics,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching analytics",
      error: error.message,
    });
  }
};

// Get all product categories with usage count (E2 - Category Management)
exports.getCategories = async (req, res) => {
  try {
    // 1. Fetch all explicit categories from collection
    let categories = await Category.find({ isActive: true }).sort({ name: 1 });

    // 2. Aggregate actual usage from products
    const usage = await Product.aggregate([
      { $match: { isActive: true } },
      { $group: { _id: "$category", productCount: { $sum: 1 } } },
    ]);

    // 3. Merge or Migrate: If a category exists on a product but not in Category collection, migrate it.
    const implicitCategories = usage.map((u) => u._id);
    const explicitCategoryNames = categories.map((c) => c.name);

    for (const u of usage) {
      if (!explicitCategoryNames.includes(u._id)) {
        // Auto-migrate implicit category
        const newCat = await Category.create({
          name: u._id,
          type: "general",
          productCount: u.productCount,
        });
        categories.push(newCat);
      }
    }

    // 4. Map usage counts to the categories list
    const finalCategories = categories.map((cat) => {
      const u = usage.find((item) => item._id === cat.name);
      return {
        _id: cat._id,
        name: cat.name,
        type: cat.type,
        description: cat.description,
        productCount: u ? u.productCount : 0,
        gradeLevel: cat.gradeLevel,
      };
    });

    res.status(200).json({
      success: true,
      categories: finalCategories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to get categories",
      error: error.message,
    });
  }
};

// Create a new category (E2 - Category Management)
exports.createCategory = async (req, res) => {
  try {
    const { name, type, description, gradeLevel } = req.body;

    if (!name || !name.trim()) {
      return res
        .status(400)
        .json({ success: false, message: "Category name is required" });
    }

    // Check if category already exists in collection
    const existing = await Category.findOne({
      name: name.trim(),
    });

    if (existing) {
      if (existing.isActive) {
        return res.status(400).json({
          success: false,
          message: `Category "${name.trim()}" already exists`,
        });
      } else {
        // Reactivate
        existing.isActive = true;
        existing.type = type || "general";
        existing.description = description || existing.description;
        existing.gradeLevel = gradeLevel || existing.gradeLevel;
        await existing.save();
        return res.status(200).json({
          success: true,
          message: `Category "${name.trim()}" reactivated.`,
          category: existing,
        });
      }
    }

    const category = await Category.create({
      name: name.trim(),
      type: type || "general",
      description,
      gradeLevel,
    });

    res.status(201).json({
      success: true,
      message: `Category "${name.trim()}" created successfully.`,
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create category",
      error: error.message,
    });
  }
};

// Update a category (Rename or update type/description) (E2 - Category Management)
exports.renameCategory = async (req, res) => {
  try {
    const { oldName, newName, type, description, gradeLevel } = req.body;

    if (!oldName) {
      return res.status(400).json({
        success: false,
        message: "oldName is required",
      });
    }

    const category = await Category.findOne({
      name: oldName.trim(),
      isActive: true,
    });
    if (!category) {
      return res.status(404).json({
        success: false,
        message: `Category "${oldName}" not found`,
      });
    }

    // If name is changing, ensure new name is unique
    if (newName && newName.trim() !== oldName.trim()) {
      const existing = await Category.findOne({
        name: newName.trim(),
        isActive: true,
      });
      if (existing) {
        return res.status(400).json({
          success: false,
          message: `Category "${newName.trim()}" already exists`,
        });
      }

      // Propagate name change to products
      await Product.updateMany(
        { category: oldName.trim() },
        { $set: { category: newName.trim() } },
      );

      category.name = newName.trim();
    }

    // Update other fields if provided
    if (type) category.type = type;
    if (description !== undefined) category.description = description;
    if (gradeLevel !== undefined) category.gradeLevel = gradeLevel;

    await category.save();

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update category",
      error: error.message,
    });
  }
};

// Delete a category (only if no active products use it)
exports.deleteCategory = async (req, res) => {
  try {
    const categoryName = decodeURIComponent(req.params.name);

    const productCount = await Product.countDocuments({
      category: categoryName,
      isActive: true,
    });

    if (productCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete: ${productCount} product(s) are still using this category. Reassign or remove them first.`,
      });
    }

    // Soft delete from Category collection
    await Category.findOneAndUpdate(
      { name: categoryName },
      { isActive: false },
    );

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete category",
      error: error.message,
    });
  }
};

module.exports = exports;
