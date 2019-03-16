import React, { Component } from 'react'
// import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import './index.scss';
import PropTypes from 'prop-types';

@inject('stores')
@observer
class AgentDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
        };
    }

    static propTypes = {

    }

    init = () => {
        const content = this.props.content;

        this.setState({
            data: content,
        });
    }

    componentWillMount() {
        this.init();
    }

    render() {
        

        return(
            <div>
                {this.state.data.id}
            </div>
        );
    }
}

export default AgentDetail;
