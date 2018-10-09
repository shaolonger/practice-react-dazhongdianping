import React from 'react';

// components
import HomeSearchInput from '../HomeSearchInput';

import './style.less';

export default class SearchHeader extends React.Component{
    render() {
        return (
            <div id="search-header" className="clear-fix">
                <span className="back-icon float-left" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <div className="input-container">
                    <i className="icon-search"></i>
                    &nbsp;
                    <HomeSearchInput />
                </div>
            </div>
        );
    }
    clickHandle() {
        window.history.back();
    }
}
