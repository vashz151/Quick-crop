import "./App.css";
import React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/Quick-crop" element={<Home />}></Route>
          <Route path="/Quick-crop/About" element={<About />}></Route>
          <Route path="/Quick-crop/News" element={<News />}></Route>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
