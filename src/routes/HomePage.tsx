import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Image from 'react-bootstrap/Image';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const HomePage: React.FC = () => {
  return (
    <>
    <Container fluid>
      <Row>
        <Col>
          <Header title="Welcome to the new and improved PaintedByJeff!" />
        </Col>
      </Row>
      <Row style={{height: "500px"}}>
        <Col className="text-center" style={{height: "100%"}}>
          {/* <img src="/CAprogress2.gif" style={{ maxHeight: "100%", width: "auto" }}/> */}
        <Image src="/CAprogress2.gif" thumbnail style={{ maxHeight: "100%", width: "auto" }}/>
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
