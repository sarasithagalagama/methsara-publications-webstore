// ============================================
// Supplier List Component
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Features: View suppliers, Add/Edit/Delete, Tabs, Print
// ============================================

import React, { useState, useEffect } from "react";
import supplierService from "../../services/supplierService";
import SupplierFormModal from "./SupplierFormModal";
import ConfirmModal from "../../../../components/common/ConfirmModal";
import StatusModal from "../../../../components/common/StatusModal";
import {
  Plus,
  Printer,
  Edit,
  Trash2,
  MapPin,
  Phone,
  Building,
  Search,
} from "lucide-react";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import "../../../../components/dashboard/dashboard.css";
import "./SupplierList.css";

function SupplierList() {
  // [E4.1] [E4.5] Category tabs: Material Supplier, Distributor, Bookshop — re-filters on tab or search change
  // State Variables
  const [suppliers, setSuppliers] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [activeTab, setActiveTab] = useState("All");
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingSupplier, setEditingSupplier] = useState(null);
  const [supplierSearch, setSupplierSearch] = useState("");
  const [confirmModal, setConfirmModal] = useState({
    isOpen: false,
    id: null,
  });
  const [statusModal, setStatusModal] = useState({
    isOpen: false,
    type: "success",
    title: "",
    message: "",
  });

  const closeConfirm = () => setConfirmModal({ isOpen: false, id: null });

  // Side Effects
  useEffect(() => {
    loadSuppliers();
  }, []);

  useEffect(() => {
    filterSuppliers(activeTab);
  }, [suppliers, activeTab, supplierSearch]);

  // Event Handlers
  // [E4.1] Load all suppliers on mount; filtering happens client-side via filterSuppliers
  const loadSuppliers = async () => {
    try {
      const response = await supplierService.getSuppliers();
      setSuppliers(response.suppliers || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const filterSuppliers = (tab) => {
    let filtered = suppliers;

    // Tab filtering
    if (tab !== "All") {
      filtered = filtered.filter((s) => s.category === tab);
    }

    // Search filtering
    if (supplierSearch) {
      const q = supplierSearch.toLowerCase();
      filtered = filtered.filter(
        (s) =>
          s.name?.toLowerCase().includes(q) ||
          s.contactPerson?.toLowerCase().includes(q) ||
          s.email?.toLowerCase().includes(q) ||
          s.address?.city?.toLowerCase().includes(q),
      );
    }

    setFilteredSuppliers(filtered);
  };

  const handleSave = async (data) => {
    try {
      if (editingSupplier) {
        await supplierService.updateSupplier(editingSupplier._id, data);
      } else {
        await supplierService.createSupplier(data);
      }
      loadSuppliers();
      setShowModal(false);
      setEditingSupplier(null);
    } catch (err) {
      setStatusModal({
        isOpen: true,
        type: "error",
        title: "Save Failed",
        message: "Failed to save partner details. Please try again.",
      });
    }
  };

  const handleDelete = (id) => {
    setConfirmModal({ isOpen: true, id });
  };

  const processDelete = async () => {
    const id = confirmModal.id;
    closeConfirm();
    try {
      await supplierService.deleteSupplier(id);
      loadSuppliers();
    } catch (err) {
      setStatusModal({
        isOpen: true,
        type: "error",
        title: "Delete Failed",
        message: "Failed to delete partner. Please try again.",
      });
    }
  };

  const openAddModal = () => {
    setEditingSupplier(null);
    setShowModal(true);
  };

  const openEditModal = (supplier) => {
    setEditingSupplier(supplier);
    setShowModal(true);
  };

  const printDirectory = () => {
    window.print();
  };

  if (loading)
    // Render
    return (
      <div className="loading">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="dashboard-container">
      <DashboardHeader
        title="Partner Directory"
        subtitle="Detailed directory of Suppliers, Distributors, and Bookshops"
        actions={[
          {
            label: "Print Directory",
            icon: <Printer size={18} />,
            onClick: printDirectory,
            variant: "outline",
          },
          {
            label: "Add Partner",
            icon: <Plus size={18} />,
            onClick: openAddModal,
            variant: "primary",
          },
        ]}
      />

      <div className="dashboard-controls" style={{ marginTop: "1rem" }}>
        <div className="dashboard-tabs">
          {[
            "All",
            "Material Supplier",
            "Distributor",
            "Bookshop",
            "Publisher",
          ].map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "All" ? "All Partners" : `${tab}s`}
            </button>
          ))}
        </div>
      </div>

      <div className="printable-content">
        <h2 className="print-only">
          {activeTab === "All" ? "Full Partner Directory" : `${activeTab} List`}
        </h2>

        {filteredSuppliers.length === 0 ? (
          <div className="dashboard-card">
            <div
              className="table-empty-state text-center"
              style={{ padding: "4rem 2rem" }}
            >
              <p className="text-muted" style={{ fontSize: "1.1rem" }}>
                No partners found in this category.
              </p>
            </div>
          </div>
        ) : (
          <div className="dashboard-grid dashboard-grid-2">
            {filteredSuppliers.map((supplier) => (
              <div key={supplier._id} className="dashboard-card supplier-card">
                <div className="card-header">
                  <div>
                    <h3>{supplier.name}</h3>
                    <span
                      className={`badge ${supplier.category ? supplier.category.replace(/\s+/g, "-").toLowerCase() : "default"}`}
                    >
                      {supplier.category || "Supplier"}
                    </span>
                  </div>
                  <div className="card-actions no-print">
                    <button
                      onClick={() => openEditModal(supplier)}
                      className="btn-icon"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(supplier._id)}
                      className="btn-icon danger"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="card-body">
                  <div className="info-row">
                    <Building size={16} />
                    <span>{supplier.contactPerson}</span>
                  </div>
                  <div className="info-row">
                    <Phone size={16} />
                    <span>{supplier.phone}</span>
                  </div>
                  <div className="info-row">
                    <MapPin size={16} />
                    <span>
                      {supplier.address ? (
                        <>
                          {supplier.address.city && (
                            <strong>{supplier.address.city}, </strong>
                          )}
                          {supplier.address.street}
                        </>
                      ) : (
                        "No Address"
                      )}
                    </span>
                  </div>
                  {supplier.businessRegistration && (
                    <div className="legal-info">
                      {supplier.businessRegistration && (
                        <small>BR: {supplier.businessRegistration}</small>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <SupplierFormModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
        initialData={editingSupplier}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={closeConfirm}
        onConfirm={processDelete}
        title="Delete Partner"
        message="Are you sure you want to delete this partner? This action cannot be undone."
        confirmText="Delete Partner"
        variant="danger"
      />

      <StatusModal
        isOpen={statusModal.isOpen}
        onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
        type={statusModal.type}
        title={statusModal.title}
        message={statusModal.message}
      />
    </div>
  );
}

export default SupplierList;
