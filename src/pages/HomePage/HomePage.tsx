import React, { Component } from 'react';
import './index.scss';
import {computed} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('stores')
@observer
class HomePage extends Component {
    constructor(props: object) {
        super(props);

        this.state = {
            name: 'MY HOME',
        };
    }

    @computed get homePageStore() {
        return this.props.stores.homePageStore;
    }

    init = () : void => {

    }

    componentWillMount() {
        this.init();
    }

    render() {
        return(
            <div className="home-page-container page-container">
                homePage
            </div>
        );
    }
}

export default HomePage;
