const mongoose = require("mongoose");
require("dotenv").config();
const User = require("./models/User");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("✅ Custom Script: Connected to DB");

    const admin = await User.findOne({ email: "admin@methsara.com" });
    if (admin) {
      admin.password = "password123";
      admin.isActive = true;
      admin.role = "admin"; // Ensure role is admin
      await admin.save();
      console.log("✅ Admin password reset to: password123");
    } else {
      console.log("❌ Admin NOT found, creating one...");
      await User.create({
        name: "Admin User",
        email: "admin@methsara.com",
        password: "password123",
        role: "admin",
        userType: "staff",
        isActive: true,
        isEmailVerified: true,
      });
      console.log("✅ Admin created with password: password123");
    }
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
