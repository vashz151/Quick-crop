import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import s1 from "../images/s1.jpg";
import s2 from "../images/s2.jpg";
import s3 from "../images/s3.jpg";
function Services() {
  const cards = {
    card1: {
      title: "Crop Recommendation",
      src: s1,
      alt: "crop-recommend",
      text: "Recommendation about the type of crops to be cultivated which is best suited for the respective conditions.",
      url: "/crop-recommend",
    },
    card2: {
      title: "Crop Yield Prediction",
      src: s2,
      alt: "crop-yield-prediction",
      text: "Prediction about the yield of the crop to be cultivated which is best suited for the respective conditions.",
      link: "/crop-predict",
    },
    card3: {
      title: "Fertilizer Recommendation",
      src: s3,
      alt: "fertilizer-recommend",
      text: "Recommendation about the type of fertilizer to be used which is best suited for the respective conditions.",
      url: "/fertilizer-recommend",
    },
  };
  const navigate = useNavigate();
  return (
    <div style={{ width: "99%" }}>
      <h1 style={{ textAlign: "center", marginTop: "5px" }}>Our Services</h1>
      <Row xs={1} md={3} className="g-2" style={{ color: "black" }}>
        {Object.values(cards).map((card, idx) => (
          <Col key={idx}>
            <Card
              style={{ margin: "25px" }}
              bg="light"
              onClick={() => navigate(card.url)}
            >
              <Card.Img
                variant="top"
                src={card.src}
                alt={card.alt}
                style={{ height: "250px" }}
              />
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  {card.title}
                </Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Services;
