import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

interface IFormData {
  title: string;
  medium: string;
  type: string;
  width: number;
  height: number;
  year: number;
  image: string;
  thumbnail: string;
  datetime?: string; // Optional since it will be added on form submission
  description?: string; // Optional for the same reason
}

export const ArtSubmissionModal = () => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState<IFormData>({
    title: "",
    medium: "",
    type: "",
    width: 0,
    height: 0,
    year: 0,
    image: "",
    thumbnail: "",
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData = {
      ...formData,
      datetime: new Date().toISOString(),
      description: `${formData.title}, ${formData.width}x${formData.height}, ${formData.medium}, ${formData.year}`,
    };
    setFormData(updatedData);
    axios
      .post("http://localhost:3000/art", updatedData)
      .then((response) => {
        console.log(response);
        //TODO: snackbar notification
      })
      .catch((error) => {
        console.error(error);
        //TODO: snackbar notification
      });
    handleClose(); // Close the modal after submission
  };

  return (
    <>
      <Button variant="primary" className="mb-3" onClick={handleShow}>
        + Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>New Artwork</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter title"
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formMedium">
              <Form.Label>Medium</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter medium"
                onChange={(e) =>
                  setFormData({ ...formData, medium: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formType">
              <Form.Label>Type</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter type"
                onChange={(e) =>
                  setFormData({ ...formData, type: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                onChange={(e) =>
                  setFormData({ ...formData, year: parseInt(e.target.value) })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formWidth">
              <Form.Label>Width</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter width"
                onChange={(e) =>
                  setFormData({ ...formData, width: parseInt(e.target.value) })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formHeight">
              <Form.Label>Height</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter height"
                onChange={(e) =>
                  setFormData({ ...formData, height: parseInt(e.target.value) })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formImage">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                required
              />
            </Form.Group>
            <Form.Group controlId="formThumbnail">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) =>
                  setFormData({ ...formData, thumbnail: e.target.value })
                }
                required
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
