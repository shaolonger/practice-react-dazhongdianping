import React from 'react';

import './style.less';

// components
import Item from './Item';

export default class HomeList extends React.Component{
    render() {
        return (
            <div>
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
