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
  width: number;
  height: number;
  year: number
  image: string;
  thumbnail: string;
  datetime?: string; // Optional since it will be added on form submission
  description?: string; // Optional for the same reason
}

interface ArtCreateUpdateModalProps {
  id: string;
  error: string | null;
  setError: (error: string | null) => void;
}

export const ArtCreateUpdateModal = ({ id, error, setError }: ArtCreateUpdateModalProps) => {
  const serverDownError = "Failed to communicate with the server. Try running the app and server locally and refresh the page.";
  const initialFormData: IFormData = {
    title: "",
    medium: "",
    type: "",
    width: 0,
    height: 0,
    year: 0,
    image: "",
    thumbnail: "",
  };
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    if (!id) {
      setFormData(initialFormData);
    }
  };
  const handleShow = () => setShow(true);

  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/art/${id}`);
        if (isMounted) setFormData(response.data);
      } catch (error) {
        console.error(error);
        if (isMounted) setError(serverDownError);
      }
    };
    
    if (id) fetchData();
    return () => {
      isMounted = false;
    };
  }, [id, setError, error]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const updatedData = {
      ...formData,
      datetime: new Date().toISOString(),
      description: `${formData.title}, ${formData.width}x${formData.height}, ${formData.medium}, ${formData.year}`,
    };
  
    try {
      const response = id
        ? await axios.put(`http://localhost:3000/art/${id}`, updatedData)
        : await axios.post("http://localhost:3000/art", updatedData);
      console.log(response);
      handleClose();
    } catch (error) {
      console.error(error);
      setError(serverDownError);
    }
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
            <Modal.Title>{id ? `Edit ${formData.title}` : 'New Artwork'}</Modal.Title>
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
                value={formData.year ? formData.year : ""}
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
                value={formData.width ? formData.width : ""}
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
                value={formData.height ? formData.height : ""}
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
              Cancel
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
