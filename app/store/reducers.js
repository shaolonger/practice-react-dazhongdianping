import { combineReducers } from 'redux';

import defaultState from './state';

function userName(state = defaultState.userName, action) {
    switch (action.type) {
        case 'SET_USERNAME':
            return action.data;
        default:
            return state;
    }
}

function carData(state = defaultState.carData, action) {
    switch (action.type) {
        case 'SET_CARDATA':
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    userName,
    carData
})
