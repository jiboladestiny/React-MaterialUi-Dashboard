import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { DarkModeContextProvider } from "./context/darkModeContext";
import ToggleProvider from "./context/ToggleProvider";

ReactDOM.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ToggleProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ToggleProvider>
    </DarkModeContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
