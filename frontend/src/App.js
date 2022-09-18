import "./css/App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
function App() {
  const apikey = "pub_11366f387421e2f181d6a0b3458d824e857bff";//mihir's apikey
  // const apikey=process.env.REACT_APP_NEWS_DATA;
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/news"
            element={<News apikey={apikey} />}
          ></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
