import React from 'react';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCollect } from '../../../store/actions';

// history
import { createHashHistory } from 'history';

import './style.less';

class BuyAndCollect extends React.Component{
    constructor() {
        super();
        this.state = {
            isStore: false
        }
    }
    render() {
        return (
            <div className="buy-store-container clear-fix">
                <div className="item-container float-left">
                    {
                        this.state.isStore
                            ? <button className="selected" onClick={this.storeClickHandle.bind(this)}>已收藏</button>
                            : <button onClick={this.storeClickHandle.bind(this)}>收藏</button>
                    }
                </div>
                <div className="item-container float-right">
                    <button onClick={this.buyClickHandle.bind(this)}>购买</button>
                </div>
            </div>
        );
    }
    componentDidMount() {
        const id = this.props.id;
        let collect = this.props.collect;
        if (collect.length) {
            collect.map(item => {
                if (item.id === id) {
                    this.setState({
                        isStore: true
                    })
                    return;
                }
            })
        }
    }
    // 收藏
    storeClickHandle() {
        if (this.checkLogin()) {
            const add = this.props.setCollect.add;
            const del = this.props.setCollect.del;
            const id = this.props.id;
            if (this.state.isStore) {
                del({
                    id: id
                })
            } else {
                add({
                    id: id
                })
            }
            this.setState({
                isStore: !this.state.isStore
            })
        }
    }
    // 购买
    buyClickHandle() {
        console.log('用户点击了购买');
    }
    // 检查用户是否已登录
    checkLogin() {
        let userInfo = this.props.userInfo;
        if (!userInfo.username) {
            createHashHistory().push('/login');
            return false;
        } else {
            return true;
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        collect: state.collect
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCollect: bindActionCreators(setCollect, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyAndCollect)
