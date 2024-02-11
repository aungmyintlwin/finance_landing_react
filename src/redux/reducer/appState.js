import { createSlice } from "@reduxjs/toolkit";

const appState = createSlice({
  name: "app",
  initialState: {
    userToken: null,
    lastLocationRoute: null,
    previousRoute: null,
    appLoading: false,
    lang: 'en'
  },
  reducers: {
    setLastLocation: (state, action) => {
      state.lastLocationRoute = action.payload;
    },
    
    setpreviousRoute: (state, action) => {
      state.previousRoute = action.payload;
    },
    setAppLoading: (state, action) => {
      state.appLoading = action.payload;
    },
    setAppLang: (state, action) => {
      state.lang = action.payload;
    },
    setUserToken: (state, action) => {
      state.userToken = action.payload;
    }
  }
});

export const {
    setLastLocation,
    setpreviousRoute,
    setAppLoading,
    setAppLang,
    setUserToken
} = appState.actions;
export default appState.reducer;
