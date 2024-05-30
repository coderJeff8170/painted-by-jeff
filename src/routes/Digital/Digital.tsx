import Header from "../../components/common/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MatrixSnow from "../../components/feature/MatrixSnow/MatrixSnow";
import styles from "./Digital.module.css";
import { useContext } from "react";
import { DigitalDataContext } from "../../context/StaticDataContext";
import { DigitalCard } from "../../components/common/DigitalCard";
import { CardLayout } from "../../components/common/CardLayout";

const Digital: React.FC = () => {

const data = useContext(DigitalDataContext);
console.log(data);

  return (
    <>
    <Container className={styles.digitalWrap} fluid>
        <div className={styles.digitalBg}><MatrixSnow /></div>
        <div className={styles.digitalContent}>
        <Row >
          <Col>
            <Header title="This is the digital page!" />
          </Col>
        </Row>
        <CardLayout>
          {data.map((card, index) => { 
              return (
                <DigitalCard 
                  key={index} 
                  description={card.description} 
                  link={card.link} 
                  thumbnail={`${import.meta.env.VITE_THUMBNAIL_PATH}${card.thumbnail}`}
                  title={card.title} 
                />
              )
          })}
        </CardLayout>
        </div>  
      </Container>
    </>
  );
};

export default Digital;
