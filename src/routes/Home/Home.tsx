import Header from "../../components/common/Header/Header";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const headerSuperTitle = <h4>Welcome to the new and improved</h4>;
  const headerTitle = <span style={{fontFamily: "Brush Script MT, cursive", fontSize: "2.5em", color: "red"}}>PaintedByJeff.com</span>;
  const headerSubTitle = <h4>This is a subtitle</h4>;

  return (
    <>
    <Container fluid>
      {/* <Container fluid style={{ height: "100%", backgroundImage: "url(/FullSize/MyFaveMemoryPlaceholder.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", opacity: "0.33" }}> */}
        <Row>
          <Col>
            <Header
              // title="Welcome to the new and improved PaintedByJeff!"
              supertitle={headerSuperTitle}
              title={headerTitle}
              subtitle={headerSubTitle}
            />
          </Col>
        </Row>
        <Row style={{ height: "500px" }}>
          <Col className="text-center" style={{ height: "100%" }}>
            <Link to="/Analog">
              <Image
                alt="gif of a painting in progress"
                src="CAprogress2.gif"
                thumbnail
                roundedCircle
                style={{ maxHeight: "100%", width: "auto" }}
              />
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
