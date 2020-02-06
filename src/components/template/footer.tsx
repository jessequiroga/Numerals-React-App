import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <nav>
      <NavLink activeClassName="active" to="/new">
        <button>Create New Song</button>
      </NavLink>
    </nav>
  );
}

export default Footer;