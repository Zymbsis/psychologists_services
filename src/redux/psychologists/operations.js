import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  endBefore,
  get,
  limitToFirst,
  limitToLast,
  orderByChild,
  query,
  ref,
  startAfter,
} from 'firebase/database';

import { db } from '../../services/firebaseApp';
const dbRef = ref(db, '/');

export const getPsychologistsFromAtoZ = createAsyncThunk(
  'psychologists/getPsychologistsFromAtoZ',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          dbRef,
          orderByChild('name'),
          startAfter(condition),
          limitToFirst(3),
        ),
      );
      if (snapshot.exists()) {
        const result = snapshot.val();
        const data = Object.keys(result).map((item) => {
          return { _id: item, ...result[item] };
        });
        const sortedData = data.toSorted((a, b) =>
          a.name.localeCompare(b.name),
        );
        const hasNextPage = sortedData.length % 3 === 0;
        return { sortedData, hasNextPage };
      } else {
        return { sortedData: [], hasNextPage: false };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
export const getPsychologistsFromZtoA = createAsyncThunk(
  'psychologists/getPsychologistsFromZtoA',
  async (condition, thunkAPI) => {
    try {
      const snapshot = await get(
        query(
          dbRef,
          orderByChild('name'),
          endBefore(condition ? condition : 'Y'),
          limitToLast(3),
        ),
      );
      if (snapshot.exists()) {
        const result = snapshot.val();
        const data = Object.keys(result).map((item) => {
          return { _id: item, ...result[item] };
        });
        const sortedData = data
          .toSorted((a, b) => a.name.localeCompare(b.name))
          .reverse();

        const hasNextPage = sortedData.length % 3 === 0;
        return { sortedData, hasNextPage };
      } else {
        return { sortedData: [], hasNextPage: false };
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);
