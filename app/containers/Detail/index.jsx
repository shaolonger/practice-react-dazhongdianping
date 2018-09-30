import React from 'react';

export default class extends React.Component{
    componentDidMount() {
        console.log('id', this.props.match.params.id);
    }
    render() {
        return (
            <div>detail页面</div>
        );
    }
}
