import React from 'react';

// 组件初始state
const initialState = {
    data: [],
    hasMore: false,
    isLoadingMore: false,
    page: 0
}

// components
import HomeList from '../../../components/HomeList';
import HomeLoadMore from '../../../components/HomeLoadMore';

// redux
import { connect } from 'react-redux';

// fetch
import get from '../../../fetch/get';

class SearchList extends React.Component{
    constructor() {
        super();
        this.state = initialState;
    }
    componentDidMount() {
        // 首次加载首页数据
        this.getListData(this.props.cityName, 0);
    }
    componentDidUpdate(prevProps, prevState) {
        // const props = this.props;
        // console.log('prevProps', prevProps)
        // console.log('thisProps', props)
    }
    shouldComponentUpdate(nextProps, nextState) {
        const category = this.props.category;
        const keyword = this.props.keword;
        if (category === nextProps.category && keyword === nextProps.keyword) {
            return false;
        } else {
            return true;
        }
    }
    render() {
        return (
            <div>
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

export default connect(mapStateToProps)(SearchList)
