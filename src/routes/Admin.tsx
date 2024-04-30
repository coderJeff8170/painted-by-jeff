import { Header } from "../components/common/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormEvent, useState } from "react";
import axios from "axios";
import { PaginatedTable } from "../components/common/PaginatedTable";

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
    //TODO: if form is not valid, do not submit
    //TODO: if title already exists, do not submit
    //TODO: sort into paintings, drawings, photography, etc, based on medium
    const dateTime = new Date();
    axios
      .post("http://localhost:3000/art", {
        datetime: dateTime,
        description: `${title}, ${width}x${height}, ${medium}, ${year}`,
        height: parseInt(height),
        image: image,
        medium: medium,
        thumbnail: thumbnail,
        title: title,
        type: type,
        width: parseInt(width),
        year: parseInt(year),
      })
      .then((response) => {
        console.log(response.data);
        //TODO: snackbar notification
      })
      .catch(error => {
        console.error(error);
        //TODO: snackbar notification
      });

    event.preventDefault();
    event.stopPropagation();
    clearForm();
  };
  //TODO: move form to a modal with an add button to activate. 
  //TODO: clicking a row in the grid should display information in the form and display the thumbnail
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
              {/* TODO: do not allow submission of form unless all fields pass validation */}
            </Col>
            <Col md={6} lg={4}>

            </Col>
            </Form>
          </Row>
          <hr/>
          <PaginatedTable />
        </Container>
      )}
    </>
  );
};
