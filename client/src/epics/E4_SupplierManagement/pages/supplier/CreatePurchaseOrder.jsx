// ============================================
// CreatePurchaseOrder
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Purpose: CreatePurchaseOrder page component
// ============================================
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { ArrowLeft, Plus, Trash2, Save, AlertCircle } from "lucide-react";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import "../../../../components/dashboard/dashboard.css";

const CreatePurchaseOrder = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // ─────────────────────────────────
  // State Variables
  // ─────────────────────────────────
  const [suppliers, setSuppliers] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    supplier: "",
    expectedDeliveryDate: "",
    notes: "",
    items: [{ product: "", quantity: 1, unitPrice: 0 }],
  });
  const [formErrors, setFormErrors] = useState({});

  // ─────────────────────────────────
  // Side Effects
  // ─────────────────────────────────
  useEffect(() => {
    fetchData();
  }, []);

  // Pre-fill from navigation state (e.g. from Low Stock Alerts)
  useEffect(() => {
    if (!loading && products.length > 0 && location.state?.product) {
      const prefilledProduct = products.find(
        (p) => p._id === location.state.product,
      );
      if (prefilledProduct) {
        setFormData((prev) => ({
          ...prev,
          items: [
            {
              product: prefilledProduct._id,
              quantity: 1,
              unitPrice: prefilledProduct.price || 0,
            },
          ],
        }));
      }
    }
  }, [loading, products, location.state]);

  // ─────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────
  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = { headers: { Authorization: `Bearer ${token}` } };

      const [suppliersRes, productsRes] = await Promise.all([
        axios.get("/api/suppliers", config),
        axios.get("/api/products?limit=100", config), // Fetching products for dropdown
      ]);

      setSuppliers(suppliersRes.data.suppliers || []);
      setProducts(productsRes.data.products || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const addItem = () => {
    setFormData({
      ...formData,
      items: [...formData.items, { product: "", quantity: 1, unitPrice: 0 }],
    });
  };

  const removeItem = (index) => {
    if (formData.items.length === 1) return;
    const newItems = formData.items.filter((_, i) => i !== index);
    setFormData({ ...formData, items: newItems });
  };

  const calculateTotal = () => {
    return formData.items.reduce(
      (sum, item) => sum + item.quantity * item.unitPrice,
      0,
    );
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.supplier) errors.supplier = "Please select a supplier";

    if (formData.expectedDeliveryDate) {
      const today = new Date();
      const todayStr = today.toISOString().split("T")[0];
      if (formData.expectedDeliveryDate < todayStr) {
        errors.date = "Delivery date cannot be in the past";
      }
    }

    if (!formData.items || formData.items.length === 0) {
      errors.items = "At least one item is required";
    } else {
      let itemErrors = false;
      // ... (omitted for brevity, will rely on context matching)
      // ACTUALLY I NEED TO MATCH EXACT CONTEXT.
      // Let me grab larger chunk.
      // ...
    }
    // Wait, I should not break the file.
    // Let's rewrite the whole validateForm function + the input part in one go? No, they are far apart.
    // I will do two chunks. using multi_replace_file_content.

    if (!formData.items || formData.items.length === 0) {
      errors.items = "At least one item is required";
    } else {
      let itemErrors = false;
      const productIds = new Set();
      let hasDuplicates = false;

      formData.items.forEach((item) => {
        if (!item.product) itemErrors = true;
        if (item.quantity < 1) itemErrors = true;
        if (item.unitPrice < 0) itemErrors = true;

        if (item.product) {
          if (productIds.has(item.product)) {
            hasDuplicates = true;
          }
          productIds.add(item.product);
        }
      });

      if (itemErrors) {
        errors.items =
          "All items must have a product selected, quantity >= 1, and valid price";
      } else if (hasDuplicates) {
        errors.items =
          "Duplicate products selected. Please combine them into one line item.";
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const token = localStorage.getItem("token");
      // Use 'Warehouse' as a default more descriptive name than 'Main'
      const payload = { ...formData, location: "Warehouse" };

      await axios.post("/api/purchase-orders", payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Purchase Order created successfully!");
      navigate("/supplier-manager/purchase-orders");
    } catch (error) {
      console.error("Error creating PO:", error);
      alert(
        "Failed to create PO: " +
          (error.response?.data?.details ||
            error.response?.data?.message ||
            error.message),
      );
    }
  };

  if (loading)
    // ─────────────────────────────────
    // Render
    // ─────────────────────────────────
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="dashboard-container">
      <DashboardHeader
        title="Create Purchase Order"
        subtitle="Generate a new procurement request for a partner"
      />

      <div className="dashboard-card">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Select Supplier *</label>
              <select
                value={formData.supplier}
                onChange={(e) =>
                  setFormData({ ...formData, supplier: e.target.value })
                }
                className={`form-control ${
                  formErrors.supplier ? "is-invalid" : ""
                }`}
              >
                <option value="">Choose Supplier...</option>
                {suppliers.map((s) => (
                  <option key={s._id} value={s._id}>
                    {s.name}
                  </option>
                ))}
              </select>
              {formErrors.supplier && (
                <div className="error-message">{formErrors.supplier}</div>
              )}
            </div>
            <div className="form-group">
              <label>Expected Delivery Date (Optional)</label>
              <input
                type="date"
                min={new Date().toISOString().split("T")[0]}
                value={formData.expectedDeliveryDate}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expectedDeliveryDate: e.target.value,
                  })
                }
                className={`form-control ${
                  formErrors.date ? "is-invalid" : ""
                }`}
              />
              {formErrors.date && (
                <div className="error-message">{formErrors.date}</div>
              )}
            </div>
          </div>

          <div className="form-section">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3>Order Items</h3>
              {formErrors.items && (
                <div
                  className="error-message"
                  style={{ display: "flex", alignItems: "center", gap: "5px" }}
                >
                  <AlertCircle size={16} /> {formErrors.items}
                </div>
              )}
            </div>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Unit Price (Rs.)</th>
                  <th>Total (Rs.)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {formData.items.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <select
                        required
                        value={item.product}
                        onChange={(e) =>
                          handleItemChange(index, "product", e.target.value)
                        }
                        className="form-control"
                      >
                        <option value="">Select Product...</option>
                        {products
                          .filter(
                            (p) =>
                              !formData.supplier ||
                              p.supplier === formData.supplier ||
                              (p.supplier &&
                                p.supplier._id === formData.supplier),
                          )
                          .map((p) => (
                            <option key={p._id} value={p._id}>
                              {p.title}
                            </option>
                          ))}
                      </select>
                    </td>
                    <td>
                      <input
                        type="number"
                        min="1"
                        required
                        value={item.quantity}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "quantity",
                            parseInt(e.target.value) || 0,
                          )
                        }
                        className="form-control qty-input"
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        min="0"
                        required
                        value={item.unitPrice}
                        onChange={(e) =>
                          handleItemChange(
                            index,
                            "unitPrice",
                            parseFloat(e.target.value) || 0,
                          )
                        }
                        className="form-control price-input"
                      />
                    </td>
                    <td>{(item.quantity * item.unitPrice).toLocaleString()}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => removeItem(index)}
                        className="btn-icon error"
                        disabled={formData.items.length === 1}
                      >
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button type="button" onClick={addItem} className="btn-text">
              <Plus size={16} /> Add Another Item
            </button>
          </div>

          <div className="form-summary-card">
            <div className="form-summary-notes">
              <label className="stat-label">Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="form-control"
                rows="3"
                placeholder="Additional instructions..."
              />
            </div>
            <div className="total-display">
              <span className="total-display-label">Total Estimated Cost:</span>
              <span className="total-display-amount">
                Rs. {calculateTotal().toLocaleString()}
              </span>
            </div>
          </div>

          <div className="form-actions-bar">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              <Save size={18} /> Create Purchase Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePurchaseOrder;
