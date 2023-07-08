import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./features/authSlice";
import { createWrapper } from "next-redux-wrapper";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
  },
  devTools: true,
});

const makeStore = () => store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// export const wrapper = createWrapper<AppStore>(makeStore);
