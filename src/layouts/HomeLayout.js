import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import './index.scss';

class HomeLayout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    setActive = (activePage) => {
        this.props.onChangePage(activePage);
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
                        <div className="left-tab-item">
                            <Link to="/agent">Agent</Link>
                        </div>
                        <div className="left-tab-item">
                            <Link to="/settings">Settings</Link>
                        </div>
                        <div className="left-tab-item">Personal</div>
                        <div className="left-tab-item">Others</div>
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
