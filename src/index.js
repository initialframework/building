import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Loader } from "@react-three/drei";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.render(
  <React.StrictMode>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
    <Loader />
  </React.StrictMode>,
  document.getElementById("root")
);
