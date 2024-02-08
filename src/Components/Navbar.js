// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = (props) => {
  const myStyle = {
    margin: "0 10px 0 10px",
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                style={myStyle}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={myStyle} to="/events">
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={myStyle} to="/about">
                About us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={myStyle} to="/OurTeam">
                Our Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" style={myStyle} to="/gallery">
                Gallery
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link
              className="btn btn-warning"
              style={myStyle}
              type="button"
              to="/LiveEvents"
            >
              Watch Live
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
