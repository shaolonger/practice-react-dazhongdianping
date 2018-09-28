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

function carsData(state = defaultState.carData, action) {
    console.log('action_car', action.data)
    switch (action.type) {
        case 'SET_CARDATA':
            return action.data;
        default:
            return state;
    }
}

export default combineReducers({
    userName,
    carsData
})
