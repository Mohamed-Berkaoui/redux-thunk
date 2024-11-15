import React from "react";
import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../redux/cartActions";


function Box({ product }) {
  const dispatch=useDispatch()
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img height={200} variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.category}</Card.Text>
        <Card.Text>{product.price}</Card.Text>
        <Button onClick={()=>dispatch(addToCartAction(product))} variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Box;
