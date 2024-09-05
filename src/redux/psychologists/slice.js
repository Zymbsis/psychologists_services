import { createSlice } from '@reduxjs/toolkit';
import { getPsychologistsFirstRequest } from './operations';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: { psychologistsList: [], lastResult: '', hasNextPage: true },
  reducers: {
    getNextRequest(state, action) {
      state.lastResult = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPsychologistsFirstRequest.fulfilled, (state, action) => {
      if (state.lastResult) {
        state.psychologistsList.push(...action.payload.sortedData);
      } else {
        state.psychologistsList = action.payload.sortedData;
      }
      state.hasNextPage = action.payload.hasNextPage;
    });
  },
});
export const psychologistsReducer = psychologistsSlice.reducer;
export const { getNextRequest } = psychologistsSlice.actions;
