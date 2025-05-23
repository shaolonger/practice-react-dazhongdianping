import React from 'react';
import OrderListComponent from '../../../components/OrderListComponent';

// fetch
import get from '../../../fetch/get';
import post from '../../../fetch/post';

import './style.less';

export default class OrderList extends React.Component{
    constructor() {
        super();
        this.state = {
            data: []
        }
    }
    render() {
        return (
            <div className="order-list-container">
                <h2>您的订单</h2>
                {
                    this.state.data.length
                        ? <OrderListComponent data={this.state.data} submitComment={this.submitComment} />
                        : <div>暂无数据</div>
                }
            </div>
        );
    }
    componentDidMount() {
        const username = this.props.username;
        if (username) {
            this.getOrderList(username);
        }
    }
    getOrderList(username) {
        let url = `/api/orderlist/${username}`;
        get(url).then(res => res.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }
    submitComment(id, content, star, callback) {
        let url = `/api/submitComment`;
        let data = {
            id,
            content,
            star
        };
        post(url, data).then(res => res.json())
            .then(json => {
                if (json.errno === 0) {
                    callback();
                }
            })
    }
}
