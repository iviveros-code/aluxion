import {configureStore} from '@reduxjs/toolkit';
import imagesReducer from './imagesSlice';

const store = configureStore({
  reducer: {
    aluxionChallenge: imagesReducer,
  },
});

export default store;
