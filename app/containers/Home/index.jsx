import React from 'react';

// react-redux
import { connect } from 'react-redux';
import { setUserName, setCarsData } from '../../store/actions';

export class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let { setUserName, setCarsData } = this.props;
        setUserName('通过redux设置的用户名');
        setCarsData();
    }
    render() {
        // console.log('props', this.props);
        // 从props里解构store
        let { userName, carData } = this.props;
        return (
            <div>
                <h1>HOME页面</h1>
                <p>用户名:{userName}</p>
                {
                    carData && carData.length ?
                        (
                            <ul>
                                {
                                    carData.map((item, index) => {
                                        <li key={index}>{item.name}</li>
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
        setCarsData(...args) {
            dispatch(setCarsData(...args))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
