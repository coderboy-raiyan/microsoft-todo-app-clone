import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    error: "",
    loading: true,
  },

  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
    },
    setError: (state, action) => {
      state.error = action.payload.error;
    },
    setLoading: (state, action) => {
      state.loading = action.payload.loading;
    },
    logout: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, logout, setError, setLoading } = userSlice.actions;
export const selectUser = (state) => state.user;
export default userSlice.reducer;
