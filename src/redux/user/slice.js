import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: { isLoggedIn: false, userName: null } },
  reducers: {
    setUserStatus(state, action) {
      state.user.isLoggedIn = action.payload;
    },
    setUserName(state, action) {
      state.user.userName = action.payload;
    },
  },
});

export const { setUserStatus, setUserName } = userSlice.actions;
export const userReducer = userSlice.reducer;
