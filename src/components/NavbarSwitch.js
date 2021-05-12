import React, { useState } from "react";
import useWindowSize from "../hooks/useWindowSize.js";
import DropDownMenu from "./DropdownNavbar.js";
import { Navbar } from "../Styles/index.js";
import NavLinks from "../components/nav-links";
import { useInterval } from "../hooks/useInterval.js";
import { useScrollPosition } from "../hooks/useScrollPosition.js";

const NavbarSwitch = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const size = useWindowSize();
  const isMobile = size.width <= 500;

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  useInterval(() => {
    setHideOnScroll(true);
  }, 3000);

  return (
    <>
      {isMobile ? (
        <Navbar show={hideOnScroll}>
          <DropDownMenu />
        </Navbar>
      ) : (
        <Navbar show={hideOnScroll}>
          <NavLinks />
        </Navbar>
      )}
    </>
  );
};

export default NavbarSwitch;
