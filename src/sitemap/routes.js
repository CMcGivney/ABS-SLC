import React from 'react';
import { Route, Switch } from 'react-router-dom';
 
export default (
    <Switch>
	   <Route exact path='/' />
       <Route exact path='/Contact' />
	   <Route exact path='/Products' />
	   <Route exact path='/FAQ' />
       <Route />
    </Switch>
);
