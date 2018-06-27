import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../Home/Home';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Home}></Route>
    </Switch>
)

export default Routes;