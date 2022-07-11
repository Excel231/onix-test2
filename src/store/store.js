import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsReducer';
import languageReducer from './language/languageReducer';

const store = configureStore({
  reducer: {
    commentsReducer,
    languageReducer
  }
});

export default store;
