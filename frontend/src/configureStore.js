import { createStore, applyMiddleware, combineReducers } from 'redux'

import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

const middlewares = [thunk];

export const createReducers = combineReducers({});

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
}

const appStore = createStore(
    createReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(...middlewares)
);

export default appStore;
