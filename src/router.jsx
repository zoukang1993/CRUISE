import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPanel from './pages';

import Agent from './pages/Agent';


const router = () => {
    return(
        <Switch>
            <Route path="/" component={MainPanel} exact />
            <Route path="/agent" component={Agent} exact />
        </Switch>
    );
}

export default router;
