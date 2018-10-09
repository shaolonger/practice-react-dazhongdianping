import React from 'react';

// components
import Header from '../../components/Header';
import Info from './subPage/Info';
import Comment from './subPage/Comment';

export default class extends React.Component{
    render() {
        const id = this.props.match.params.id;
        return (
            <div>
                <Header title="商户详情" />
                <Info id={id} />
                <Comment id={id} />
            </div>
        );
    }
}
