import React, { Component } from 'react'
import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import AgentDetail from './AgentDetail';
import './index.scss';

@inject('stores')
@observer
class Agent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [],
            searchText: '',
            buildingNum: 0,
            idleNum: 0,
            allNum: 0,
            physical: [],
            virtual : [],
            activeTabMenu: 'all',
        };
    }

    @computed get agentStore() {
        return this.props.stores.agentStore;
    }

    init = async () => {
        await this.agentStore.getAgentList();
        let agentData = this.agentStore.agentList;
        let buildingArr = agentData.filter((item) => item.status === 'building');
        let idleArr = agentData.filter((item) => item.status === 'idle');
        let physicalArr = agentData.filter((item) => item.type === 'physical');
        let virtualArr = agentData.filter((item) => item.type === 'virtual');

        this.setState({
            content: agentData,
            buildingNum: buildingArr.length || 0,
            idleNum: idleArr.length || 0,
            allNum: agentData.length || 0,
            physical: physicalArr,
            virtual: virtualArr,
        });
    }

    componentWillMount() {
        this.init();
    }

    selectDataRender = (type) => {
        let activeTab = "";

        switch(type) {
            case 'content':
                activeTab = 'all'
                break;
            case 'physical':
                activeTab = 'physical'
                break;
            case 'virtual':
                activeTab = 'virtual'
                break;
            default:
                activeTab = "all"
                break;
        }


        if (!type) {
            return;
        }

        let selectData = this.state[type];

        this.setState({
            content: selectData,
            activeTabMenu: activeTab,
        });
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
                    <div className="header-card-num">{this.state.buildingNum}</div>
                </div>
                <div className="header-card header-card-green">
                    <div className="header-card-title">Idle</div>
                    <div className="header-card-num">{this.state.idleNum}</div>
                </div>
                <div className="header-card calculate-data-show">
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">ALL</div>
                        <div className="header-card-item-num">{this.state.allNum}</div>
                    </div>
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">PHYSICAL</div>
                        <div className="header-card-item-num">{this.state.physical.length || 0}</div>
                    </div>
                    <div className="header-card-total-item">
                        <div className="header-card-item-title">VIRTUAL</div>
                        <div className="header-card-item-num">{this.state.virtual.length || 0}</div>
                    </div>
                </div>
            </div>
        );
    }

    _renderOperateTemp() {
        return(
            <div className="agent-page-operate">
                <div className="switch-card-menu-container">
                    <div className={`swithc-card-menu-item ${this.state.activeTabMenu === "all" ? 'active' : ''}`} onClick={() => this.selectDataRender("content")}>All</div>
                    <div className={`swithc-card-menu-item ${this.state.activeTabMenu === "physical" ? 'active' : ''}`} onClick={() => this.selectDataRender("physical")}>Physical</div>
                    <div className={`swithc-card-menu-item ${this.state.activeTabMenu === "virtual" ? 'active' : ''}`} onClick={() => this.selectDataRender("virtual")}>Virtual</div>
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
