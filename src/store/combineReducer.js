import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import main from './main/reducers';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  main,
});

export default rootReducer;