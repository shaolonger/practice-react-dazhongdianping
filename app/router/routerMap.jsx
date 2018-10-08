import React from 'react';

// react-router-dom
import { HashRouter, Switch, Route } from 'react-router-dom';

// redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCity } from '../store/actions';

// containers
import Home from '../containers/Home';
import City from '../containers/City';
import User from '../containers/User';
import Detail from '../containers/Detail';
import Search from '../containers/Search';
import NotFound from '../containers/NotFount';
// components
import HomeHeader from '../components/HomeHeader';

// others
import { CITYNAME } from '../config/localStorageKey';
import localStore from '../util/localStore';

class RouterMap extends React.Component {
    constructor() {
        super();
        this.state = {
            initDone: true
        };
    }
    componentDidMount() {
        // 从localStorage里获取城市
        let cityName = localStore.getItem(CITYNAME);
        if (cityName == null) {
            cityName = '北京';
            localStore.setItem(CITYNAME, cityName);
        }
        let { setCity } = this.props;
        setCity(cityName);
    }
    render() {
        let { cityName } = this.props;
        return (
            this.state.initDone ?
                <div>
                    <div>
                        <HomeHeader cityName={cityName} />
                    </div>
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
                </div>
                :
                <div>加载中...</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity(...args) {
            // dispatch(setCity(...args));
            bindActionCreators(setCity(...args), dispatch);
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RouterMap)
