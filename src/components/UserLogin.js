import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const UserLogin = () => {
  return (
    <div className="auth-container">
      <h2>User Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default UserLogin;
