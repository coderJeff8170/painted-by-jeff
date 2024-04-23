export interface ImageMagnifierProps {
  coordinates: [number, number];
  imageSize: [number, number];
  imageUrl: string;
  magnifierHeight: number;
  magnifierWidth: number;
  zoomLevel: number;
}

export const ImageMagnifier: React.FC<ImageMagnifierProps> = (props) => {
  const { imageUrl, magnifierHeight, magnifierWidth, zoomLevel } = props;
  const [x, y] = props.coordinates;
  const [imgWidth, imgHeight] = props.imageSize;

  return (
    <>
      <div
        style={{
          position: "absolute",
          pointerEvents: "none",
          height: `${magnifierHeight}px`,
          width: `${magnifierWidth}px`,
          top: `${y - magnifierHeight / 2}px`,
          left: `${x - magnifierWidth / 2}px`,
          opacity: 1,
          border: "1px solid black",
          backgroundColor: "white",
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
          backgroundPosition: `-${x * zoomLevel - magnifierWidth / 2}px -${y * zoomLevel - magnifierHeight / 2}px`,
        }}
      ></div>
    </>
  );
};
