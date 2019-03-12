import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './index.scss';

@inject('stores')
@observer
class MainPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
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
                        <div className>Agent</div>
                    </div>
                    <div className="main">main</div>
                </div>
                <div className="footer">&copy;2018</div>
            </div>
        );
    }
}

export default MainPanel;
