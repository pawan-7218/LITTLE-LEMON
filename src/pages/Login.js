import React, { useState } from "react";
import { Link } from "react-router-dom"; 

import "./Login.css";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Welcome back, ${email}!`);
  };

  return (
    <section className="login-section">
      <h2>Login to Little Lemon</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p className="signup-text">
  Don’t have an account? <Link to="/signup">Sign Up</Link>
</p>
      </form>
    </section>
  );
};

export default Login;