import React from 'react';

// redux
import { connect } from 'react-redux';

// components
import Header from '../../components/Header';
import UserInfo from '../../components/UserInfo';

class User extends React.Component{
    render() {
        return (
            <div>
                <Header title="用户主页" />
                <UserInfo username={this.props.userInfo.username} city={this.props.cityName} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo,
        cityName: state.cityInfo
    }
}

export default connect(mapStateToProps)(User)
