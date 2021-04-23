import React from "react";
import DropDownMenu from "./DropdownNavbar.js";
import NavBarContent from "./NavBarContent.js"
import UseWindowSize from "../hooks/useWindowSize.js"


const Navbar = () => {
  const size = UseWindowSize();
  
  const NavbarComponent =
    size.width <= 650 ? (
      <DropDownMenu />
    ) : (
      <NavBarContent />
    );

  return NavbarComponent;
}


export default Navbar;
