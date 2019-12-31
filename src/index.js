import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import App from "./app/layout/App.js";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

// Browser Router
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter basename="/SCL010-Burger-Queen-V02/">
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
