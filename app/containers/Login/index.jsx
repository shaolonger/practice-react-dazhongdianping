import React from 'react';

// components
import Header from '../../components/Header';
import LoginComponent from '../../components/LoginComponent';

// history
import { createHashHistory } from 'history';

// redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUserName } from '../../store/actions';

class Login extends React.Component{
    constructor() {
        super();
        this.state = {
            hasLogin: false
        }
    }
    render() {
        return (
            <div>
                <Header title="登录" />
                {
                    // 等待验证之后，再显示登录信息
                    this.state.hasLogin
                        ? <div>{/* 等待中 */}</div>
                        : <LoginComponent loginHandle={this.loginHandle.bind(this)} />
                }
            </div>
        );
    }
    componentDidMount() {
        // 若已登录，直接跳转到User页面
        if (this.props.userInfo.username) {
            this.gotoUserPage();
        }
    }
    gotoUserPage() {
        createHashHistory().push('/user');
    }
    loginHandle(username) {
        let userInfo = this.props.userInfo;
        let setUserName = this.props.setUserName;
        userInfo.username = username;
        setUserName(userInfo); // 更新redux中的userInfo的state
        this.gotoUserPage();
    }
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    }
}

const matDispatchToProps = (dispatch) => {
    return {
        setUserName: bindActionCreators(setUserName, dispatch)
    }
}

export default connect(mapStateToProps, matDispatchToProps)(Login)
