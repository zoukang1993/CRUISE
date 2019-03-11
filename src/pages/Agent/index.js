import React, { Component } from 'react'

export default class Agent extends Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return(
            <div>
                <svg className="icon icondelete" aria-hidden="true">
                    <use xlinkHref="#icondelete"></use>
                </svg>
            </div>
        );
    }
}
