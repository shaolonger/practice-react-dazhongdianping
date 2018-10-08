import React from 'react';

// containers and components
import Category from '../../components/Category';
import Ad from './subPage/Ad';
import List from './subPage/List';

export default class Home extends React.Component{
    render() {
        return (
            <div>
                <Category />
                <Ad />
                <List />
            </div>
        );
    }
}
