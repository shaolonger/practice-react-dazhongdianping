import React from 'react';

export default class Header extends React.Component{
    render() {
        return (
            <div>
                <div>{this.props.city}</div>
                <div>搜索框：请输入关键字</div>
                <div>个人中心</div>
            </div>
        );
    }
}
