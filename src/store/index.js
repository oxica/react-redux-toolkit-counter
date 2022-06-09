import { configureStore } from '@reduxjs/toolkit';
import counterSlise from './slices/counterSlices';

const store = configureStore({
  reducer: counterSlise.reducer,
});

export default store;
