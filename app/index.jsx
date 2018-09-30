import React from 'react';
import ReactDom from 'react-dom';

import './static/css/common.less';

// react-router-dom
import { HashRouter, Switch, Route } from 'react-router-dom';

// containers
import Home from './containers/Home';
import City from './containers/City';
import User from './containers/User';
import Detail from './containers/Detail';
import Search from './containers/Search';
import NotFound from './containers/NotFount';

// react-redux
import { Provider } from 'react-redux';
import store from './store/store';

class Index extends React.Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/city" component={City}></Route>
                        <Route path="/user" component={User}></Route>
                        <Route path="/search" component={Search}></Route>
                        <Route path="/detail" component={Detail}></Route>
                        <Route component={NotFound}></Route>
                    </Switch>
                </div>
            </HashRouter>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
