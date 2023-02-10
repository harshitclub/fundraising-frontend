import React from "react";
import "../Styles/Components/Login.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-form">
          <form method="POST">
            <input
              className="login-f"
              type="email"
              name="email"
              placeholder="Email"
              required
              autoComplete="off"
            />
            <input
              className="login-f"
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="off"
            />
            <input className="login-btn" type="submit" name="login" />
          </form>
        </div>
        <p>
          New To Sadhana Foundation?{" "}
          <span>
            <Link to="/signup">Signup Now</Link>
          </span>
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Login;
