import React, { useState, useEffect } from 'react';
import './login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }
    // Implement actual login logic here
    alert('Login functionality to be implemented');
  };

  return (
    <div className="login-page">
      <div className="container left-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Login to Your Account</h3>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="remember-me">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me?</label>
          </div>

          <button type="submit" className="btn-login">LOGIN</button>
          <a href="#" className="forgot-password">Forgot Password?</a>
        </form>
      </div>

      <div className="container right-container">
        <div className="quote-text">
          THE GOAL OF LIFE IS <br />
          LIVING IN AGREEMENT <br />
          WITH NATURE.
        </div>
      </div>
    </div>
  );
}

export default Login;
