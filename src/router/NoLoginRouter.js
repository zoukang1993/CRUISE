import React, { Component } from 'react'

import { Switch, Route } from 'react-router-dom';

import Test from '../pages/Test';

class NoLoginRouter extends Component {
    render() {
        return(
            <div>
                <Switch>
                    <Route path="/test" replace component={Test} exact />
                </Switch>
            </div>
        )
    }
}

export default NoLoginRouter;
