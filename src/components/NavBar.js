import React from "react";
import DropDownMenu from "./DropDownMenu.js";
import NavBarContent from "./NavBarContent.js"
import UseWindowSize from "../hooks/UseWindowSize.js"


const Navbar = () => {
  const size = UseWindowSize();

     if (size.width <= 650) {
    return <DropDownMenu/>
     }
    else {
    return <NavBarContent /> 
    }
  
}


export default Navbar;
