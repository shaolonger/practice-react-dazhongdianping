import React from 'react';

// react-router-dom
import { HashRouter, Switch, Route } from 'react-router-dom';

// containers
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Detail from '../containers/Detail';
import Search from '../containers/Search';
import NotFound from '../containers/NotFount';

export default class RouterMap extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: true
        };
    }
    render() {
        return (
            this.state.initDone ?
                <div>
                    <HashRouter>
                        <Switch>
                            <Route path="/" exact component={Home}></Route>
                            <Route path="/city" component={City}></Route>
                            <Route path="/user" component={User}></Route>
                            <Route path="/search/:type/:keyword?" component={Search}></Route>
                            <Route path="/detail/:id" component={Detail}></Route>
                            <Route component={NotFound}></Route>
                        </Switch>
                    </HashRouter>
                </div>
                :
                <div>加载中...</div>
        );
    }
}
