import React, { Component } from 'react'
import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import './index.scss';
import AgentDetail from './AgentDetail';

@inject('stores')
@observer
class Agent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
            searchText: '',
        };
    }

    @computed get agentStore() {
        return this.props.stores.agentStore;
    }

    init = async () => {
        await this.agentStore.getAgentList();

        this.setState({
            content: this.agentStore.agentList
        });
    }

    componentWillMount() {
        this.init();
    }

    inputSearchText = (e) => {
        this.setState({
            searchText: e.target.value,
        });
    }

    search = () => {
        if (!this.state.searchText) {
            return;
        }

        // todo search
    }

    _renderHeader() {
        return(
            <div className="agent-page-header">
                <div className="header-card header-card-yellow">
                    <div className="header-card-title">Building</div>
                    <div className="header-card-num">3</div>
                </div>
                <div className="header-card header-card-green">
                    <div className="header-card-title">Idle</div>
                    <div className="header-card-num">3</div>
                </div>
                <div className="header-card">
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">ALL</div>
                        <div className="header-card-item-num">8</div>
                    </div>
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">PHYSICAL</div>
                        <div className="header-card-item-num">4</div>
                    </div>
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">VIRTUAL</div>
                        <div className="header-card-item-num">4</div>
                    </div>
                </div>
            </div>
        );
    }

    _renderOperateTemp() {
        return(
            <div className="agent-page-operate">
                <div className="switch-card-menu-container">
                    <div className="swithc-card-menu-item active">All</div>
                    <div className="swithc-card-menu-item">Physical</div>
                    <div className="swithc-card-menu-item">Virtual</div>
                </div>
                <div className="agent-search-area">
                    <svg className="icon iconsearch" aria-hidden="true" onClick={this.search}>
                        <use xlinkHref="#iconsearch"></use>
                    </svg>
                    <input
                        className="agent-search-input"
                        value={this.state.searchText}
                        onChange={this.inputSearchText}
                    />
                </div>
                <div className="agent-others">
                    <span className="agent-others-menu">
                        <svg className="icon iconmenu" aria-hidden="true" onClick={this.search}>
                            <use xlinkHref="#iconmenu"></use>
                        </svg>
                    </span>
                    <span>
                        <svg className="icon iconninedot" aria-hidden="true" onClick={this.search}>
                            <use xlinkHref="#iconninedot"></use>
                        </svg>
                    </span>
                </div>
            </div>
        );
    }

    _renderMain() {
        return(
            <div className="agent-page-main">
                {
                    this.state.content.length > 0 ? this.state.content.map((item) => 
                        <AgentDetail
                            content = {item}
                            key = {item.id}
                        />
                    ) : 'NO AGENT DATA !'
                }
            </div>
        );
    }

    render() {
        return(
            <div className="agent-page-container">
                {this._renderHeader()}
                {this._renderOperateTemp()}
                {this._renderMain()}
            </div>
        );
    }
}

export default Agent;

{/* <svg className="icon icondelete" aria-hidden="true">
        <use xlinkHref="#icondelete"></use>
    </svg> */}
