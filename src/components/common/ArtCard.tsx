import { useState } from "react";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import { ImageMagnifier } from "./ImageMagnifier";

export interface ArtCardProps {
  description: string;
  link: string;
  medium?: string;
  thumbnail: string;
  title: string;
  type?: string;
}

export const ArtCard: React.FC<ArtCardProps> = (props) => {
  const { description, link, thumbnail, title } = props;
  const [showFullImage, setShowFullImage] = useState(false);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  //TODO: let user control magnifier size and zoom level
  const magnifierWidth = 100;
  const magnifierHeight = 100;
  const zoomLevel = 2;

  const handleMouseEnter = (e: { currentTarget: HTMLImageElement; }) => {
    const elem = e.currentTarget;
    const { width, height } = elem.getBoundingClientRect();
    setSize([width, height]);
    setShowMagnifier(true);
  }

  const handleMouseMove = (e: { currentTarget: HTMLImageElement; clientX: number; clientY: number; }) => {
    const elem = e.currentTarget;
    const { left, top } = elem.getBoundingClientRect();
    // calculate cursor position within the image
    const x = e.clientX - left - window.scrollX;
    const y = e.clientY - top - window.scrollY;
    setXY([x, y]);
  }

  return (
    <>
      <Card className="m-2" style={{ width: "15rem" }}>
        <Card.Img
          variant="top"
          src={thumbnail}
          onClick={() => setShowFullImage(true)}
          style={{ cursor: "zoom-in" }}
        />
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
      {showFullImage && (
        <Modal
          show={showFullImage}
          onHide={() => setShowFullImage(false)}
          aria-labelledby={title}
        >
          <Modal.Header closeButton>
            <Modal.Title id={title}>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center">
            <Image
              style={{ cursor: "none" }}
              src={link}
              alt={description}
              fluid
              onMouseEnter={handleMouseEnter}
              onMouseLeave={() => setShowMagnifier(false)}
              onMouseMove={handleMouseMove}
            />
            {showMagnifier && (
              <ImageMagnifier
                magnifierHeight={magnifierHeight}
                magnifierWidth={magnifierWidth}
                zoomLevel={zoomLevel}
                coordinates={[x, y]}
                imageSize={[imgWidth, imgHeight]}
                imageUrl={link}
              />
            )}
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
