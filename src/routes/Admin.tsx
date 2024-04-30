import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormEvent, useState } from "react";
import axios from "axios";

export const Admin: React.FC = () => {
  const [height, setHeight] = useState("");
  const [image, setImage] = useState("");
  const [medium, setMedium] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [width, setWidth] = useState("");
  const [year, setYear] = useState("");

  const clearForm = () => {
    setHeight("");
    setImage("");
    setMedium("");
    setThumbnail("");
    setTitle("");
    setType("");
    setWidth("");
    setYear("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    const dateTime = new Date();
    axios
      .post("http://localhost:3000/art", {
        datetime: dateTime,
        description: `${title}, ${width}x${height}, ${medium}, ${year}`,
        height: height,
        image: image,
        medium: medium,
        thumbnail: thumbnail,
        title: title,
        type: type,
        width: width,
        year: year,
      })
      .then((response) => {
        console.log(response.data);
      });

    event.preventDefault();
    event.stopPropagation();
    clearForm();
  };
  // perhaps add a grid that displays the current artwork in the database, and allows for editing and deletion
  return (
    <>
      {import.meta.env.MODE === "development" && (
        <Container fluid>
          <Row>
            <Col>
              <Header title="AdminPage/Upload form" />
            </Col>
          </Row>
          <Row className="justify-content-center">
          <Form onSubmit={handleSubmit}>
            <Col md={6} lg={4}>
              
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Medium</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="medium"
                    value={medium}
                    onChange={(e) => setMedium(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Height</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>Width</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="width"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>ThumbnailFileName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="thumbnail file name"
                    value={thumbnail}
                    onChange={(e) => setThumbnail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label>ImageFileName</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="image file name"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput3"
                >
                  <Form.Label>Year</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </Form.Group>
                <Button type="submit">Submit form</Button>
              
            </Col>
            <Col md={6} lg={4}>

            </Col>
            </Form>
          </Row>
        </Container>
      )}
    </>
  );
};
