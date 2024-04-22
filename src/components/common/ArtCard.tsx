import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";

interface ArtCardProps {
  cardInfo: ArtCardInfo;
  index: number;
}
type ArtCardInfo = {
  description: string;
  thumbnail: string;
  title: string;
  link: string;
};
export const ArtCard: React.FC<ArtCardProps> = ({ cardInfo, index }) => {
  const [showFullImage, setShowFullImage] = useState(false);

  return (
    <>
      <Card className="m-2" style={{ width: "15rem" }} key={index}>
        <Card.Img
          variant="top"
          src={cardInfo.thumbnail}
          onClick={() => setShowFullImage(true)}
        />
        <Card.Body>
          <Card.Text>{cardInfo.description}</Card.Text>
        </Card.Body>
      </Card>
      {showFullImage && (
        // <div
        //   className="lightbox"
        //   onClick={closeFullImage}
        //   style={{
        //     position: "fixed",
        //     top: 0,
        //     left: 0,
        //     width: "100%",
        //     height: "100%",
        //     backgroundColor: "rgba(0, 0, 0, 0.5)",
        //     zIndex: 1050,
        //     display: "flex",
        //     justifyContent: "center",
        //     alignItems: "center",
        //   }}
        // >
        //   <img
        //     src={cardInfo.link}
        //     style={{ maxHeight: "90%", maxWidth: "90%" }}
        //     onClick={(e) => e.stopPropagation()}
        //   />
        //   <span
        //     className="close-icon"
        //     style={{
        //       position: "absolute",
        //       top: 10,
        //       right: 10,
        //       cursor: "pointer",
        //       color: "white",
        //       fontSize: "30px",
        //     }}
        //     onClick={closeFullImage}
        //   >
        //     &times;
        //   </span>
        // </div>
        <Modal
        show={showFullImage}
        size="lg"
        onHide={() => setShowFullImage(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {cardInfo.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img
            src={cardInfo.link}
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            onClick={(e) => e.stopPropagation()}
          />
        </Modal.Body>
      </Modal>
      )}
    </>
  );
};
