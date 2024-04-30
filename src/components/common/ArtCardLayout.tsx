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
              width={card.width}
              height={card.height}
              medium={card.medium}
              year={card.year}
              type={card.type}
              thumbnail={`${import.meta.env.VITE_THUMBNAIL_PATH}${card.thumbnail}`}
              image={`${import.meta.env.VITE_FULL_SIZE_IMAGE_PATH}${card.image}`}
              key={index} id={""} datetime={""}            />
          );
        })}
      </Col>
    </Row>
  );
};
