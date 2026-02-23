// ============================================
// Supplier Routes
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Purpose: Supplier management API endpoints
// ============================================

const express = require("express");
const router = express.Router();
const {
  getAllSuppliers,
  createSupplier,
  updateSupplier,
  deleteSupplier,
  getSupplierAnalytics,
} = require('../controllers/supplierController');
const { protect, authorize } = require('../../E1_UserAndRoleManagement/middleware/auth');

// All routes require supplier_manager or admin role
router.use(protect);
router.use(authorize("supplier_manager", "admin", "finance_manager"));

router.get("/", getAllSuppliers); // E4.1 - List suppliers
router.get("/analytics", getSupplierAnalytics); // E4.6 - Analytics
router.post("/", createSupplier); // E4.1 - Create supplier
router.put("/:id", updateSupplier); // E4.1 - Update supplier
router.delete("/:id", deleteSupplier); // E4.1 - Delete supplier

module.exports = router;
