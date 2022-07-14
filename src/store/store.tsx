import { configureStore } from '@reduxjs/toolkit';
import commentsReducer from './comments/commentsReducer';
import languageReducer from './language/languageReducer';
import discountModalReducer from './discountModal/discountModalReducer';
import saleReducer from './sale/saleReducer';

const store = configureStore({
  reducer: {
    commentsReducer,
    languageReducer,
    discountModalReducer,
    saleReducer
  }
});

export default store;