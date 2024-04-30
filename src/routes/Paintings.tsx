import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { ArtCardLayout } from "../components/common/ArtCardLayout";
import { useContext } from "react";
import { StaticDataContext } from "../context/StaticDataContext";

//import art from "../../db.json";

export const Paintings: React.FC = () => {
  //TODO: add filter functionality and export to a custom hook...
  const data = useContext(StaticDataContext);
  console.log(data.art);

  // const cards2 = [
  //   {
  //     description: "Alethea, 16x12, Acrylic on Canvas, 2021",
  //     thumbnail: "TAlethea.jpg",
  //     title: "Alethea",
  //     link: "Alethea16x12.jpg",
  //     medium: "Acrylic",
  //     type: "portrait",
  //   }, 
  //   {
  //     description: "Alethea, 16x12, Acrylic on Canvas, 2021",
  //     thumbnail: "TAlethea.jpg",
  //     title: "Alethea",
  //     link: "Alethea16x12.jpg",
  //     medium: "Acrylic",
  //     type: "portrait",
  //   }, 
  //   {
  //     description: "Alethea, 16x12, Acrylic on Canvas, 2021",
  //     thumbnail: "TAlethea.jpg",
  //     title: "Alethea",
  //     link: "Alethea16x12.jpg",
  //     medium: "Acrylic",
  //     type: "portrait",
  //   }, 
  //   {
  //     description: "Alethea, 16x12, Acrylic on Canvas, 2021",
  //     thumbnail: "TAlethea.jpg",
  //     title: "Alethea",
  //     link: "Alethea16x12.jpg",
  //     medium: "Acrylic",
  //     type: "portrait",
  //   }, 
  //   {
  //     description: "Alethea, 16x12, Acrylic on Canvas, 2021",
  //     thumbnail: "TAlethea.jpg",
  //     title: "Alethea",
  //     link: "Alethea16x12.jpg",
  //     medium: "Acrylic",
  //     type: "portrait",
  //   }, 
  // ];

  //const cards3 = art;
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="This is the paintings page!" />
          </Col>
        </Row>
        <ArtCardLayout cards={data.art} />
        {/* <Row >
        <Col  className="d-flex flex-wrap align-items-center justify-content-center" style={{border: "2px solid red"}}>
          {cards2.map((card) => {
            return (
              // <Card style={{ width: "15rem" }} key={index}>
              //   <Card.Img variant="top" src={card.thumbnail} />
              //   <Card.Body>
              //     <Card.Text>
              //       {card.description}
              //     </Card.Text>
              //   </Card.Body>
              // </Card>
              <ArtCard cardInfo={card} />
            );
          })}
          </Col>
        </Row> */}
      </Container>
    </>
  );
};
