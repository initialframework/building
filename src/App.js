import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import CanvasJS from "./CanvasJS";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/building/:id" element={<CanvasJS />} />
        <Route exact path="/" element={<Navigate to="/building/1" />} />
      </Routes>
    </Router>
  );
}

export default App;
