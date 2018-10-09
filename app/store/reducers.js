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

function collect(state = defaultState.collect, action) {
    switch (action.type) {
        case 'ADD_COLLECT':
            state.unshift(action.data);
            return state;
        case 'DELETE_COLLECT':
            return state.filter(item => {
                if (item.id !== action.data.id) {
                    return item;
                }
            })
        default:
            return state;
    }
}

export default combineReducers({
    cityInfo,
    userInfo,
    collect
})
