import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import "./App.css";

import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Inventory from "./Pages/Inventory";
import FAQ from "./Pages/FAQ";
import NavBar from "./components/NavbarSwitch.js";
import Footer from "./components/FooterAlt";
import NoMatch from "./Pages/NoMatch";
import ScrollToTop from "./components/scrollToTop";

import TagManager from "react-gtm-module";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-LSC0KJ6YGL");

  const tagManagerArgs = {
    gtmId: "GTM-MZFK97R",
  };
  
  const history = useHistory();

  TagManager.initialize(tagManagerArgs);

  window.dataLayer.push({
    event: "event",
    eventProps: {
      category: "pageview",
      action: "contactForm",
      label: "button push",
      value: 1,
    },
  });

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Products" component={Inventory} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route component={NoMatch} />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
