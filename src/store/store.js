import {createStore, compose, applyMiddleware} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import rootReducer from './combineReducer';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];

const middleware = [
  thunk,
  routerMiddleware(history),
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers,
);

export const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers,
);