import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addProductAction, postProduct } from "../redux/productsActions";
import axios from "axios";

 


function AddProduct() {
    const dispatch=useDispatch()
    function handleSubmit(e){
        e.preventDefault()
        const product={
            title:e.target.title.value,
            price:e.target.price.value,
            categry:e.target.category.value
        }
dispatch(postProduct(product))
    }
  return (
    <Form style={{width:"50%",margin:"30px auto"}} onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          title
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="title" name="title"  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          price
        </Form.Label>
        <Col sm="10">
          <Form.Control type="number" placeholder="pirce" name="price" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          category
        </Form.Label>
        <Col sm="10">
          <Form.Select aria-label="Default select example" name="category">
            <option defaultChecked hidden>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Col>
      </Form.Group>
      <Button type="submit">submit</Button>
    </Form>
  );
}

export default AddProduct;
