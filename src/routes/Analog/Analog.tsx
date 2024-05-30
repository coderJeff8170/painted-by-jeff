import Header from "../../components/common/Header/Header";
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CardLayout } from "../../components/common/CardLayout";
import { useContext, useState } from "react";
import { AnalogDataContext } from "../../context/StaticDataContext";
import { Dropdown, Container, DropdownButton } from "react-bootstrap";
import { ArtCard, ArtCardProps } from "../../components/common/ArtCard";

const Analog: React.FC = () => {
  //TODO: export to a custom hook...
  const [artType, setArtType] = useState("all");
  const data = useContext(AnalogDataContext);
  const alphabetizedData = data.sort((a, b) =>
    a.title < b.title ? -1 : 1
  );
  const artwork =
    artType === "all"
      ? alphabetizedData
      : alphabetizedData.filter((art) => art.type === artType);
  //TODO: investigate the potential of adding more filters (such as for title) on 'artwork' array
  //TODO: also, because there will be many, perhaps pagination will be necessary
  const onArtChange = (artType: string) => {
    setArtType(artType);
  };

  const renderDropdownItems = () => {
    const artType = ["all", "painting", "drawing", "photograph", "mural"];
    const items = [];
    for (let i = 0; i <= artType.length; i++) {
      items.push(
        <Dropdown.Item key={i} onClick={() => onArtChange(artType[i])}>
          {artType[i]}
        </Dropdown.Item>
      );
    }
    return items;
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Header title="Analog" />
          </Col>
        </Row>
        <Row>
          <Col className="d-flex align-items-center justify-content-center">
            <span className="m-1">Filter by:</span>
            <DropdownButton
              id="dropdown-basic-button"
              className="m-1"
              title={artType}
            >
              {renderDropdownItems()}
            </DropdownButton>
          </Col>
        </Row>
        <CardLayout>
        {artwork.map((card: ArtCardProps, index) => {
          return (
            <ArtCard
              key={index} 
              description={card.description}
              title={card.title}
              thumbnail={`${import.meta.env.VITE_THUMBNAIL_PATH}${card.thumbnail}`}
              image={`${import.meta.env.VITE_FULL_SIZE_IMAGE_PATH}${card.image}`}
               />
          );
        })}
        </CardLayout>
      </Container>
    </>
  );
};

export default Analog;
