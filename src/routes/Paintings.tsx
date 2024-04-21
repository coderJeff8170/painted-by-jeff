import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Paintings: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="This is the paintings page!" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
