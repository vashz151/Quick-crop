import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function BootstrapCarousel() {
  return (
    <Carousel 
    style={{
      height:"350px", 
      width:"75%",
      margin: "auto"
    }} interval={null}>
      <Carousel.Item>
        <Carousel.Caption >
        <p className='text-justify' style={{fontSize: "1.5rem", marginBottom: "-45px", lineHeight: "180%"}}><strong>Problem Statement <br/></strong>Failure of farmers to decide on the best suited crop for his land using traditional and non-scientific methods is a serious issue for a country. 
    Both availability and accessibility of correct and up to date information hinders potential researchers from working on developing country case studies. 
    Sometimes farmers were failed to choose the right crops based on the soil conditions, sowing season, and geographical location. 
    This results in suicide, quitting the agriculture field, moving towards urban areas for livelihood. 
    So there is a need to overcome this issue of low crop yields due to lack of knowledge.</p> 
        </Carousel.Caption>
        <img
          className="d-block w-100"
          src="https://picjumbo.com/wp-content/uploads/beautiful-green-field-scenery-free-photo-2210x1473.jpg"
          alt="First slide"
          style={{height:"250px", opacity: "0"}}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2017/03/11/13/19/oilseed-rape-2135026__340.jpg"
          alt="Second slide"
          style={{height:"250px", opacity: "0"}}
        />

        <Carousel.Caption>
          <h3>CONTENT NOT DECIDED</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/08/24/23/33/field-3629120__340.jpg"
          alt="Third slide"
          style={{height:"250px", opacity: "0"}}
        />

        <Carousel.Caption>
          <h3>CONTENT NOT DECIDED</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default BootstrapCarousel;