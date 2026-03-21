import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage3 from "./pages/Homepage3";
import "./App.scss";
import DentalWare from "./pages/Dentalware";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage3 />} />
        <Route path="/dentalware" element={<DentalWare />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
