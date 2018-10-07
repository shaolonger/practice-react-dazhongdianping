import React from 'react';

import './style.less'

export default class HomeHeader extends React.Component{
    render() {
        return (
            <div id="home-header">
                <div className="home-header-left">
                    <span>{this.props.cityName}</span>
                    &nbsp;
                    <i className="icon-angle-down"></i>
                </div>
                <div className="home-header-middle">
                    <div className="search-container">
                        <i className="icon-search"></i>
                        <input type="text" placeholder="请输入关键字" />
                    </div>
                </div>
                <div className="home-header-right">
                    <i className="icon-user"></i>
                </div>
            </div>
        );
    }
}
