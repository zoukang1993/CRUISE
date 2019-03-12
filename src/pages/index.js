import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';


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
            <div className="container">
                <div className="left-tab">left</div>
                <div className="main">main</div>
            </div>
        );
    }
}

export default MainPanel;
