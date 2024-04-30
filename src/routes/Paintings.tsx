import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ArtCardLayout } from "../components/common/ArtCardLayout";
import { useContext } from "react";
import { StaticDataContext } from "../context/StaticDataContext";

export const Paintings: React.FC = () => {
  //TODO: add filter functionality and export to a custom hook...
  const data = useContext(StaticDataContext);

  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="This is the paintings page!" />
          </Col>
        </Row>
        <ArtCardLayout cards={data.art} />
      </Container>
    </>
  );
};
