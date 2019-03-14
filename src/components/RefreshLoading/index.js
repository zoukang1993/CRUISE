import React, {Component} from 'react';
// import {throttle} from '../../utils/fun';


class RefreshLoading extends Component {
    constructor(props) {
        super(props);

        this.state = {
            startPos: 0.00,
            endPos: 0.00,
            loadingNum: 16,
        };
    }

    componentDidMount() {
        window.addEventListener("touchstart", (e) => this.touchStart(e), {passive: false});
        window.addEventListener("touchmove", (e) => this.touchMove(e), {passive: false});
        window.addEventListener("touchend", (e) => this.touchEnd(e), {passive: false});
    }

    getScrollTop = () => {
        let scrollTop = 0;
        
        if (document.documentElement && document.documentElement.scrollTop) {
            scrollTop = document.documentElement.scrollTop;
        } else if (document.body) {
            scrollTop = document.body.scrollTop;
        }

        return scrollTop;
    }

    getClientHeight = () => {
        let clientHeight = 0;

        if (document.body.clientHeight && document.documentElement.clientHeight) {
            clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
        } else {
            clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
        }

        return clientHeight;
    }

    getScrollHeight = () => {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }

    touchStart = (e) => {
        let startPos = e.touches[0].pageY;
        
        this.setState({
            startPos,
        });
    }

    touchMove = (e) => {
        let endPos = e.touches[0].pageY;

        this.setState({
            endPos,
        });

        if (endPos - this.state.startPos > 0) {
            console.log("down");
        } else {
            console.log("up");
        }
    }

    touchEnd = (e) => {
        if (this.getScrollTop() + this.getClientHeight() === this.getScrollHeight()) {
            console.log("end");
        }
    }

    scrollHandle = (e) => {
        console.log(e);
    }

    render() {
        return(
            <div className="refresh-loading"
                
            >
                {this.props.children}
            </div>
        )
    }
}

export default RefreshLoading;
