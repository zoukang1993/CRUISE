import React, { Component } from 'react'
// import {computed} from 'mobx';
import {inject, observer} from 'mobx-react';
import './index.scss';
import PropTypes from 'prop-types';
import Modal from '../../../components/Modal';

@inject('stores')
@observer
class AgentDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            modalVisible: false,
            agentSources: '',
        };
    }

    static propTypes = {
        data: PropTypes.object,
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

    addResource = () => {
        if (!this.state.agentSources) {
            this.cancelModal();
            return;
        }

        let content = this.props.content;
        let agentArr = this.state.agentSources.trim().split(",");

        agentArr.map((item) => {
            if (content.resources.includes(item)) {
                return content.resources;
            }

            content.resources.push(item);
            return content;
        });

        this.setState({
            data: content,
        });

        this.cancelModal();
    }

    openModal = () => {
        this.setState({
            modalVisible: true,
        });
    }

    cancelModal = () => {
        this.setState({
            agentSources: '',
            modalVisible: false,
        });
    }

    addAgentSources = (e) => {
        this.setState({
            agentSources: e.target.value,
        });
    }

    removeResource = (item) => {
        let allData = this.state.data;
        let index = this.state.data.resources.indexOf(item);
        allData.resources.splice(index, 1);

        this.setState({
            data: allData,
        });
    }

    denyAgent = () => {
        if (!this.state.status === "idle") {
            return;
        }

        let allData = this.state.data;
        allData.status = 'idle';
        this.setState({
            data: allData,
        });
    }

    renderOSImg() {
        let {os} = this.state.data;
        
        if (!os) {
            return;
        }

        if (os === "windows") {
            return <img src={require('../../../assets/os_icons/windows.png')} alt="windows" />;
        } else if (os === 'ubuntu') {
            return <img src={require('../../../assets/os_icons/ubuntu.png')} alt="ubuntu" />;
        } else if (os === 'debian') {
            return <img src={require('../../../assets/os_icons/debin.png')} alt="debian" />;
        } else if (os === 'suse') {
            return <img src={require('../../../assets/os_icons/suse.png')} alt="suse" />;
        } else if (os === 'centos') {
            return <img src={require('../../../assets/os_icons/cent_os.png')} alt="cent_os" />;
        } else {
            return null;
        }
    }

    _renderModalView() {
        return(
            <Modal
                title="Separate multiple resource name with commas"
                visible = {this.state.modalVisible}
                onOk = {this.addResource}
                onCancel={() => this.cancelModal()}
            >
                <input
                    className = "modal-input"
                    value = {this.state.agentSources}
                    onChange = {this.addAgentSources}
                    placeholder = {"Input value"}
                />
            </Modal>
        );
    }

    _renderAgentResource() {
        return(
            <div className="agent-resource-list">
                <div>
                    <span onClick={this.openModal}>
                        <svg className="icon iconadd add-agent-source-icon" aria-hidden="true">
                            <use xlinkHref="#iconadd"></use>
                        </svg>
                    </span>
                    {
                        this.state.data.resources.length ?
                        this.state.data.resources.map((item) => 
                            <span key={item} className="agent-resource-item">
                                {item} 
                                <svg className="icon icondelete" aria-hidden="true" onClick={() => this.removeResource(item)}>
                                    <use xlinkHref="#icondelete"></use>
                                </svg>
                            </span>
                        ) : <span></span>
                    }
                </div>
                {
                    this.state.data.status === 'building' ?
                    <span className="agent-deny" onClick={this.denyAgent}>
                        <svg className="icon icondeny" aria-hidden="true">
                            <use xlinkHref="#icondeny"></use>
                        </svg> deny
                    </span>
                    : ''
                }
                {this._renderModalView()}
            </div>
        );
    }

    render() {
        return(
            <div className="agent-detail">
                <div className="agent-detail-os">
                    {this.renderOSImg()}
                </div>
                <div className="agent-detail-info">
                    <div className="agent-detail-info-basic-list">
                        <span className="agent-detail-info-basic-item">
                            <svg className="icon iconcomputer info-basic-icon" aria-hidden="true">
                                <use xlinkHref="#iconcomputer"></use>
                            </svg> 
                            <span className="info-basic-text name-text">{this.state.data.name}</span>
                        </span>
                        {
                            this.state.data === "building" ?
                            <div className="agent-status building">{this.state.data.status}</div>
                            :
                            <div className="agent-status idle">{this.state.data.status}</div>
                        }
                        <span className="agent-detail-info-basic-item">
                            <svg className="icon icongantanhao" aria-hidden="true">
                                <use xlinkHref="#icongantanhao"></use>
                            </svg> 
                            <span>{this.state.data.ip}</span>
                        </span>
                        <span className="agent-detail-info-basic-item">
                            <svg className="icon iconfile" aria-hidden="true">
                                <use xlinkHref="#iconfile"></use>
                            </svg> 
                            <span>{this.state.data.location}</span>
                        </span>
                    </div>
                    {this._renderAgentResource()}
                </div>
            </div>
        );
    }
}

export default AgentDetail;
