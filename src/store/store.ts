import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./features/formSlice";
import uploadReducer from "./features/uploadSlice";

export const store = configureStore({
  reducer: {
    form: formReducer,
    upload: uploadReducer,
  },
  devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
