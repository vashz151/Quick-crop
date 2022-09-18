import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css";
import img1 from "../images/c1.jpg";
import img2 from "../images/c2.jpg";
import img3 from "../images/c3.jpg";

function BootstrapCarousel() {
  return (
    <Carousel
      style={{
        width: "100%",
        verticalAlign: "center",
      }}
    >
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 adjust" src={img1} alt="First slide" />
        <Carousel.Caption className="cap">
          <p>
            Failure of farmers to decide on the best suited crop for his land
            using traditional and non-scientific methods is a serious issue for
            a country. Both availability and accessibility of correct and up to
            date information hinders potential researchers from working on
            developing country case studies.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100 adjust"
          src={img2}
          alt="Second slide"
          style={{ opacity: "1" }}
        />

        <Carousel.Caption className="cap">
          <p>
            Sometimes farmers were failed to choose the right crops based on the
            soil conditions, sowing season, and geographical location.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img className="d-block w-100 adjust" src={img3} alt="Third slide" />

        <Carousel.Caption className="cap">
          <h3>CONTENT NOT DECIDED</h3>
          <p>
            {" "}
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
