import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Loader } from "@react-three/drei";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Loader />
  </React.StrictMode>,
  document.getElementById("root")
);
