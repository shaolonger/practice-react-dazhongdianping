import React from 'react';

// components
import Item from './Item';

export default class OrderListComponent extends React.Component{
    render() {
        const data = this.props.data;
        return (
            <div>
                {
                    data.map((item, index) => {
                        return <Item key={index} data={item} submitComment={this.props.submitComment} />
                    })
                }
            </div>
        );
    }
}
