import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import resultsReducer from './results_reducer';
import userReducer from './user_reducer';

const rootReducers = combineReducers({
  list: resultsReducer,
  userReducer,
});

export default rootReducers;
