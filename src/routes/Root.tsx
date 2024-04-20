import { Outlet } from "react-router-dom";
import { Navigation } from "../components/common/Navigation";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../components/common/Footer";

export const Root: React.FC = () => {
  return (
    <Container fluid >
      <Row>
        <Col>
          <Navigation/>
        </Col>
      </Row>
      <Row>
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
