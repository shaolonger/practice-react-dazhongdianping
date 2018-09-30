import React from 'react';

// react-redux
import { connect } from 'react-redux';
import { setUserName, setCarData } from '../../store/actions';

// fetch测试
import get from '../../fetch/get';
import post from '../../fetch/post';

export class Home extends React.Component{
    componentDidMount() {
        let { setUserName, setCarData } = this.props;
        setUserName('通过redux设置的用户名');
        setCarData();
        // fetch测试
        // const url = 'http://newsapi.gugujiankong.com/Handler.ashx?action=getnews&type=top&count=10';
        // get('/api/get')
        //     .then(res => res.text())
        //     .then(text => console.log('res_get', text))
        //     .catch(err => console.log('err_get', err));
        // post('/api/post', {
        //     uid: '123',
        //     username: 'xiaoming'
        // })
        //     .then(res => res.json())
        //     .then(json => console.log('res_post', json))
        //     .catch(err => console.log('err_post', err));
    }
    render() {
        // 从props里解构store
        let { userName, carData } = this.props;
        return (
            <div>
                <h1>HOME页面</h1>
                <p>用户名:{userName}</p>
                {
                    carData.length ?
                        (
                            <ul>
                                {
                                    carData.map((item, index) => {
                                        return <li key={index}>序号{index}:{item.title}</li>
                                    })
                                }
                            </ul>
                        )
                        :
                        '没有获取车辆数据'
                }
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        userName: state.userName,
        carData: state.carData
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setUserName(...args) {
            dispatch(setUserName(...args))
        },
        setCarData(...args) {
            dispatch(setCarData(...args))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
