import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsReducer';
import languageReducer from './language/languageReducer';
import discountModalReducer from './discountModal/discountModalReducer';

const store = configureStore({
  reducer: {
    commentsReducer,
    languageReducer,
    discountModalReducer
  }
});

export default store;
