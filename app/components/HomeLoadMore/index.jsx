import React from 'react';

import './style.less';

export default class HomeLoadMore extends React.Component{
    render() {
        return (
            <div className="load-more" ref="wrapper">
                {
                    this.props.isLoadingMore
                        ? <span>加载中...</span>
                        : <span onClick={this.props.loadMoreFn}>点击加载更多</span>
                }
            </div>
        );
    }
    componentDidMount() {
        const wrapper = this.refs.wrapper;
        const loadMoreFn = this.props.loadMoreFn;
        let timeout;
        let callback = function () {
            const top = wrapper.getBoundingClientRect().top;
            const windowHeight = window.screen.height;
            if (top && top < windowHeight) {
                loadMoreFn();
            }
        }
        window.addEventListener('scroll', function () {
            if (this.props.isLoadingMore) return;
            if (timeout) clearTimeout(timeout);
            timeout = setTimeout(callback, 500);
        }.bind(this), false)
    }
}
