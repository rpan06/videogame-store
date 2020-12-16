import { combineReducers } from 'redux';
import resultsReducer from './results_reducer';

const rootReducers = combineReducers({
  redux: resultsReducer,
});

export default rootReducers;
