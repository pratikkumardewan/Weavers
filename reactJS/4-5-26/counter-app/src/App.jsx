import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CounterApp1 from "./pages/CounterApp1";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CounterApp1/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
