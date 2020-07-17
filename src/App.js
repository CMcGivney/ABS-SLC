import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Inventory from './components/Inventory'
import FAQ from './components/FAQ'
import NavBar from './components/NavBar'
import Footer from './components/FooterAlt'
import NoMatch from './components/NoMatch'
import {Container} from 'semantic-ui-react'
import ScrollToTop from './components/scrollToTop'
import './App.css'

function App() {
  return (
  <>
   <Container fluid >
    <NavBar/>
     <ScrollToTop/>
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/Contact' component={Contact} />
     <Route exact path='/Products' component={Inventory} />
     <Route exact path='/FAQ' component={FAQ} />
     <Route component={NoMatch} />
     </Switch>
    </Container>
    <Footer/>
  </>
  );
}

export default App;
