import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home: React.FC = () => {
  // const isDev = process.env.NODE_ENV === "development";
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="Welcome to the new and improved PaintedByJeff!" />
            <Header title={import.meta.env.MODE} />
          </Col>
        </Row>
        <Row style={{ height: "500px" }}>
          <Col className="text-center" style={{ height: "100%" }}>
            <Image
              src="/CAprogress2.gif"
              thumbnail
              style={{ maxHeight: "100%", width: "auto" }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};
