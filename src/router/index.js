import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Agent from '../pages/Agent';
import Settings from '../pages/Settings';

import HomeLayout from '../layouts/HomeLayout';

class Routers extends Component {
    render() {
        return(
            <div>
                <HomeLayout>
                    <Switch>
                        <Route path="/" component={HomePage} exact />
                        <Route path="/agent" replace component={Agent} exact />
                        <Route path="/settings" component={Settings} exact />
                    </Switch>
                    
                </HomeLayout>
                {/* <Switch>
                    <Route path="/settings" component={Settings} exact />
                </Switch> */}
            </div>
        );
    }
}

export default Routers;