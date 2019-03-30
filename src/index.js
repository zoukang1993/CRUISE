import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import stores from './stores';
import Routers from './router/';
import './index.scss';

const browserHistroy = createBrowserHistory();
const routerStore = new RouterStore();

const history = syncHistoryWithStore(browserHistroy, routerStore);

(() => {
    ReactDOM.render(
        <Provider stores={stores}>
            <Router history={history}>
                <Routers />
            </Router>
        </Provider>,
        document.getElementById('root')
    );
})();

