import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PaginatedTable } from "../components/common/PaginatedTable";
import { ArtSubmissionModal } from "../components/common/ArtSubmissionModal";

export const Admin: React.FC = () => {
  //TODO: clicking a row in the grid should display information in the form and display the thumbnail
  return (
    <>
      {import.meta.env.MODE === "development" && (
        <Container fluid>
          <Row>
            <Col>
              <Header title="AdminPage" />
            </Col>
          </Row>
          <hr />
          <ArtSubmissionModal />
          <PaginatedTable />
        </Container>
      )}
    </>
  );
};
