import React from 'react';

// components
import SearchHeader from '../../components/SearchHeader';
import SearchList from './subPage/List';

export default class Search extends React.Component{
    render() {
        const category = this.props.match.params.category;
        const keyword = this.props.match.params.keyword;
        return (
            <div>
                <SearchHeader />
                <SearchList category={category} keword={keyword} />
            </div>
        );
    }
}
