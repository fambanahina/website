import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="wrapper nav-wrapper">
        <div className="logo">
          <Link to="/">FNH</Link>
        </div>
        <div className="nav-links"></div>
      </div>
    </nav>
  );
};

export default Navbar;
