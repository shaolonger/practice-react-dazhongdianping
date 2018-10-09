import React from 'react';

// react-router-dom
import { Link } from 'react-router-dom';

// components
import HomeSearchInput from '../HomeSearchInput';

import './style.less'

export default class HomeHeader extends React.Component{
    render() {
        return (
            <div id="home-header">
                <div className="home-header-left">
                    <Link to="/city">
                        <span>{this.props.cityName}</span>
                        &nbsp;
                        <i className="icon-angle-down"></i>
                    </Link>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <HomeSearchInput />
                    </div>
                </div>
                <div className="home-header-right">
                    <Link to="/login">
                        <i className="icon-user"></i>
                    </Link>
                </div>
            </div>
        );
    }
}
