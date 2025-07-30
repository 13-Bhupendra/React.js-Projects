import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Description from "./Description";
import { Link } from "react-router";

function ProductCard(el) {
  
  return (
    <Card className="m-3" style={{ width: "18rem" }}>
  <Link to={`/description/${el.id}`}>
  <Card.Img variant="top" src={el.image} height={"250px"} />
</Link>
      <Card.Body>
        <Card.Title>{el.title}</Card.Title>
        <Card.Text>
          {el.category} <br />
          <h3>${el.price}</h3>
        </Card.Text>
        <Button variant="danger">Remove</Button>
        <Button variant="success" className="ms-3">  Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
