import React from 'react';

import './style.less';

// fetch
import get from '../../../fetch/get';

// components
import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/HomeLoadMore';

export default class Comment extends React.Component{
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
        const id = this.props.id;
        this.getCommentData(id, 0);
    }
    render() {
        return (
            <div className="detail-comment-subpage">
                <h2>用户点评</h2>
                {
                    this.state.data.length
                        ? <CommentList data={this.state.data} />
                        : <div>{/* 加载中... */}</div>
                }
                {
                    this.state.hasMore
                        ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)} />
                        : ''
                }
            </div>
        );
    }
    getCommentData(id, page) {
        let url = `/api/detail/comment/${id}/${page}`;
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
        const id = this.props.id;
        let page = this.state.page;
        this.setState({
            isLoadingMore: true
        });
        this.getCommentData(id, page + 1);
        this.setState({
            isLoadingMore: false,
            page: page + 1
        });
    }
}
