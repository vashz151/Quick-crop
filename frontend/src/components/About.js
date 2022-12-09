import React from "react";
import Services from "./Services";
function About() {
  return (
    <div>
      <div style={{ margin: "0 70px" }}>
        <h1 style={{ textAlign: "center" }}>Our Aim</h1>
        <p>
          The aim of proposed system is to help farmers to cultivate crop for
          better yield, hence we propose a system- which takes into
          consideration all the appropriate parameters, including temperature,
          rainfall, location and soil condition, to predict crop suitability and
          provide an appropriate yield. Also, the system will provide the most
          suitable fertilizer which will give the user an easy and reliable
          insight to decide and plan the crops accordingly.
        </p>
      </div>
      <Services />
    </div>
  );
}

export default About;
