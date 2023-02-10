import React from "react";
import "../Styles/Components/Signup.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <Navbar />
      <div className="signup-container">
        <div className="signup-l">
          <h1>Right Container</h1>
        </div>
        <div className="signup-r">
          <div className="signup-form">
            <h2>Signup or Registration</h2>
            <form method="POST" className="signup-f" autoComplete="off">
              <div>
                <input
                  className="input-f"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  className="input-f"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <input
                  className="input-f"
                  type="number"
                  name="phone"
                  placeholder="Your Number"
                  required
                />
              </div>
              <div>
                <input
                  className="input-f"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div>
                <input
                  className="input-f"
                  type="password"
                  name="cpassword"
                  placeholder="Confirm Password"
                  required
                />
              </div>
              <div>
                <input
                  className="input-s"
                  type="submit"
                  name="signup"
                  value="Signup"
                />
              </div>
            </form>
          </div>
          <p>
            Already Signed Up?{" "}
            <span>
              <Link to="/login">Login Now</Link>
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
