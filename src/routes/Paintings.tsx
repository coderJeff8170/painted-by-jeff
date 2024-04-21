import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Paintings: React.FC = () => {
  const cards = [1, 2, 3, 4, 5, 6];
  const cards2 = [{
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
    thumbnail: "https://via.placeholder.com/150",
    title: "Card Title",
    pic: "https://via.placeholder.com/150",
  }, {}, {}, {}, {}, {}];
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="This is the paintings page!" />
          </Col>
        </Row>
        <Row >
        <Col  className="d-flex flex-wrap align-items-center justify-content-center" style={{border: "2px solid red"}}>
          {cards.map((card, index) => {
            return (
              <Card style={{ width: "15rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            );
          })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
