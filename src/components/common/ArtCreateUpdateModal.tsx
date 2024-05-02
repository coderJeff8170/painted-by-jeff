import { FormEvent, useState } from "react";
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
  year: number;
  image: string;
  thumbnail: string;
  datetime?: string; // Optional since it will be added on form submission
  description?: string; // Optional for the same reason
}

//parameter determines if the modal functions as a create or update modal
//if create, the form is empty
//if update, the form is prepopulated with the existing data
//if update, the id of the artwork to be updated is passed as a prop
//the id will be used to fetch the existing data from the API
//an absence of id will indicate that the modal is a create modal

export const ArtCreateUpdateModal = (id?: string) => {
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

  const getExistingData = (id: string) => {
    //fetch data from API using id
    axios.get(`http://localhost:3000/art/${id}`)
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

  if(id){getExistingData(id)}

  // const getBlankData = () => {
  //   return {
  //     title: "",
  //     medium: "",
  //     type: "",
  //     width: 0,
  //     height: 0,
  //     year: 0,
  //     image: "",
  //     thumbnail: "",
  //   };
  // };




  //const initialData = id ? getExistingData(id) : getBlankData();
  

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
    //if id exists, call the update endpoint
    //if id does not exist, call the create endpoint
    if(id){
      axios
      .put(`http://localhost:3000/art/${id}`, updatedData)
      .then((response) => {
        console.log(response);
      }).catch((error) => {
        console.error(error);
      })
    } else  {
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
      <Button variant="primary" className="mb-3" onClick={handleShow}>
        {`${id ? "+ Add" : <EditIcon />}`}
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
