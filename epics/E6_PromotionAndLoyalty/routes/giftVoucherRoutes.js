const express = require("express");
const router = express.Router();
const {
  createVoucher,
  getAllVouchers,
  validateVoucher,
  getVoucherProducts,
  deleteVoucher,
} = require('../controllers/giftVoucherController');
const { protect, authorize } = require('../../E1_UserAndRoleManagement/middleware/auth');

// Public routes
router.post("/validate", validateVoucher);
router.get("/products", getVoucherProducts);

// Protected routes (Managers/Admin)
router.use(protect);
router
  .route("/")
  .get(authorize("marketing_manager", "admin"), getAllVouchers)
  .post(authorize("marketing_manager", "admin"), createVoucher);

router.delete("/:id", authorize("marketing_manager", "admin"), deleteVoucher);

module.exports = router;
