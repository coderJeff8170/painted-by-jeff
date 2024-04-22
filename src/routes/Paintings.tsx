import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ArtCard } from "../components/common/ArtCard";

export const Paintings: React.FC = () => {
  //TODO: add filter functionality and export to a custom hook...

  const cards2 = [
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/FullSize/Alethea16x12.jpg",
    }, 
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/FullSize/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/FullSize/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/FullSize/Alethea16x12.jpg",
    },
    {
      description: "Alethea, 16x12, Acrylic on Canvas, 2021",
      thumbnail: "/src/assets/Thumbs/TAlethea.jpg",
      title: "Alethea",
      link: "/src/assets/FullSize/Alethea16x12.jpg",
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
              // <Card style={{ width: "15rem" }} key={index}>
              //   <Card.Img variant="top" src={card.thumbnail} />
              //   <Card.Body>
              //     <Card.Text>
              //       {card.description}
              //     </Card.Text>
              //   </Card.Body>
              // </Card>
              <ArtCard cardInfo={card} index={index} />
            );
          })}
          </Col>
        </Row>
      </Container>
    </>
  );
};
