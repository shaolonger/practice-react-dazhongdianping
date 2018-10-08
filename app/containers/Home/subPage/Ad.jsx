import React from 'react';

import HomeAd from '../../../components/HomeAd';

// fetch
import get from '../../../fetch/get';

export default class Ad extends React.Component{
    constructor() {
        super();
        this.state = {
            adData: []
        }
    }
    componentDidMount() {
        get('/api/homead')
            .then(res => res.json())
            .then(json => this.setState({adData: json}));
    }
    render() {
        return (
            <div>
                {
                    this.state.adData.length
                        ?
                        <HomeAd data={this.state.adData} />
                        :
                        <div>加载中</div>
                }
            </div>
        );
    }
}
