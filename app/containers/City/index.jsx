import React from 'react';

// components
import CityHeader from '../../components/CityHeader';
import CurrentCity from '../../components/CurrentCity';

// redux
import { connect } from 'react-redux';

class City extends React.Component{
    render() {
        const cityName = this.props.cityName;
        return (
            <div>
                <CityHeader title="选择城市" />
                <CurrentCity cityName={cityName} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    }
}

export default connect(mapStateToProps)(City)
