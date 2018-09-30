import React from 'react';
import ReactDom from 'react-dom';

import './static/css/common.less';

// react-router-dom
import { HashRouter, Switch, Route } from 'react-router-dom';

// react-redux
import { Provider } from 'react-redux';
import store from './store/store';

// containers
import Home from './containers/Home';
import City from './containers/City';
import User from './containers/User';
import Detail from './containers/Detail';
import Search from './containers/Search';
import NotFound from './containers/NotFount';

// others
import { CITYNAME } from './config/localStorageKey';
import localStore from './util/localStore';

class Index extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: false
        };
    }
    componentDidMount() {
        // 从localStorage里获取城市
        let cityName = localStore.getItem(CITYNAME);
        if (cityName == null) cityName = '北京';
        console.log('cityName', cityName);
    }
    render() {
        return (
            this.state.initDone ?
                <div>
                    <div>header</div>
                    <HashRouter>
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/city" component={City}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/search/:type/:keyword" component={Search}></Route>
                            <Route path="/detail/:id" component={Detail}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </HashRouter>
                    <div>footer</div>
                </div>
                :
                <div>加载中...</div>
        );
    }
}

ReactDom.render(
    <Provider store={store}>
        <Index />
    </Provider>,
    document.getElementById('root')
);
