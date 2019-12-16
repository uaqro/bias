import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router";
import * as serviceWorker from "./serviceWorker";
import MyProvider from "./context";
import GlobalStyles from "./styles/globalStyles";

const WithContext = () => (
  <MyProvider>
    <GlobalStyles />
    <Router />
  </MyProvider>
);
ReactDOM.render(<WithContext />, document.getElementById("root"));

serviceWorker.unregister();
