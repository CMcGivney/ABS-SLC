import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <div className="homeContentGrid">
  <Header.Content as="h1" className="title" >
    Page not found return
    <Link to="/"> Home</Link>
  </Header.Content>
  </div>
)



export default NoMatch;