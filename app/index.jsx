import React from 'react';
import ReactDom from 'react-dom';

import './static/css/common.less';

// components
import RouterMap from './router/routerMap';

// redux
import { Provider } from 'react-redux';
import store from './store/store';

ReactDom.render(
    <Provider store={store}>
        <RouterMap />
    </Provider>,
    document.getElementById('root')
);
