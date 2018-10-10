import React from 'react';

// redux
import { connect } from 'react-redux';

// history
import { createHashHistory } from 'history';

// components
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';
import OrderList from './subPage/OrderList';

class User extends React.Component{
    render() {
        return (
            <div>
                <Header title="用户主页" />
                <UserInfo username={this.props.userInfo.username} city={this.props.cityName} />
                <OrderList username={this.props.userInfo.username} />
            </div>
        );
    }
    componentDidMount() {
        if (!this.props.userInfo.username) {
            createHashHistory().push('/login');
        }
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        cityName: state.cityInfo
    }
}

export default connect(mapStateToProps)(User)
