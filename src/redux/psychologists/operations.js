import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  get,
  limitToFirst,
  orderByChild,
  query,
  ref,
  startAfter,
} from 'firebase/database';

import { db } from '../../services/firebaseApp';
const dbRef = ref(db, '/');

export const getPsychologistsFirstRequest = createAsyncThunk(
  'psychologists/getPsychologistsFirstRequest',
  async (
    { childKey = 'name', method = startAfter, condition = '' },
    thunkAPI,
  ) => {
    try {
      const snapshot = await get(
        query(
          dbRef,
          orderByChild(childKey),
          method(condition),
          limitToFirst(3),
        ),
      );
      if (snapshot.exists()) {
        const result = snapshot.val();
        const data = Object.keys(result).map((item) => {
          return { _id: item, ...result[item] };
        });
        const sortedData = data.toSorted((a, b) =>
          a[childKey].localeCompare(b[childKey]),
        );
        const hasNextPage = sortedData.length % 3 === 0;
        return { sortedData, hasNextPage };
      } else {
        return { sortedData: [], lastResult: '', hasNextPage: false };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
