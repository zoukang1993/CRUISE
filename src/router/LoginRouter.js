import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomeLayout from '../layouts/HomeLayout';

import HomePage from '../pages/HomePage';
import Agent from '../pages/Agent';
import Settings from '../pages/Settings';

class LoginRouter extends Component {
    render() {
        return(
            <div>
                <HomeLayout>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/agent" replace component={Agent} exact />
                        <Route path="/settings" replace component={Settings} exact />
                    </Switch>
                </HomeLayout>
            </div>
        );
    }
}

export default LoginRouter;