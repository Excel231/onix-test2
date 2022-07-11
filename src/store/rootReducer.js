import { combineReducers } from 'redux';
import commentsReducer from './comments/commentsReducer';
import boxersReducer from './boxers/boxersReducer';

const rootReducer = combineReducers(
  {
    commentsReducer,
    boxersReducer
  }
);

export default rootReducer;
