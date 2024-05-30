import Card from "react-bootstrap/Card";

export interface DigitalCardProps {
  description: string;
  link: string;
  thumbnail: string;
  title: string;
}

export const DigitalCard: React.FC<DigitalCardProps> = (props) => {
  const { description, link, thumbnail, title } = props;

  return (
    <>
      <Card className="m-2" style={{ width: "15rem" }}>
        <Card.Link href={link} target="_blank">
            <Card.Img
            style={{ height: "15rem", width: "15rem" }}
            variant="top"
            src={thumbnail}
            onClick={() => {}}
            />
        </Card.Link>
        <Card.Body>
        <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
