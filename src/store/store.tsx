import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import commentsReducer from './comments/commentsReducer';
import languageReducer from './language/languageReducer';
import discountModalReducer from './discountModal/discountModalReducer';
import saleReducer from './sale/saleReducer';

const rootReducer = combineReducers({
  commentsReducer,
  languageReducer,
  discountModalReducer,
  saleReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
