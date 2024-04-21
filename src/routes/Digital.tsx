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
      {/* <Row className="d-flex flex-column flex-md-row vh-100">
        <Col md={6} className="d-flex align-items-center justify-content-center bg-dark text-white" style={{fontSize: '3rem', fontFamily: 'sans-serif'}}>
          <p>Section 1</p>
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center bg-white text-dark" style={{fontSize: '3rem', fontFamily: 'Times New Roman'}}>
          <p>Section 2</p>
        </Col>
      </Row> */}
    </Container>
    </>
    
  );
};
