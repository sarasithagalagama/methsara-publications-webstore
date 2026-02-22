import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Header Section */}
      <section className="about-header">
        <div className="container">
          <h1>
            About <span className="highlight">Methsara Publications</span>
          </h1>
          <p>
            Empowering Sri Lankan students with quality educational materials
            since 2012.
          </p>
        </div>
      </section>

      <div className="container">
        {/* Story Section */}
        <section className="section story-section">
          <div className="story-grid">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Methsara Publications started as a small printing press with a
                single goal: to make high-quality exam preparation materials
                accessible to every student in Sri Lanka.
              </p>
              <p>
                Over the last decade, we have grown into a trusted name in
                educational publishing, serving over 10,000 students nationwide.
                We specialize in Grade 6-11 textbooks, G.C.E O/L and A/L
                revision guides, and past paper collections.
              </p>
              <p>
                We believe that clear, concise, and exam-focused content is the
                key to unlocking a student's true potential and achieving
                academic success.
              </p>
            </div>
            <div className="story-image">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
                alt="Office"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-row">
          <div className="stat-item">
            <h3>12+</h3>
            <p>Years Excellence</p>
          </div>
          <div className="stat-item">
            <h3>500+</h3>
            <p>Book Titles</p>
          </div>
          <div className="stat-item">
            <h3>10k+</h3>
            <p>Students Served</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Local Ownership</p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-card">
          <h2>Our Core Mission</h2>
          <blockquote className="mission-text">
            "To provide every student with the tools they need to succeed,
            bridging the gap between effort and achievement."
          </blockquote>
        </section>
      </div>
    </div>
  );
};

export default About;
