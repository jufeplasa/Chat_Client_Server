import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveAuth: (state, action) => {
      state.token = action.payload.token;
    },
    clearAuth: (state) => {
      state.token = null;
    },
  },
});

export const { saveAuth, clearAuth } = authSlice.actions;
export default authSlice.reducer;
