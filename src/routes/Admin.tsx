import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormEvent, useState } from "react";
import axios from "axios";

export const Admin: React.FC = () => {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [views, setViews] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    axios.post("http://localhost:3000/posts", {
      id: id,
      title: title,
      views: views,
    }).then((response) => {
      console.log(response.data);
    });

    event.preventDefault();
    event.stopPropagation();
    console.log(id, title, views);
  };
  return (
    <>
      {import.meta.env.MODE === "development" && (
        <Container fluid>
          <Row>
            <Col>
              <Header title="AdminPage/Upload form" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form onSubmit={handleSubmit}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>id</Form.Label>
                  <Form.Control type="number" placeholder="id number" value={id} onChange={e => setId(e.target.value)}/>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="text" placeholder="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Views</Form.Label>
                  <Form.Control type="number" placeholder="views" value={views} onChange={e => setViews(e.target.value)}/>
                </Form.Group>
                <Button type="submit">Submit form</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};
