import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsReducer';
import boxersReducer from './boxers/boxersReducer';

const store = configureStore({
  reducer: {
    commentsReducer,
    boxersReducer
  }
});

export default store;
