import React from 'react';

import './style.less';

export default class HomeAd extends React.Component{
    render() {
        return (
            <div id="home-adv">
                <h2>超值特惠</h2>
                <div className="container clear-fix">
                    {this.props.data.map((item, index) => {
                        return (
                            <div key={index} className="item float-left">
                                <a href={item.link} target="_blank">
                                    <img src={item.img} alt={item.title} />
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
