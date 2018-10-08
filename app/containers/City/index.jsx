import React from 'react';

// components
import CityHeader from '../../components/CityHeader';
import CurrentCity from '../../components/CurrentCity';
import CityList from '../../components/CityList';

// redux
import { connect } from 'react-redux';
import { setCity } from '../../store/actions';

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
                <CityList changeFn={this.props.changeFn} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeFn(...args) {
            dispatch(setCity(...args));
            const city = args[0];
            localStore.setItem(CITYNAME, city);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(City)
