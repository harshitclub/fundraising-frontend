import React from "react";
import "../Styles/Components/Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="navbar">
          <div className="nav-l">
            <div className="logo">
              <Link to="/">
                {" "}
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="menu-link">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/donate">Donate</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-r">
            <div className="menu-link-r">
              <div className="dropdown">
                <button className="dropbtn">Register</button>
                <div className="dropdown-content">
                  <Link to="/login">Login</Link>
                  <Link to="/signup">Signup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
