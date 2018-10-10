import React from 'react';

// components
import Star from '../../../components/Star';

import './style.less';

export default class Item extends React.Component{
    constructor() {
        super();
        this.state = {
            commentState: 0,  // commentState  0-未评价 1-评价中 2-已评价
            stars: {}
        }
    }
    componentDidMount() {
        this.setState({
            commentState: this.props.data.commentState
        });
    }
    render() {
        const data = this.props.data;
        return (
            <div className="order-item-container">
                <div className="clear-fix">
                    <div className="order-item-img float-left">
                        <img src={data.img} />
                    </div>
                    <div className="order-item-comment float-right">
                        {
                            this.state.commentState === 0
                                // 未评价
                                ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                                :
                                this.state.commentState === 1
                                    // 评价中
                                    ? ''
                                    // 已经评价
                                    : <button className="btn unseleted-btn">已评价</button>
                        }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：￥{data.price}</span>
                    </div>
                </div>
                {
                    // “评价中”才会显示输入框
                    this.state.commentState === 1
                        ? <div className="comment-text-container">
                            <textarea style={{ width: '100%', height: '80px' }} className="comment-text" ref="commentText"></textarea>
                            <div style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                                <Star star="0" starClickCallback={this.starClickCallback.bind(this)} />
                            </div>
                            <button className="btn" onClick={this.submitComment.bind(this)}>提交</button>
                            &nbsp;
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                        </div>
                        : ''
                }
            </div>
        );
    }
    showComment() {
        this.setState({
            commentState: 1
        })
    }
    hideComment() {
        this.setState({
            commentState: 0
        })
    }
    finishComment() {
        this.setState({
            commentState: 2
        })
    }
    starClickCallback(star) {
        let stars = this.state.stars;
        const id = this.props.data.id;
        stars[id] = star;
        this.setState({
            stars: stars
        });
    }
    submitComment() {
        const submitComment = this.props.submitComment;
        const id = this.props.data.id;
        const stars = this.state.stars;
        const star = stars[id] || '0';
        const commentText = this.refs.commentText;
        const content = commentText.value.trim();
        if (content) {
            submitComment(id, content, star, this.finishComment.bind(this));
        }
    }
}
