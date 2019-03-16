import React, {Component} from 'react';
import './index.scss';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            visible: false,
        };
    }
    
    componentDidMount() {

    }

    shouldComponentUpdate() {
        return true;
    }

    closeModal = () => {
        let callback = this.props.onCancel;
        callback();
    }

    submit = () => {
        let callback = this.props.onOk;
        callback();
        this.closeModal();
    }

    render() {
        let {
            title,
            visible = false,
        } = this.props;

        return(
            <div>
                {
                    visible ?
                    <div className="modal-container"> 
                        <div className="modal-header">
                            <div className="modal-header-delete-icon">
                                <svg className="icon icondelete1" aria-hidden="true" onClick={this.closeModal}>
                                    <use xlinkHref="#icondelete1"></use>
                                </svg>  
                            </div>
                            <div className="modal-header-title">{title}</div>
                        </div>

                        <div className="modal-main">
                            {this.props.children || ''}
                        </div>
                        <div className="modal-footer">
                            <div className="button add-btn" onClick={this.submit}>Add Resource</div>
                            <div className="button cancel-btn" onClick={this.closeModal}>Cancel</div>
                        </div>
                    </div> : ''
                }
            </div>
        );
    }
}

export default Modal;
