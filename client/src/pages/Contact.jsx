import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <h1>Get in Touch</h1>
          <p>
            Have questions? Our team is ready to assist you on your educational
            journey.
          </p>
        </div>
      </section>

      <div className="container contact-main-container">
        <div className="contact-grid">
          {/* Info Sidebar */}
          <aside className="info-sidebar">
            <h2>Contact Us</h2>
            <p className="info-intro">
              We value your feedback and inquiries. Reach out to us through any
              of these channels for a prompt response.
            </p>

            <div className="contact-methods">
              <div className="contact-method-card">
                <div className="method-icon">
                  <Phone size={28} />
                </div>
                <div className="method-details">
                  <h4>Quick Call</h4>
                  <p>071 432 5383</p>
                  <p>071 448 5899</p>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon">
                  <Mail size={28} />
                </div>
                <div className="method-details">
                  <h4>Email Us</h4>
                  <p>methsarabooks@gmail.com</p>
                </div>
              </div>

              <div className="contact-method-card">
                <div className="method-icon">
                  <MapPin size={28} />
                </div>
                <div className="method-details">
                  <h4>Visit Store</h4>
                  <p>Kottawa, Sri Lanka</p>
                </div>
              </div>
            </div>

            <div className="social-connect">
              <h3>Connect With Us</h3>
              <div className="social-bubbles">
                <a href="#" className="social-bubble">
                  <Facebook size={20} />
                </a>
                <a href="#" className="social-bubble">
                  <Twitter size={20} />
                </a>
                <a href="#" className="social-bubble">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </aside>

          {/* Contact Form Card */}
          <main className="contact-form-card">
            <h2>Send a Message</h2>
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="form-two-col">
                <div className="form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-input"
                    placeholder="E.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  placeholder="How can we help?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  className="form-input"
                  rows="6"
                  placeholder="Write your message here..."
                  style={{ resize: "none" }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-button">
                Send Message <Send size={18} />
              </button>
            </form>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Contact;
