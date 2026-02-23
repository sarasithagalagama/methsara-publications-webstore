const express = require("express");
const router = express.Router();
const { getReviews } = require("../controllers/reviewController");
const {
  protect,
  authorize,
} = require("../../E1_UserAndRoleManagement/middleware/auth");

router.use(protect);

// Product Manager and Admin — read-only view
router.get("/", authorize("product_manager", "admin"), getReviews);

module.exports = router;
