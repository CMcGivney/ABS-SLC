import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Inventory from "./components/Inventory";
import FAQ from "./components/FAQ";
import NavBar from "./components/NavBar";
import Footer from "./components/FooterAlt";
import NoMatch from "./components/NoMatch";
import ScrollToTop from "./components/scrollToTop";
import "./App.css";
// import TagManager from 'react-gtm-module'
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-LSC0KJ6YGL");

  // const tagManagerArgs = {
  //   gtmId: 'GTM-MPJMMFW'
  // }
  // TagManager.initialize(tagManagerArgs)

  // window.dataLayer.push({
  //   event: "event",
  //   eventProps: {
  //     category: "pageview",
  //     action: "getQuote",
  //     label: "button push",
  //     value: 1,
  //   },
  // });
  const history = useHistory();

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
  console.log(history.location.pathname);
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
