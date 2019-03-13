import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import './index.scss';

import Agent from './Agent';
import Settings from './Settings';
import HomeLayout from '../layouts/HomeLayout';

@withRouter
@inject('stores')
@observer
class MainPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'agent',
        };
    }

    render() {
        return(
            <div>
                <HomeLayout>
                    {this.state.activePage === 'agent' ? <Agent /> : ''}
                    {this.state.activePage === 'settings' ? <Settings /> : ''}
                </HomeLayout>
            </div>
        );
    }
}

export default MainPanel;
