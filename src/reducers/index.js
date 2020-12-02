import { combineReducers } from 'redux';
// eslint-disable-next-line import/no-unresolved, import/no-extraneous-dependencies
import resultsReducer from './results_reducer';

const rootReducers = combineReducers({
  list: resultsReducer,
});

export default rootReducers;
