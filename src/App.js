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
        <Route exact path="/:id" element={<CanvasJS />} />
        <Route exact path="/" element={<Navigate to="/1" />} />
      </Routes>
    </Router>
  );
}

export default App;
