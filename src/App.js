import { CssBaseline, ThemeProvider } from "@material-ui/core";

import MainLayout from "./components/Layout/MainLayout";
import React from "react";
import theme from "./theme/index";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <CssBaseline />
          <MainLayout />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
