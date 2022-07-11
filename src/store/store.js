import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsReducer';

const store = configureStore({
  reducer: {
    commentsReducer
  }
});

export default store;
