import React from "react";
import { createRoot } from "react-dom/client";
import AppContextProvider from "./context/AppContext";

import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
);
