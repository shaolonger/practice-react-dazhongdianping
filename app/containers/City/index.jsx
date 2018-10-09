import React from 'react';

// components
import CityHeader from '../../components/CityHeader';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

// redux
import { connect } from 'react-redux';
import { setCity } from '../../store/actions';
import { bindActionCreators } from 'redux';

// localstore
import localStore from '../../util/localStore';
import { CITYNAME } from '../../config/localStorageKey';

class City extends React.Component{
    render() {
        const cityName = this.props.cityName;
        return (
            <div>
                <CityHeader title="选择城市" />
                <CurrentCity cityName={cityName} />
                <CityList changeFn={this.changeFn.bind(this)} />
            </div>
        );
    }
    changeFn(cityName) {
        if (!cityName) return;
        this.props.setCity(cityName);
        localStore.setItem(CITYNAME, cityName);
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCity: bindActionCreators(setCity, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
