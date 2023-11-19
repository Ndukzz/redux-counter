import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux"; //THE PROVIDER

import "./index.css";
import App from "./App";
import store from "./store/index.js"; // THE REDUX STORE

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
