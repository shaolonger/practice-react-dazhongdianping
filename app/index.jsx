import React from 'react';
import { render } from 'react-dom';

import './static/css/common.less';

// react-router-dom
import { HashRouter, Route } from 'react-router-dom';

// containers
import Home from './containers/Home';
import Detail from './containers/Detail';
import List from './containers/List';
import NotFound from './containers/NotFount';

// react-redux
import { Provider } from 'react-redux';
import store from './store/store';

class Index extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <HashRouter>
                    <div>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/detail" component={Detail}></Route>
                        <Route path="/list" component={List}></Route>
                        <Route component={NotFound}></Route>
                    </div>
                </HashRouter>
            </Provider>
        );
    }
}

render(
    <Index />,
    document.getElementById('root')
);
