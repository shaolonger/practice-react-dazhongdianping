import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'; // thunk的作用在于使store.dispatch可以接受函数作为参数

import reducers from './reducers';

let store = createStore(
    reducers,
    applyMiddleware(thunk)
)

export default store
