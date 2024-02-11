// lib
import React from 'react';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";

// custom
import "./localization/config";
import store from "./redux/store/index";

import AppRouter from "./router/index";

const theme = createTheme();// add light or dark theme custom setting (now only light)
function App() {

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter/>
      </ThemeProvider>
    </Provider>
  )
}

export default App;