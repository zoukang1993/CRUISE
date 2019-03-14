import React from 'react';
import {Link} from 'react-router-dom';
import './index.scss';
import classnames from 'classnames';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activePage: 'agent',
        };
    }

    setActive = (activePage) => {
        if (this.state.activePage === activePage) {
            return;
        }

        this.setState({
            activePage,
        });
    }
    
    render () {
        const {children} = this.props;

        return (
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
                        <div className={classnames("left-tab-item", {active: this.state.activePage === "agent"})} onClick={() => this.setActive("agent")}>
                            <Link to="/agent">Agent</Link>
                        </div>
                        <div className={classnames("left-tab-item", {active: this.state.activePage === "settings"})} onClick={() => this.setActive("settings")}>
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className={classnames("left-tab-item", {active: this.state.activePage === "personal"})} onClick={() => this.setActive("personal")}>Personal</div>
                        <div className={classnames("left-tab-item", {active: this.state.activePage === "others"})} onClick={() => this.setActive("others")}>Others</div>
                    </div>
                    <div className="main">
                        {children}
                    </div>
                </div>
                <div className="footer">&copy;2018</div>
            </div>
        );
    }
}

export default HomeLayout;
