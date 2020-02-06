import React from 'react';
import {Route, Switch, } from "react-router-dom";
import Home from './components/Home'
import Contact from './components/Contact'
import Services from './components/Services'
import Events from './components/Events'
import NavBar from './components/NavBar'
import Footer from './components/FooterAlt'
import {Container} from 'semantic-ui-react'
import './App.css'

function App() {
  return (
  <>
    <NavBar/>
   <Container fluid >
     <Switch>
     <Route exact path='/' component={Home} />
     <Route exact path='/Contact' component={Contact} />
     <Route exact path='/Services' component={Services} />
     <Route exact path='/Events' component={Events} />
     </Switch>
    </Container>
    <Footer/>
  </>
  );
}

export default App;
