import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto gap-3  fs-3 ">
          <NavLink className="text-decoration-none text-light" to="/">
            Home
          </NavLink>
          <NavLink className="text-decoration-none text-light" to="/cart">
            Cart
          </NavLink>
          <NavLink className="text-decoration-none text-light" to="/addproduct">
            add product
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigator;
