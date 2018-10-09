import React from 'react';

import './style.less';

// components
import Star from '../../Star';

export default class Item extends React.Component{
    render() {
        const item = this.props.data;
        return (
            <div className="comment-item">
                <h3>
                    <i className="icon-user"></i>
                    &nbsp;
                    {item.username}
                </h3>
                <Star star={item.star} />
                <p>{item.comment}</p>
            </div>
        );
    }
}
