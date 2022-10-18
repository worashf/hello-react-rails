import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetingThunk = createAsyncThunk(
  'greetings/getGreetings',
  async () => {
    try {
      const greetings = await axios.get('/api/v1/greeting');
      console.log(greetings);
      return greetings;
    } catch (error) {
      throw new Error(error);
    }
  }
);

const greetingSlice = createSlice({
  name: 'greetings',
  initialState: 'Hello',
  reducers: {},
  extraReducers: {
    [getGreetingThunk.fulfilled]: (state, { payload }) => {
      return payload;
    },
  },
});

export default greetingSlice.reducer;
