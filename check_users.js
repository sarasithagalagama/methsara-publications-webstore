const mongoose = require("mongoose");
require("dotenv").config();

const User = require("./models/User");

mongoose
  .connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log("✅ Custom Script: Connected to DB");

    const admin = await User.findOne({ email: "admin@methsara.com" }).select(
      "+password",
    );
    if (admin) {
      console.log("✅ Admin FOUND:");
      console.log("Email:", admin.email);
      console.log("Role:", admin.role);
      console.log("IsActive:", admin.isActive);
      console.log("Password Hash:", admin.password ? "Present" : "Missing");
    } else {
      console.log("❌ Admin NOT found");
      // Check finding ANY user
      const anyUser = await User.findOne();
      if (anyUser) {
        console.log("ℹ️ Found at least one user:", anyUser.email, anyUser.role);
      } else {
        console.log("⚠️ No users found in DB at all!");
      }
    }
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
