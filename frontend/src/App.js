import "./css/App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import News from "./components/News";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import CropRecommend from "./components/CropRecommend";
import CropYield from "./components/CropYield";
function App() {
  // const apikey = "";
  const apikey = "pub_11366f387421e2f181d6a0b3458d824e857bf"; //mihir's apikey
  const apikey1 = "noqxKapuU84tzbRRDssdOwR_zzk12HrIaawj1sOAwLo";
  // const apikey1 = process.env.UNSPLASH_API_KEY;
  // const apikey=process.env.REACT_APP_NEWS_DATAA;
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route
            exact
            path="/crop-recommend"
            element={<CropRecommend apikey={apikey1} />}
          ></Route>
          <Route exact path="/crop-yield" element={<CropYield />}></Route>
          <Route exact path="/news" element={<News apikey={apikey} />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
