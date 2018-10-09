import React from 'react';

// history
import { createHashHistory } from 'history';

import './style.less';

export default class HomeSearchInput extends React.Component{
    render() {
        return (
            <input
                className="search-input"
                type="text"
                placeholder="请输入关键字"
                onKeyUp={this.keyUpHandle}
            />
        );
    }
    keyUpHandle(e) {
        if (e.keyCode !== 13) return; // 按下回车
        let value = e.target.value;
        if (!value) return;
        let url = `/search/all/${encodeURIComponent(value)}`;
        createHashHistory().push(url);
    }
}
