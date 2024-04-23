import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
// import "./ArtCard.css";

export interface ArtCardProps {
  description: string;
  thumbnail: string;
  title: string;
  link: string;
}

export const ArtCard: React.FC<ArtCardProps> = ( props ) => {
  const { description, link, thumbnail, title } = props;
  const [showFullImage, setShowFullImage] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  //TODO: move magnifier to its own component with the following props
  const magnifierWidth = 100;
  const magnifierHeight = 100;
  const zoomLevel = 2;


  return (
    <>
      <Card className="m-2" style={{ width: "15rem" }} >
        <Card.Img
          variant="top"
          src={thumbnail}
          onClick={() => setShowFullImage(true)}
          style={{cursor: "zoom-in"}}
        />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      {showFullImage && (
        <Modal
          show={showFullImage}
          //size="lg"
          onHide={() => setShowFullImage(false)}
          aria-labelledby={title}
        >
          <Modal.Header closeButton>
            <Modal.Title id={title}>
              {title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image 
              style={{cursor: "none"}}
              src={link}
              alt={description} 
              fluid 
              onMouseEnter={(e) => {
                const elem = e.currentTarget;
                const { width, height } = elem.getBoundingClientRect();
                setSize([width, height]);
                setShowMagnifier(true)
              }}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={(e) => {
                const elem = e.currentTarget;
                const { left, top } = elem.getBoundingClientRect();
                // calculate cursor position within the image
                const x = e.clientX - left - window.scrollX;
                const y = e.clientY - top - window.scrollY;
                setXY([x, y]);
              }}
              />
            {showMagnifier && 
              <div
                style={{
                  position: "absolute",
                  pointerEvents: "none",
                  height: "100px",
                  width: "100px",
                  top: `${y - 100/2}px`,
                  left: `${x - 100/2}px`,
                  opacity: 1,
                  border: "1px solid black",
                  backgroundColor: "white",
                  backgroundImage: `url(${link})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
                  backgroundPosition: `-${x * zoomLevel - magnifierWidth/2}px -${y * zoomLevel - magnifierHeight/2}px`,
                }}
              >
              </div>}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
