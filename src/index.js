import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./assets/css/global.css";
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from './contexts/StateContextProvider';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <StateContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </StateContextProvider>
  </React.StrictMode>
);
