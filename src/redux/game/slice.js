import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  bank: {
    credits: [],
  },
};

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
});

export default gameSlice.reducer;
