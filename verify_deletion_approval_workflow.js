const mongoose = require("mongoose");
const axios = require("axios");
require("dotenv").config();

// Configuration
const BASE_URL = "http://localhost:5000";
const PM_EMAIL = "pm@methsara.com"; // Assuming these exist from seeds or previous work
const IM_EMAIL = "im@methsara.com"; // Inventory Manager
const PASSWORD = "password123";

async function verifyWorkflow() {
  try {
    console.log("--- Starting Workflow Verification ---");

    // 1. Login as Product Manager
    console.log("1. Logging in as Product Manager...");
    const pmLogin = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: "methsara@gmail.com", // Found in previous logs as a PM
      password: "password123",
    });
    const pmToken = pmLogin.data.token;
    const pmId = pmLogin.data.user._id;
    console.log("Logged in as PM:", pmLogin.data.user.name);

    // 2. Find a product with 0 stock to request deletion
    console.log("2. Finding a product to delete...");
    const productsRes = await axios.get(`${BASE_URL}/api/products`, {
      headers: { Authorization: `Bearer ${pmToken}` },
    });
    const products = productsRes.data.products;
    const targetProduct = products.find((p) => p.isActive);

    if (!targetProduct) {
      console.log("No active products found to test with.");
      return;
    }
    console.log(
      `Target Product: ${targetProduct.title} (${targetProduct._id})`,
    );

    // 3. Request Deletion
    console.log("3. Requesting deletion...");
    try {
      const deleteRes = await axios.delete(
        `${BASE_URL}/api/products/${targetProduct._id}`,
        {
          headers: { Authorization: `Bearer ${pmToken}` },
        },
      );

      if (deleteRes.data.pendingApproval) {
        console.log("Success: Deletion request created. Status 202.");
        console.log("Request ID:", deleteRes.data.request._id);
      } else {
        console.log(
          "Warning: Product deleted directly (maybe you are admin?).",
        );
      }
    } catch (err) {
      console.error(
        "Deletion request failed:",
        err.response?.data || err.message,
      );
      if (err.response?.data?.error?.includes("stock")) {
        console.log(
          "Expected error: Product has stock. Please adjust stock to 0 first.",
        );
      }
      return;
    }

    // 4. Login as Inventory Manager (or Master IM)
    console.log("\n4. Logging in as Master Inventory Manager...");
    const imLogin = await axios.post(`${BASE_URL}/api/auth/login`, {
      email: "janith@gmail.com", // Found in previous logs as Master IM
      password: "password123",
    });
    const imToken = imLogin.data.token;
    console.log("Logged in as IM:", imLogin.data.user.name);

    // 5. Get Pending Requests
    console.log("5. Checking pending approval requests...");
    const approvalsRes = await axios.get(`${BASE_URL}/api/approvals`, {
      headers: { Authorization: `Bearer ${imToken}` },
    });
    const requests = approvalsRes.data.requests;
    const myRequest = requests.find(
      (r) =>
        r.module === "Product" &&
        r.action === "Delete" &&
        r.documentId === targetProduct._id,
    );

    if (myRequest) {
      console.log("Success: Found the pending deletion request.");
    } else {
      console.log("Error: Request not found in approvals list.");
      return;
    }

    // 6. Approve Request
    console.log("6. Approving deletion request...");
    const approveRes = await axios.put(
      `${BASE_URL}/api/approvals/${myRequest._id}`,
      {
        status: "Approved",
        remarks: "Approved by IM as requested by PM.",
      },
      {
        headers: { Authorization: `Bearer ${imToken}` },
      },
    );

    if (approveRes.data.success) {
      console.log("Success: Request approved.");
    } else {
      console.log("Error: Failed to approve request.");
      return;
    }

    // 7. Verify Product Status
    console.log("7. Verifying product is now inactive...");
    const finalProductRes = await axios.get(
      `${BASE_URL}/api/products/${targetProduct._id}`,
      {
        headers: { Authorization: `Bearer ${imToken}` },
      },
    );

    if (finalProductRes.data.product.isActive === false) {
      console.log(
        "Verification COMPLETE: Product is successfully soft-deleted.",
      );
    } else {
      console.log("Error: Product is still active.");
    }
  } catch (err) {
    console.error("Verification error:", err.response?.data || err.message);
  }
}

verifyWorkflow();
