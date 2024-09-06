import { createSlice } from '@reduxjs/toolkit';
import {
  getPsychologistsFromAtoZ,
  getPsychologistsFromZtoA,
} from './operations';

const psychologistsSlice = createSlice({
  name: 'psychologists',
  initialState: {
    psychologistsList: [],
    favoritesList: [],
    sortQuery: '',
    hasNextPage: true,
    sortType: 'A to Z',
    isLoading: false,
  },
  reducers: {
    getNextRequest(state, action) {
      state.sortQuery = action.payload;
    },
    getSortType(state, action) {
      state.sortType = action.payload;
      state.sortQuery = '';
    },
    addToFavorite(state, action) {
      state.favoritesList.push(action.payload);
    },
    deleteFromFavorite(state, action) {
      state.favoritesList = state.favoritesList.filter(
        (item) => item._id !== action.payload,
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPsychologistsFromAtoZ.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPsychologistsFromAtoZ.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologistsList.push(...action.payload.sortedData);
        } else {
          state.psychologistsList = action.payload.sortedData;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsFromAtoZ.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getPsychologistsFromZtoA.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPsychologistsFromZtoA.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.sortQuery) {
          state.psychologistsList.push(...action.payload.sortedData);
        } else {
          state.psychologistsList = action.payload.sortedData;
        }
        state.hasNextPage = action.payload.hasNextPage;
      })
      .addCase(getPsychologistsFromZtoA.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export const psychologistsReducer = psychologistsSlice.reducer;
export const {
  getNextRequest,
  getSortType,
  addToFavorite,
  deleteFromFavorite,
} = psychologistsSlice.actions;
