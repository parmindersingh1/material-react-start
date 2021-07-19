import { CssBaseline, ThemeProvider } from "@material-ui/core";

import MainLayout from "./components/Layout/MainLayout";
import React from "react";
import theme from './theme/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <MainLayout />
      </div>
    </ThemeProvider>
  );
}

export default App;
