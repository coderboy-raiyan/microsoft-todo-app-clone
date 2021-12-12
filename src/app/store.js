import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Pages/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
