import React from 'react';

// redux
import { connect } from 'react-redux';

// fetch
import get from '../../../fetch/get';

// components
import HomeList from '../../../components/HomeList';
import HomeLoadMore from '../../../components/HomeLoadMore';

import './style.less';

class List extends React.Component{
    constructor() {
        super();
        this.state = {
            data: [],
            hasMore: false,
            isLoadingMore: false,
            page: 0
        }
    }
    componentDidMount() {
        // 首次加载首页数据
        this.getListData(this.props.cityName, 0);
    }
    render() {
        return (
            <div>
                <h2 className="home-list-title">猜你喜欢</h2>
                {
                    this.state.data.length ?
                        <HomeList data={this.state.data} />
                        :
                        <div>加载中</div>
                }
                {
                    this.state.hasMore ?
                        <HomeLoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        :
                        <div>没有更多了</div>
                }
            </div>
        );
    }
    getListData(city, page) {
        let url = `/api/homelist/${city}/${page}`;
        get(url)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    hasMore: json.hasMore,
                    data: this.state.data.concat(json.data)
                });
            })
    }
    loadMoreData() {
        let city = this.props.cityName;
        let page = this.state.page;
        this.setState({
            isLoadingMore: true
        });
        this.getListData(city, page + 1);
        this.setState({
            isLoadingMore: false,
            page: page + 1
        });
    }
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityInfo
    }
}

export default connect(mapStateToProps)(List)
