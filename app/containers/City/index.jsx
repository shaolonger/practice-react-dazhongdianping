import React from 'react';

// components
import CurrentCity from '../../components/CurrentCity';

export default class City extends React.Component{
    render() {
        return (
            <div>
                <CurrentCity cityName={'北京'} />
            </div>
        );
    }
}
