import React from 'react';

import './style.less';

export default class Header extends React.Component{
    render() {
        return (
            <div id="common-header">
                <span className="back-icon" onClick={this.clickHandle.bind(this)}>
                    <i className="icon-chevron-left"></i>
                </span>
                <h1>{this.props.title}</h1>
            </div>
        );
    }
    clickHandle() {
        const backHandler = this.props.backHandler;
        if (backHandler) {
            backHandler();
        } else {
            window.history.back()
        }
    }
}
