import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

import Logo from "../images/ABS-BlackLogo.png";

export default () => {

  return (
    <Fragment>
      <NavLink to="/" name="Home" id="home">
        <img height="75" width="140" src={Logo} alt="ABS Seafood Logo" />
      </NavLink>
      <div>
        <NavLink exact to="/" activeClassName="selected" name="Home" id="home">
          Home
        </NavLink>
        <NavLink exact to="/Contact" name="Contact" id="Contact">
          Contact
        </NavLink>
        <NavLink exact to="/Products" name="Products" id="Products">
          Products
        </NavLink>
        <NavLink exact to="/FAQ" name="FAQ" id="FAQ">
          FAQ
        </NavLink>
      </div>
    </Fragment>
  );
};
