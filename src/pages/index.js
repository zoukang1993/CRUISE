import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import {Link, withRouter, Redirect} from 'react-router-dom';
import './index.scss';
import Agent from './Agent';

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

    setActive = (activePage) => {
        this.setState({
            activePage,
        });
    }

    render() {
        console.log(this.state.activePage);

        return(
            <div className="app">
                <div className="header">
                    <div className="header-menu">+</div>
                    <div>CRUISE</div>
                    <div>
                        <img className="header-avatar-img" src={require('../assets/logo/avatar.jpg')} alt="avatar" />
                    </div>
                </div>
                <div className="container">
                    <div className="left-tab">
                        <div onClick={() => this.setActive('agent')} className="left-tab-item">
                            <Redirect to="/agent">Agent</Redirect>
                        </div>
                        <div onClick={() => this.setActive('Personal')} className="left-tab-item">Personal</div>
                        <div onClick={() => this.setActive('Setting')} className="left-tab-item">Setting</div>
                        <div onClick={() => this.setActive('Others')} className="left-tab-item">Others</div>
                    </div>
                    <div className="main">
                        {this.state.activePage === 'agent' && <Agent />}
                    </div>
                </div>
                <div className="footer">&copy;2018</div>
            </div>
        );
    }
}

export default MainPanel;
