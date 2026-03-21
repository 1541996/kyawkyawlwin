import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Homepage3 from "./pages/Homepage3";
import "./App.scss";
import DentalWare from "./pages/Dentalware";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage3 />} />
        <Route path="/dentalware" element={<DentalWare />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
