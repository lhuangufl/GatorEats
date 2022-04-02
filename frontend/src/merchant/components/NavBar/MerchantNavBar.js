import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MerchantNavBar.css";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

export default function MerchantNavBar() {
  const thisWidth = window.innerWidth;
  const [mouse, setMouse] = useState("");
  const navigate = useNavigate();
  const [address, setAddress] = useState("");

  return (
    <Navbar bg="transparent" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/merchant/home">
          <span className="merchant-navbar-title">GatorEats</span>
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
            <Nav.Link href="/merchant/menu">Menu</Nav.Link>
            <Nav.Link href="/merchant/orders">Orders</Nav.Link>
            <Nav.Link href="/merchant/profile">Profile</Nav.Link>
            <Nav.Link href="/merchant/payment">Payment</Nav.Link>
            <Nav.Link
                href="/"
                onClick={() => window.localStorage.removeItem("token")}
              >
                Logout
              </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
