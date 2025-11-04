import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    country: '',
    email: '',
    password: '',
  });

  const handleChange = (e) =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Signup logic here
    console.log('Signup:', formData);
  };

  return (
    <div className="signup-background">
      <div className="signup-container">
        <div className="signup-left">
          <button className="back-btn" onClick={() => window.history.back()}>
            &larr; Back
          </button>
          <span className="new-traveler-label">New traveler</span>
          <h1 className="signup-title">Explore travel destinations</h1>
          <p className="signup-subtitle">The best places for your wild adventures.</p>
          <form className="signup-form" onSubmit={handleSubmit}>
            <div className="input-row">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                autoComplete="off"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                required
                autoComplete="off"
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="off"
            />
            <button type="submit" className="signup-btn">Sign up</button>
          </form>
        </div>

        <div className="signup-right">
          <blockquote className="quote">
            <span className="quote-mark">“</span>
            Great things never came from comfort zones.
          </blockquote>
          <div className="signin-link">
            Already a traveler? <a href="/login">Sign in</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
