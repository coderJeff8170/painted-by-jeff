import { Outlet } from "react-router-dom";
import { Navigation } from "../components/common/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/common/Footer/Footer";

export const Root: React.FC = () => {
  return (
    <Container fluid className="d-flex flex-column vh-100">
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row className="flex-grow-1">
        <Col>
          <Outlet />
        </Col>
      </Row>
      <Row>
        <Col>
          <Footer title="jeff"/>
        </Col>
      </Row>
    </Container>
  );
};
