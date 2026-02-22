import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "../../../../components/common/Modal";
import { useAuth } from "../../context/AuthContext";
import {
  Plus,
  Trash2,
  MapPin,
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
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    addresses: [],
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [activeTab, setActiveTab] = useState("profile");
  const [sessions, setSessions] = useState([]);
  const [loadingSessions, setLoadingSessions] = useState(false);

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        phone: user.phone || "",
        addresses: user.addresses || [],
      });
    }
  }, [user, isOpen]);

  useEffect(() => {
    if (activeTab === "security" && isOpen) {
      fetchSessions();
    }
  }, [activeTab, isOpen]);

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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (index, field, value) => {
    const newAddresses = [...formData.addresses];
    newAddresses[index] = { ...newAddresses[index], [field]: value };
    setFormData({ ...formData, addresses: newAddresses });
  };

  const addAddress = () => {
    setFormData({
      ...formData,
      addresses: [
        ...formData.addresses,
        {
          label: "Home",
          street: "",
          city: "",
          postalCode: "",
          isDefault: false,
        },
      ],
    });
  };

  const removeAddress = (index) => {
    const newAddresses = formData.addresses.filter((_, i) => i !== index);
    setFormData({ ...formData, addresses: newAddresses });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Account Settings" size="lg">
      <div className="settings-tabs">
        <button
          className={`settings-tab ${activeTab === "profile" ? "active" : ""}`}
          onClick={() => setActiveTab("profile")}
        >
          <UserIcon size={16} /> Profile Details
        </button>
        <button
          className={`settings-tab ${activeTab === "security" ? "active" : ""}`}
          onClick={() => setActiveTab("security")}
        >
          <Shield size={16} /> Security & Sessions
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
              <UserIcon size={18} /> Personal Information
            </h3>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+94 7X XXX XXXX"
              />
            </div>
          </div>

          <div className="settings-section">
            <div className="section-header">
              <h3>
                <MapPin size={18} /> Delivery Addresses
              </h3>
              <button type="button" className="btn-text" onClick={addAddress}>
                <Plus size={16} /> Add Address
              </button>
            </div>

            {formData.addresses.length === 0 ? (
              <p className="no-data-text">No addresses saved yet.</p>
            ) : (
              <div className="address-list">
                {formData.addresses.map((addr, index) => (
                  <div key={index} className="address-card-edit">
                    <div className="address-header">
                      <h4>Address #{index + 1}</h4>
                      <button
                        type="button"
                        className="btn-icon danger"
                        onClick={() => removeAddress(index)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="form-row">
                      <div className="form-group half">
                        <label>Label</label>
                        <input
                          type="text"
                          value={addr.label}
                          onChange={(e) =>
                            handleAddressChange(index, "label", e.target.value)
                          }
                          placeholder="e.g. Home, Office"
                        />
                      </div>
                      <div className="form-group half">
                        <label>City</label>
                        <select
                          value={addr.city}
                          onChange={(e) =>
                            handleAddressChange(index, "city", e.target.value)
                          }
                        >
                          <option value="">Select District</option>
                          <option value="Ampara">Ampara</option>
                          <option value="Anuradhapura">Anuradhapura</option>
                          <option value="Badulla">Badulla</option>
                          <option value="Batticaloa">Batticaloa</option>
                          <option value="Colombo">Colombo</option>
                          <option value="Galle">Galle</option>
                          <option value="Gampaha">Gampaha</option>
                          <option value="Hambantota">Hambantota</option>
                          <option value="Jaffna">Jaffna</option>
                          <option value="Kalutara">Kalutara</option>
                          <option value="Kandy">Kandy</option>
                          <option value="Kegalle">Kegalle</option>
                          <option value="Kilinochchi">Kilinochchi</option>
                          <option value="Kurunegala">Kurunegala</option>
                          <option value="Mannar">Mannar</option>
                          <option value="Matale">Matale</option>
                          <option value="Matara">Matara</option>
                          <option value="Monaragala">Monaragala</option>
                          <option value="Mullaitivu">Mullaitivu</option>
                          <option value="Nuwara Eliya">Nuwara Eliya</option>
                          <option value="Polonnaruwa">Polonnaruwa</option>
                          <option value="Puttalam">Puttalam</option>
                          <option value="Ratnapura">Ratnapura</option>
                          <option value="Trincomalee">Trincomalee</option>
                          <option value="Vavuniya">Vavuniya</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Street Address</label>
                      <input
                        type="text"
                        value={addr.street}
                        onChange={(e) =>
                          handleAddressChange(index, "street", e.target.value)
                        }
                        placeholder="Street, Building, etc."
                      />
                    </div>
                    <div className="form-group">
                      <label>Postal Code</label>
                      <input
                        type="text"
                        value={addr.postalCode}
                        onChange={(e) =>
                          handleAddressChange(
                            index,
                            "postalCode",
                            e.target.value,
                          )
                        }
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
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
              <Shield size={18} /> Active Sessions
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
