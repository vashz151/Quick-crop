import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css";
import img1 from "../images/c1.jpg";
import img2 from "../images/c2.jpg";
import img3 from "../images/c3.jpg";
import right from "../images/right.svg";
import left from "../images/left.svg";
import background from "../videos/background.mp4";
function BootstrapCarousel() {
  return (
    <Carousel
      style={{
        width: "100%",
        verticalAlign: "center",
      }}
      controls={true}
      nextIcon={<img src={right} alt="right" height={"10%"} />}
      prevIcon={<img src={left} alt="left" height={"10%"} />}
    >
      <Carousel.Item interval={2000}>
        <video
          autoPlay
          muted
          loop
          className="d-block w-100"
          style={{ width: "100%", height: "42.5rem", objectFit: "cover" }}
        >
          <source src={background} />
        </video>
        <Carousel.Caption className="cap">
          <h3>Problem Statement</h3>
          <p>
            Failure of farmers to decide on the best suited crop for his land
            using traditional and non-scientific methods is a serious issue for
            a country.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 adjust" src={img1} alt="Second slide" />
        <Carousel.Caption className="cap">
          <h3>Lack of Information</h3>
          <p>
            Both availability and accessibility of correct and up to date
            information hinders potential researchers from working on developing
            country case studies.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 adjust" src={img2} alt="Third slide" />
        <Carousel.Caption className="cap">
          <h3>Lack of education</h3>
          <p>
            Sometimes farmers were failed to choose the right crops based on the
            soil conditions, sowing season, and geographical location.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100 adjust" src={img3} alt="Fourth slide" />
        <Carousel.Caption className="cap">
          <h3>Untutored</h3>
          <p>
            This results in suicide, quitting the agriculture field, moving
            towards urban areas for livelihood. So there is a need to overcome
            this issue of low crop yields due to lack of knowledge.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;
