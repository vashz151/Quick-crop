import "./App.css";
import React from "react";
import { Routes, Route, HashRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
function App() {
  const apikey=process.env.REACT_APP_NEWS_DATA
  return (
    <>
      <HashRouter>
      <NavBar/>
        <Routes>
          <Route path="/Quick-crop" element={<Home />}></Route>
          <Route path="/Quick-crop/About" element={<About />}></Route>
          <Route path="/Quick-crop/News" element={<News apikey={apikey}/>}></Route>
        </Routes>
        </HashRouter>
    </>
  );
}

export default App;
