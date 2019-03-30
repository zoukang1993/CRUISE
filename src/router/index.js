import React, { Component } from 'react';
// import { Switch, Route } from 'react-router-dom';

import LoginRouter from './LoginRouter';
import NoLoginRouter from './NoLoginRouter';

class Routers extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: true,
        }
    }

    render() {
        return(
            <div>
                {
                    this.state.isLogin ?
                    <LoginRouter /> :
                    <NoLoginRouter />
                }
            </div>
        );
    }
}

export default Routers;