import { applyMiddleware, createStore, compose } from 'redux';

// thunk的作用在于使store.dispatch可以接受函数作为参数
import thunk from 'redux-thunk';

import reducers from './reducers';

let store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store
