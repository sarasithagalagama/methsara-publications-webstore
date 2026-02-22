// ============================================
// DEMO MARKER: Inventory Dashboard Component
// Epic: E5 - Inventory Management
// Owner: IT24100264 (Bandara N W C D)
// Features: Multi-location stock tracking
// ============================================

import React, { useState, useEffect } from "react";
import { AlertTriangle } from "lucide-react";
import inventoryService from "../../services/inventoryService";

function InventoryDashboard() {
  const [inventory, setInventory] = useState([]);
  const [location, setLocation] = useState("Main");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadInventory();
  }, [location]);

  const loadInventory = async () => {
    try {
      setLoading(true);
      const response = await inventoryService.getInventoryByLocation(location);
      setInventory(response.inventory || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="container">
      <div className="page-header">
        <h1>Inventory Management</h1>
        <p>Track stock levels across all locations</p>
      </div>

      {/* DEMO: Location Selector - EASY TO MODIFY */}
      <div className="card" style={{ marginBottom: "2rem" }}>
        <label style={{ marginRight: "1rem", fontWeight: "600" }}>
          Select Location:
        </label>
        <select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="form-select"
          style={{ maxWidth: "300px" }}
        >
          <option value="Main">Main Warehouse</option>
          <option value="Balangoda">Balangoda Branch</option>
          <option value="Kottawa">Kottawa Branch</option>
        </select>
      </div>

      <div className="grid grid-3">
        {inventory.map((item) => (
          <div key={item._id} className="card">
            <h3>{item.product?.name || "Product"}</h3>
            <div style={{ marginTop: "1rem" }}>
              <p>
                <strong>Location:</strong> {item.location}
              </p>
              <p>
                <strong>Stock:</strong> {item.quantity} units
              </p>
              <p>
                <strong>Low Stock Alert:</strong> {item.lowStockThreshold} units
              </p>

              {item.quantity <= item.lowStockThreshold && (
                <div
                  className="alert alert-warning"
                  style={{ marginTop: "1rem" }}
                >
                  <AlertTriangle size={16} /> Low Stock!
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {inventory.length === 0 && (
        <div className="card">
          <p>No inventory found for {location} location.</p>
        </div>
      )}
    </div>
  );
}

export default InventoryDashboard;
