import Header from "../../components/common/Header/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PaginatedTable } from "../../components/common/PaginatedTable";
import { ArtCreateUpdateModal } from "../../components/common/ArtCreateUpdateModal";
import { useState } from "react";
import { Alert } from "react-bootstrap";

const Admin: React.FC = () => {
  //TODO: clicking a row in the grid should display information in the form and display the thumbnail
  const [error, setError] = useState<string | null>(null);

  return (
    <>
      {import.meta.env.MODE === "development" && (
        <Container fluid>
          <Row>
            <Col>
              <Header title="AdminPage" />
              {error && (
                <Alert
                  variant="danger"
                  onClose={() => setError(null)}
                  dismissible
                >
                  {error}
                </Alert>
              )}
            </Col>
          </Row>
          <hr />
          {!error && (
            <>
              <Row className="mb-3">
                <Col>
                  <ArtCreateUpdateModal
                    id=""
                    error={error}
                    setError={setError}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <PaginatedTable error={error} setError={setError} />
                </Col>
              </Row>
            </>
          )}
        </Container>
      )}
    </>
  );
};

export default Admin;
