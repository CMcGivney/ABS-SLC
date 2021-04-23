import React from "react";
import DropDownMenu from "./DropDownMenu.js";
import NavBarContent from "./NavBarContent.js"
import UseWindowSize from "../Hooks/UseWindowSize.js"


const Navbar = () => {
  const size = UseWindowSize();
  
  return (
     (size.width <= 650) ? <DropDownMenu/> : <NavBarContent /> 
    
    ) 
}


export default Navbar;
