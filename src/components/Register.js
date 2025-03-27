import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/user-login">Login here</Link>
      </p>
    </div>
  );
};

export default Register;
