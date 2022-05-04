import { configureStore } from '@reduxjs/toolkit';

import allReducers from './reducers';

const store = configureStore({
  reducer: allReducers,
  devTools: process.env.NODE_ENV !== 'production',
});
export default store;
