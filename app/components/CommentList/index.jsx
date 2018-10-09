import React from 'react';

import './style.less';

// components
import Item from './Item';

export default class CommentList extends React.Component{
    render() {
        const data = this.props.data;
        return (
            <div className="comment-list">
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item} />
                    })
                }
            </div>
        );
    }
}
