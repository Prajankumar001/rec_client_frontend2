import React, { useState } from 'react';
import './Login.css';  // Importing external CSS for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    console.log('Login attempt:', { email, password });
    setError('');
  };

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email/Phone</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email or phone"
            required
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className="login-btn">Login</button>
      </form>

      <div className="forgot-password">
        <a href="#">Forgot Password?</a>
      </div>

      <div className="signup-link">
        <p>Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
