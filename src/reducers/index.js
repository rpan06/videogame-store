import { combineReducers } from 'redux';
import resultsReducer from './results_reducer';

const rootReducers = combineReducers({
  list: resultsReducer,
});

export default rootReducers;
