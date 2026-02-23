// ============================================
// ProfileSettingsModal
// Epic: E1 - User & Role Management
// Owner: IT24100548 (Galagama S.T)
// Purpose: ProfileSettingsModal UI component
// ============================================
import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../../../components/common/Modal";
import { useAuth } from "../../context/AuthContext";
import {
  Phone,
  User as UserIcon,
  Shield,
  Monitor,
  Smartphone,
  Globe,
} from "lucide-react";
import "./ProfileSettingsModal.css";

const ProfileSettingsModal = ({ isOpen, onClose }) => {
  const { user, updateProfile } = useAuth();
  // ─────────────────────────────────
  // State Variables
  // ─────────────────────────────────
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [fieldErrors, setFieldErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [activeTab, setActiveTab] = useState("profile");
  const [sessions, setSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  // ─────────────────────────────────
  // Side Effects
  // ─────────────────────────────────
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
      });
      setFieldErrors({}); // Clear errors when user or modal opens
    }
  }, [user, isOpen]);

  useEffect(() => {
    if (activeTab === "security" && isOpen) {
      fetchSessions();
    }
  }, [activeTab, isOpen]);

  // ─────────────────────────────────
  // Event Handlers
  // ─────────────────────────────────
  const fetchSessions = async () => {
    setLoadingSessions(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get("/api/auth/sessions", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setSessions(res.data.sessions || []);
    } catch (error) {
      console.error("Failed to fetch sessions", error);
    } finally {
      setLoadingSessions(false);
    }
  };

  const handleRevokeSession = async (sessionId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `/api/auth/sessions/${sessionId}/revoke`,
        {},
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      fetchSessions(); // Refresh list
    } catch (error) {
      console.error("Failed to revoke", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear field error as user types
    if (fieldErrors[name]) {
      const newErrors = { ...fieldErrors };
      delete newErrors[name];
      setFieldErrors(newErrors);
    }
  };

  const validateForm = () => {
    const errors = {};

    // Name Validation
    if (!formData.name.trim()) {
      errors.name = "Full name is required";
    }

    // Phone Validation (Optional but must be valid if provided)
    if (formData.phone) {
      const phoneRegex = /^(?:\+94|0)7[0-9]{8}$/;
      if (!phoneRegex.test(formData.phone.replace(/\s/g, ""))) {
        errors.phone = "Invalid Sri Lankan phone number (+94 7X XXX XXXX)";
      }
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      setMessage({ type: "error", text: "Please fix the validation errors." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    const result = await updateProfile(formData);

    if (result.success) {
      setMessage({ type: "success", text: "Profile updated successfully!" });
      setTimeout(() => {
        onClose();
        setMessage({ type: "", text: "" });
      }, 1500);
    } else {
      setMessage({ type: "error", text: result.message });
    }
    setLoading(false);
  };

  // ─────────────────────────────────
  // Render
  // ─────────────────────────────────
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Account Settings" size="lg">
      <div className="settings-tabs">
        <button
          className={`settings-tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <UserIcon size={18} /> <span>Profile Details</span>
        </button>
        <button
          className={`settings-tab ${activeTab === "security" ? "active" : ""}`}
          onClick={() => setActiveTab("security")}
        >
          <Shield size={18} /> <span>Security & Sessions</span>
        </button>
      </div>

      {activeTab === "profile" && (
        <form onSubmit={handleSubmit} className="profile-settings-form">
          {message.text && (
            <div className={`message-alert ${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="settings-section">
            <h3>
              <UserIcon size={20} className="text-primary-color" /> Personal
              Information
            </h3>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={fieldErrors.name ? "error-input" : ""}
                required
              />
              {fieldErrors.name && (
                <span className="field-error">{fieldErrors.name}</span>
              )}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={fieldErrors.phone ? "error-input" : ""}
                placeholder="+94 7X XXX XXXX"
              />
              {fieldErrors.phone && (
                <span className="field-error">{fieldErrors.phone}</span>
              )}
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      )}

      {activeTab === "security" && (
        <div className="security-settings-section">
          <div className="settings-section">
            <h3>
              <Shield size={20} className="text-primary-color" /> Active
              Sessions
            </h3>
            <p className="section-desc">
              These are the devices that have logged into your account. Revoke
              any sessions that you do not recognize.
            </p>

            {loadingSessions ? (
              <p>Loading sessions...</p>
            ) : (
              <div className="sessions-list">
                {sessions.length === 0 ? (
                  <p>No active sessions found.</p>
                ) : (
                  sessions.map((session) => (
                    <div key={session._id} className="session-card">
                      <div className="session-icon">
                        {session.device?.toLowerCase().includes("mobile") ? (
                          <Smartphone size={24} />
                        ) : (
                          <Monitor size={24} />
                        )}
                      </div>
                      <div className="session-details">
                        <h4>{session.device || "Unknown Device"}</h4>
                        <div className="session-meta">
                          <span>
                            <Globe size={14} /> {session.ipAddress}
                          </span>
                          <span>
                            Signed in:{" "}
                            {new Date(session.loginTime).toLocaleDateString()}
                          </span>
                        </div>
                        {session.status === "active" ? (
                          <span className="session-status active">
                            Active Now
                          </span>
                        ) : (
                          <span className="session-status revoked">
                            Revoked / Logged Out
                          </span>
                        )}
                      </div>
                      <div className="session-actions">
                        {session.status === "active" && (
                          <button
                            className="btn-revoke"
                            onClick={() => handleRevokeSession(session._id)}
                          >
                            Revoke
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ProfileSettingsModal;
