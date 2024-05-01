import { FormEvent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { DeleteIcon } from "../../assets/icons/DeleteIcon";

export const DeleteModal = (props: { id: string; }) => {
  console.log(props.id);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:3000/art/${props.id}`)
      .then((response) => {
        console.log(response);
        //TODO: snackbar notification
      })
      .catch((error) => {
        console.error(error);
        //TODO: snackbar notification
      });
    handleClose();
  };

  return (
    <>
      <Button
        variant="danger"
        title="Delete"
        aria-label="Delete"
        aria-live="polite"
        onClick={handleShow}
      >
        <DeleteIcon />
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Delete Artwork</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="danger" type="submit">
              Delete
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
