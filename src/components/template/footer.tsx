import React from "react";
import { NavLink } from "react-router-dom";
import { Fab } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

function Footer() {
  return (
    <nav>
      <NavLink activeClassName="active" to="/new/empty">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </NavLink>
    </nav>
  );
}

export default Footer;