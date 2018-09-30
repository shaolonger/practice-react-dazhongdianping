import React from 'react';

export default class Search extends React.Component{
    componentDidMount() {
        console.log('search', this.props.match.params);
    }
    render() {
        return (
            <div>Search页面</div>
        );
    }
}
