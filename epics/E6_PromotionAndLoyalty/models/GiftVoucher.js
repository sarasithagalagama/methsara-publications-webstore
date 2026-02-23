// ============================================
// Gift Voucher Model
// Epic: E6 - Promotion & Loyalty
// Owner: IT24100191 (Jayasinghe D.B.P)
// Purpose: Gift voucher system (E6.4)
// ============================================

const mongoose = require("mongoose");

const giftVoucherSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    value: {
      type: Number,
      required: true,
      min: 0,
    },
    balance: {
      type: Number,
      required: true,
      min: 0,
    },
    purchasedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    recipientEmail: {
      type: String,
    },
    recipientName: {
      type: String,
    },
    message: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    expiryDate: {
      type: Date,
      required: true,
    },
    usageHistory: [
      {
        order: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Order",
        },
        amountUsed: {
          type: Number,
          required: true,
        },
        usedAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
  },
  { timestamps: true },
);

// Auto-generate voucher code before validation
giftVoucherSchema.pre("validate", function (next) {
  if (!this.code) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "GV-";
    for (let i = 0; i < 8; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    this.code = code;
  }
  next();
});

module.exports = mongoose.model("GiftVoucher", giftVoucherSchema);
