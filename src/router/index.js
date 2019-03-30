import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import LoginRouter from './LoginRouter';

class Routers extends Component {
    render() {
        return(
            <div>
                <LoginRouter />
            </div>
        );
    }
}

export default Routers;