import { combineReducers } from 'redux';

import defaultState from './state';

function cityInfo(state = defaultState.cityInfo, action) {
    switch (action.type) {
        case 'SET_CITY':
            return action.data;
        default:
            return state;
    }
}

function userInfo(state = defaultState.userInfo, action) {
    switch (action.type) {
        case 'SET_USERINFO':
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    cityInfo,
    userInfo
})
