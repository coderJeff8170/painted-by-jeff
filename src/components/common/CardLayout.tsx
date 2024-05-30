import React, { ReactNode } from "react";
import { Row, Col } from "react-bootstrap";

interface CardLayoutProps { 
  children: ReactNode; 
}

export const CardLayout: React.FC<CardLayoutProps> = ({
  children
}) => {
  return (
    <Row className="justify-content-center">
      <Col
        xs={12}
        sm={10}
        className="d-flex flex-wrap align-items-center justify-content-center"
      >
        {children}
      </Col>
    </Row>
  );
};
