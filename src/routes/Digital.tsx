import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Digital: React.FC = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="This is the digital page!" />
          </Col>
        </Row>
      </Container>
    </>
  );
};
