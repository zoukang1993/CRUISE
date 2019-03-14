import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import './index.scss';

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
                
            </div>
        );
    }
}

export default MainPanel;
