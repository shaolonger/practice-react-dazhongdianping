import React from 'react';

// containers and components
import Category from '../../components/Category';
import Ad from './subPage/Ad';

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <Category />
                <Ad />
            </div>
        );
    }
}
