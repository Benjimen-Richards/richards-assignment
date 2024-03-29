import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Mainrouter from "./Mainrouter";
import { Provider } from "react-redux";
import Store from "./Components/redux/Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Mainrouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
