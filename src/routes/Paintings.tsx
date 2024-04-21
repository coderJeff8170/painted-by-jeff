import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Paintings: React.FC = () => {

  
  const cards = [1, 2, 3, 4, 5, 6];
  const cards2 = [
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/Thumbs/Alethea16x12.jpg",
    }, 
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/Thumbs/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/Thumbs/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/Thumbs/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/Thumbs/Alethea16x12.jpg",
    },
  ];
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
          {cards2.map((card, index) => {
            return (
              <Card style={{ width: "15rem" }} key={index}>
                <Card.Img variant="top" src={card.thumbnail} />
                <Card.Body>
                  <Card.Text>
                    {card.description}
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
