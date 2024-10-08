import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <h3>The Coctail Hub</h3>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
