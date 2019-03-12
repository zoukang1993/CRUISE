import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { Router } from 'react-router-dom';
import { createHashHistory } from 'history';

import stores from './stores';
import router from './router';
import './index.scss';

const hashHistory = createHashHistory();
const routerStore = new RouterStore();

const history = syncHistoryWithStore(hashHistory, routerStore);

(() => {
    ReactDOM.render(
        <Provider stores={stores}>
            <Router history={history}>
                { router() }
            </Router>
        </Provider>,
        document.getElementById('root')
    );
})();

