import React from "react"
import { Link, withRouter, useLocation } from "react-router-dom";
import { Menu, Image } from "semantic-ui-react";
import Logo from "../images/ABS-BlackLogo.png";

const navStyles = {
  padding: "1rem",
};
const NavBarContent = () => {
  const location = useLocation();

  return (
    <>
    <Menu secondary fixed="top">
      <Link to="/">
        <Menu.Item name="Home" id="home">
          <Image size="tiny" src={Logo} alt="ABS Seafood Logo" />
        </Menu.Item>
      </Link>
      <Menu.Menu position="right" style={navStyles}>
        <Link to="/">
          <Menu.Item
            name="Home"
            as="h4"
            id="home"
            active={location.pathname === "/"}
          />
        </Link>
        <Link to="/Contact">
          <Menu.Item
            name="Contact"
            id="contact"
            as="h4"
            active={location.pathname === "/Contact"}
          />
        </Link>
        <Link to="/Products">
          <Menu.Item
            name="Products"
            id="Products"
            as="h4"
            active={location.pathname === "/Products"}
          />
        </Link>
        <Link to="/FAQ">
          <Menu.Item
            name="FAQ"
            id="FAQ"
            as="h4"
            active={location.pathname === "/FAQ"}
          />
        </Link>
      </Menu.Menu>
    </Menu>
  </>
  )
}

export default withRouter(NavBarContent);