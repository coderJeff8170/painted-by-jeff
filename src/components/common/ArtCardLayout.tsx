import React from "react";
import { Row, Col} from "react-bootstrap";
import { ArtCard, ArtCardProps } from "./ArtCard";

export const ArtCardLayout: React.FC<{ cards: ArtCardProps[] }> = ({
  cards,
}) => {
  return (
    <Row  className="justify-content-center"style={{ border: "2px solid blue" }}>
      <Col
        xs={12} sm={10} 
        className="d-flex flex-wrap align-items-center justify-content-center"
        style={{ border: "2px solid red" }}
      >
        {cards.map((card: ArtCardProps, index) => {
          return <ArtCard title={card.title} description={card.description} thumbnail={card.thumbnail} link={card.link} key={index} />;
        })}
      </Col>
    </Row>
    // <Container fluid>
    //   <Row className="d-flex flex-wrap justify-content-center" style={{ border: "2px solid blue" }}>
    //     {cards.map((card, index) => (
    //       <Col md={3} className="mb-4 d-flex justify-content-center align-items-center" key={index} style={{ border: "2px solid red" }}> {/* mb-4 for spacing between rows */}
    //         <ArtCard title={card.title} description={card.description} thumbnail={card.thumbnail} link={card.link} />
    //       </Col>
    //     ))}
    //   </Row>
    // </Container>
  );
};
