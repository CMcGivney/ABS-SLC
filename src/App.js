import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Inventory from './components/Inventory'
import FAQ from './components/FAQ'
import NavBar from './components/NavBar'
import Footer from './components/FooterAlt'
import NoMatch from './components/NoMatch'
import ScrollToTop from './components/scrollToTop'
import './App.css'
import TagManager from 'react-gtm-module'
import ReactGA from 'react-ga'

function initializeReactGA() {
  ReactGA.initialize('G-LSC0KJ6YGL');
  ReactGA.pageview('/homepage');
}

const tagManagerArgs = {
  gtmId: 'GTM-MPJMMFW'
}
TagManager.initialize(tagManagerArgs)


function App() {
  window.dataLayer.push({
    event: 'event',
    eventProps: {
      category: "pageview",
      action: "getQuote",
      label: "button push",
      value: 1
  }
  });

function App() {
  return (
  <>
   
    <NavBar/>
     <ScrollToTop/>
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/Contact' component={Contact} />
     <Route exact path='/Products' component={Inventory} />
     <Route exact path='/FAQ' component={FAQ} />
     <Route component={NoMatch} />
     </Switch>
   
    <Footer/>
  </>
  );
}

export default App;
