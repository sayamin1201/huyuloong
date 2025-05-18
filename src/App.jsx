import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Wave from "./wave/wave.jsx";
import './App.css'

function App() {
  const navigate = useNavigate();

  const navigateToDashboard = (token) => {
    navigate("/dashboard");
  };

  return (
    <div>
      <Routes>
        <Route path="/huyuloong/waitpage" element={<Wave />} />
        {/* default path */}
        <Route path="/huyuloong/" element={<Navigate to="/huyuloong/waitpage" />} />
      </Routes>
    </div>
  );
}

export default App;
