import React from 'react';

// containers and components
import HomeHeader from '../../components/HomeHeader';
import Category from '../../components/Category';
import Ad from './subPage/Ad';
import List from './subPage/List';

// redux
import { connect } from 'react-redux';
import { setCity } from '../../store/actions';
import { bindActionCreators } from 'redux';

// others
import { CITYNAME } from '../../config/localStorageKey';
import localStore from '../../util/localStore';

class Home extends React.Component{
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.cityName} />
                <Category />
                <Ad />
                <List />
            </div>
        );
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
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: bindActionCreators(setCity, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
