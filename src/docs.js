import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
const root = ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter forceRefresh={false}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
    document.getElementById("app")
);