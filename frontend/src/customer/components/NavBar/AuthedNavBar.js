import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AuthedNavBar.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function AuthedNavBar() {
  const thisWidth = window.innerWidth;
  const [mouse, setMouse] = useState("");
  const navigate = useNavigate();

  return (
    <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/home">
          <span className="authed-navbar-title">GatorEats</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          className="nav navbar-nav navbar-right"
          id="navbarScroll"
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/restaurant">Restaurant</Nav.Link>
            <Nav.Link href="/orders">Orders</Nav.Link>
            <Nav.Link href="/cart">Shopping Cart</Nav.Link>
            <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/payment">Payment</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              variant="outline-success"
              href="/restaurant_results/:address"
              style={{ marginRight: 100 }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
