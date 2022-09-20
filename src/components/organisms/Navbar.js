import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <Link to="/add-expenses">
        <p>Form</p>
      </Link>
      <Link to="/">
        <p>Char</p>
      </Link>
    </nav>
  );
};
