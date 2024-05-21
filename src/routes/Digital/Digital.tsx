import Header from "../../components/common/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MatrixSnow from "../../components/feature/MatrixSnow/MatrixSnow";
import styles from "./Digital.module.css";

const Digital: React.FC = () => {
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
        </div>  
      </Container>
    </>
  );
};

export default Digital;
