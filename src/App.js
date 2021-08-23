import { CssBaseline, ThemeProvider } from "@material-ui/core";

import AdminLayout from "./components/Layout/AdminLayout";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import Routes from "./routes/Routes";
import theme from "./theme/index";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <CssBaseline />
          <Routes />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
