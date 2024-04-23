import React from "react";
import { Row, Col } from "react-bootstrap";
import { ArtCard, ArtCardProps } from "./ArtCard";

export const ArtCardLayout: React.FC<{ cards: ArtCardProps[] }> = ({
  cards,
}) => {
  return (
    <Row className="justify-content-center">
      <Col
        xs={12}
        sm={10}
        className="d-flex flex-wrap align-items-center justify-content-center"
      >
        {cards.map((card: ArtCardProps, index) => {
          return (
            <ArtCard
              title={card.title}
              description={card.description}
              thumbnail={card.thumbnail}
              link={card.link}
              key={index}
            />
          );
        })}
      </Col>
    </Row>
  );
};
