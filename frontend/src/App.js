import "./App.css";
import React from "react";
// import { Routes, Route, Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
