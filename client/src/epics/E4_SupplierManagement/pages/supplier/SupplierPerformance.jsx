// ============================================
// SupplierPerformance
// Epic: E4 - Supplier Management
// Owner: IT24100799 (Gawrawa G H Y)
// Purpose: SupplierPerformance page component
// ============================================
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Star, Clock, CheckCircle, XCircle } from "lucide-react";
import StatCard from "../../../../components/dashboard/StatCard";
import DashboardHeader from "../../../../components/dashboard/DashboardHeader";
import SalesChart from "../../../../components/dashboard/charts/SalesChart";
import supplierService from "../../services/supplierService";
import "../../../../components/dashboard/dashboard.css";

const SupplierPerformance = () => {
  const navigate = useNavigate();
  // ─────────────────────────────────
  // State Variables
  // ─────────────────────────────────
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    onTimeDelivery: 0,
    qualityScore: 0,
    returnRate: 0,
    totalOrders: 0,
  });
  const [performance, setPerformance] = useState([]);

  // ─────────────────────────────────
  // Side Effects
  // ─────────────────────────────────
  useEffect(() => {
    fetchPerformance();
  }, []);

  // ─────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────
  const fetchPerformance = async () => {
    try {
      const data = await supplierService.getAnalytics();
      if (data.success) {
        setStats({
          onTimeDelivery: data.stats.avgOnTime,
          qualityScore: (
            data.performance.reduce((acc, p) => acc + p.rating, 0) /
            data.performance.length
          ).toFixed(1),
          returnRate: 0.5, // Logic for returns not fully implemented in backend yet
          totalOrders: data.stats.totalOrders,
        });
        setPerformance(data.performance);
      }
    } catch (error) {
      console.error("Error fetching performance:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    // ─────────────────────────────────
    // Render
    // ─────────────────────────────────
    return (
      <div className="dashboard-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <DashboardHeader
        title="Supplier Performance"
        subtitle="Analytical insights into partner fulfillment quality"
      />

      <div className="dashboard-grid dashboard-grid-4">
        <StatCard
          icon={<Clock size={24} />}
          label="On-Time Delivery"
          value={`${stats.onTimeDelivery}%`}
          variant="primary"
          trend="up"
          change="+2%"
        />
        <StatCard
          icon={<Star size={24} />}
          label="Quality Score"
          value={`${stats.qualityScore}/5`}
          variant="primary"
        />
        <StatCard
          icon={<XCircle size={24} />}
          label="Return Rate"
          value={`${stats.returnRate}%`}
          variant="warning"
          trend="down"
          change="-0.5%"
        />
        <StatCard
          icon={<CheckCircle size={24} />}
          label="Total Orders"
          value={stats.totalOrders}
          variant="primary"
        />
      </div>

      <div className="dashboard-grid dashboard-grid-2">
        <div className="dashboard-card">
          <h3>Delivery Timeliness (Last 6 Months)</h3>
          <SalesChart
            data={[88, 90, 85, 92, 94, 92]}
            labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun"]}
          />
        </div>
        <div className="dashboard-card">
          <h3>Defect Rate by Supplier</h3>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Supplier</th>
                  <th>On-Time Rate</th>
                  <th>Quality</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {performance.map((item) => (
                  <tr key={item._id}>
                    <td>{item.name}</td>
                    <td>{item.onTimeRate.toFixed(1)}%</td>
                    <td>{item.defectRate}% Defect</td>
                    <td>
                      <span
                        className={`status-badge ${item.totalOrders > 0 ? "success" : "warning"}`}
                      >
                        {item.rating}/5 Stars
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierPerformance;
