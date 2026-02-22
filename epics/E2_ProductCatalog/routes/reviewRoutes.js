const express = require("express");
const router = express.Router();
const {
  getReviews,
  moderateReview,
  updateReviewStatus,
} = require('../controllers/reviewController');
const { protect, authorize } = require('../../E1_UserAndRoleManagement/middleware/auth');

router.use(protect);

// Product Manager and Admin only
router.get("/", authorize("product_manager", "admin"), getReviews);
router.put(
  "/:id/moderate",
  authorize("product_manager", "admin"),
  moderateReview,
);
router.put(
  "/:id/:action",
  authorize("product_manager", "admin"),
  updateReviewStatus,
);

module.exports = router;
