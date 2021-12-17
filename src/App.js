import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CanvasJS from "./CanvasJS";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/:id" element={<CanvasJS />} />
      </Routes>
    </Router>
  );
}

export default App;
