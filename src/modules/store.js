import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import app from './app/reducers';

const rootReducer = combineReducers({
    app,
});

// eslint-disable-next-line no-undef
const composeEnhancers = __DEV__
    ? composeWithDevTools(applyMiddleware(thunk))
    : applyMiddleware(thunk);

const store = createStore(rootReducer, composeEnhancers);

export default store;
