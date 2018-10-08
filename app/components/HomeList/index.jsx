import React from 'react';

import './style.less';

// components
import Item from './Item';

export default class HomeList extends React.Component{
    render() {
        return (
            <div className="list-container">
                {
                    this.props.data.map((item, index) => {
                        return (
                            <Item key={index} data={item} />
                        )
                    })
                }
            </div>
        );
    }
}
