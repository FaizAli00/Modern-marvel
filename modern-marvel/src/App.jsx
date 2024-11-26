import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Vision from "./Components/Vision/Vision"; // Import Vision component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Vision />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
