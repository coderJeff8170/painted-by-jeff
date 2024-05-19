import Header from "../../components/common/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Digital: React.FC = () => {
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

export default Digital;
