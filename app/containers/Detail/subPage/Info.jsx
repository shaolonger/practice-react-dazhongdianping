import React from 'react';

// fetch
import get from '../../../fetch/get';

// components
import DetailInfo from '../../../components/DetailInfo';

export default class Info extends React.Component{
    constructor() {
        super();
        this.state = {
            info: false
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.info
                        ? <DetailInfo data={this.state.info} />
                        : ''
                }
            </div>
        );
    }
    componentDidMount() {
        this.getInfo();
    }
    getInfo() {
        const id = this.props.id;
        let url = `/api/detail/info/${id}`;
        get(url).then(res => res.json())
            .then(json => {
                if (json) {
                    this.setState({
                        info: json
                    })
                }
            })
    }
}
