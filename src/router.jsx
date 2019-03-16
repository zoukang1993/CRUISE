import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MainPanel from './pages';
import HomeLayout from './layouts//HomeLayout';

import Agent from './pages/Agent';
import Settings from './pages/Settings';

const router = () => {
    return(
        <Switch>
            <Route path="/" component={() => <HomeLayout><Agent /></HomeLayout>} exact />
            <Route path="/agent" replace component={() => <HomeLayout><Agent /></HomeLayout>} exact />
            <Route path="/settings" component={() => <HomeLayout><Settings /></HomeLayout>} exact />
        </Switch>
    );
}

export default router;
