import { FormEvent, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { EditIcon } from "../../assets/icons/EditIcon";

interface IFormData {
  title: string;
  medium: string;
  type: string;
  width: number | undefined;
  height: number | undefined;
  year: number | undefined;
  image: string;
  thumbnail: string;
  datetime?: string; // Optional since it will be added on form submission
  description?: string; // Optional for the same reason
}

interface ArtCreateUpdateModalProps {
  id: string;
}

export const ArtCreateUpdateModal = ({ id }: ArtCreateUpdateModalProps) => {
  const initialFormData: IFormData = {
    title: "",
    medium: "",
    type: "",
    width: undefined,//not ideal
    height: undefined,
    year: undefined,
    image: "",
    thumbnail: "",
  };
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    if (!id) {
      setFormData(initialFormData);
    }
  };
  const handleShow = () => setShow(true);
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const getExistingData = (id: string) => {
    //fetch data from API using id
    axios
      .get(`http://localhost:3000/art/${id}`)
      .then((response) => {
        const data = response.data;
        // Update the form data with the fetched data
        setFormData(data);
      })
      .catch((error) => {
        console.error(error);
        // TODO: Handle error
      });
    //return data
  };

  useEffect(() => {
    if (id) {
      getExistingData(id);
    }
  }, [id]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData = {
      ...formData,
      datetime: new Date().toISOString(),
      description: `${formData.title}, ${formData.width}x${formData.height}, ${formData.medium}, ${formData.year}`,
    };
    setFormData(updatedData);
    //if id exists, call the update endpoint
    //if id does not exist, call the create endpoint
    if (id) {
      axios
        .put(`http://localhost:3000/art/${id}`, updatedData)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
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
    }

    handleClose(); // Close the modal after submission
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="me-2"
        title={id ? "Edit" : "Add"}
        aria-label={id ? "Edit" : "Add"}
        aria-live="polite"
      >
        {id ? <EditIcon /> : "+ Add"}
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
                value={formData.title}
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
                value={formData.medium}
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
                value={formData.type}
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
                value={formData.year}
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
                value={formData.width}
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
                value={formData.height}
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
                placeholder="Enter image file name"
                value={formData.image}
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
                placeholder="Enter thumbnail file name"
                value={formData.thumbnail}
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
