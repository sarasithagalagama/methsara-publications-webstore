const GiftVoucher = require('../models/GiftVoucher');
const Product = require('../../E2_ProductCatalog/models/Product');

// @desc    Create a new manual voucher (admin/manager)
// @route   POST /api/gift-vouchers
// @access  Private (Managers)
exports.createVoucher = async (req, res) => {
  try {
    const { value, expiryDate, recipientEmail, recipientName, message } =
      req.body;

    const voucher = await GiftVoucher.create({
      value,
      balance: value, // Initial balance = value
      expiryDate,
      purchasedBy: req.user._id, // Created by admin/manager
      recipientEmail,
      recipientName,
      message,
    });

    res.status(201).json({
      success: true,
      voucher,
    });
  } catch (error) {
    console.error("Voucher creation error:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error creating voucher",
    });
  }
};

// @desc    Get all vouchers
// @route   GET /api/gift-vouchers
// @access  Private (Managers)
exports.getAllVouchers = async (req, res) => {
  try {
    const vouchers = await GiftVoucher.find().sort("-createdAt");
    res.status(200).json({
      success: true,
      count: vouchers.length,
      vouchers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching vouchers",
      error: error.message,
    });
  }
};

// @desc    Validate a voucher code
// @route   POST /api/gift-vouchers/validate
// @access  Public (or Private if checking balance)
exports.validateVoucher = async (req, res) => {
  try {
    const { code } = req.body;

    const voucher = await GiftVoucher.findOne({ code, isActive: true });

    if (!voucher) {
      return res.status(404).json({
        success: false,
        message: "Invalid or inactive voucher code",
      });
    }

    if (new Date() > new Date(voucher.expiryDate)) {
      return res.status(400).json({
        success: false,
        message: "Voucher has expired",
      });
    }

    if (voucher.balance <= 0) {
      return res.status(400).json({
        success: false,
        message: "Voucher has no remaining balance",
      });
    }

    res.status(200).json({
      success: true,
      voucher: {
        code: voucher.code,
        balance: voucher.balance,
        expiryDate: voucher.expiryDate,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error validating voucher",
      error: error.message,
    });
  }
};

// @desc    Get Voucher Products (Products with category 'Gift Voucher')
// @route   GET /api/gift-vouchers/products
// @access  Public
exports.getVoucherProducts = async (req, res) => {
  try {
    const products = await Product.find({
      category: "Gift Voucher",
      isActive: true,
    });
    res.status(200).json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching voucher products",
      error: error.message,
    });
  }
};

// @desc    Delete an issued voucher
// @route   DELETE /api/gift-vouchers/:id
// @access  Private (Managers)
exports.deleteVoucher = async (req, res) => {
  try {
    const voucher = await GiftVoucher.findById(req.params.id);

    if (!voucher) {
      return res.status(404).json({
        success: false,
        message: "Voucher not found",
      });
    }

    await voucher.deleteOne();

    res.status(200).json({
      success: true,
      message: "Voucher deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting voucher",
      error: error.message,
    });
  }
};
