import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { store } from "./app/store";
// import { Provider } from "react-redux";
import { Loader } from "@react-three/drei";

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <App />
    <Loader />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
