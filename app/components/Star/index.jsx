import React from 'react';

import './style.less';

export default class Star extends React.Component{
    constructor() {
        super();
        this.state = {
            star: 0
        };
    }
    componentDidMount() {
        this.setState({
            star: this.props.star
        });
    }
    render() {
        let star = this.state.star || 0;
        if (star > 5) {
            star = star % 5;
        }
        return (
            <div className="star-container">
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        const lightClass = star >= item ? ' light' : '';
                        return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle.bind(this, item)}></i>;
                    })
                }
            </div>
        );
    }
    clickHandle(star) {
        const starClickCallback = this.props.starClickCallback;
        if (starClickCallback) {
            this.setState({
                star: star
            })
            starClickCallback(star);
        }
    }
}
