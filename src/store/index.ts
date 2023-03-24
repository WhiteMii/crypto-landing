import { configureStore } from "@reduxjs/toolkit";
import cryptoSlice from "./crypto/crypto.slice";

const store = configureStore({
  reducer: {
    crypto: cryptoSlice,
  },
});
export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
