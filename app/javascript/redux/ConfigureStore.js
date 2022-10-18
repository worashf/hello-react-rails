import { configureStore, combineReducers } from '@reduxjs/toolkit';
import greetingSlice from './greetings/greetings';
const rootReducer = combineReducers({
  greetings: greetingSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
