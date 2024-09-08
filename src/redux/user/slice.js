import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: { userName: null, userEmail: null },
  },
  reducers: {
    setUserStatus(state, action) {
      state.user.userEmail = action.payload;
    },
    setUserName(state, action) {
      state.user.userName = action.payload;
    },
  },
});

export const { setUserStatus, setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
