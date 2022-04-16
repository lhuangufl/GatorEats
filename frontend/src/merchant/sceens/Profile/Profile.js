import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthedMerchantNavBar from "../../components/NavBar/AuthedMerchantNavBar";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import "./Profile.css";

export default function MerchantProfile() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");

  return (
    <div>
      <AuthedMerchantNavBar />
      <div
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "rgb(0, 0, 0, 10%)",
        }}
      ></div>
      {/* <div className="profile-nav">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link>Profile</Nav.Link>
          </Nav.Item>
        </Nav>
      </div> */}
      <Form className="profile-container">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="gator-eat-test@gmacil.com"
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="*********" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment 1234" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Gainesville" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>FL</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control placeholder="32603" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
      {/* <div className="profile-nav">
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link>Settings</Nav.Link>
          </Nav.Item>
        </Nav>
      </div> */}
      <Form className="profile-container">
        {["email", "text"].map((type) => (
          <div key={`notification-${type}`} className="mb-3">
            <Form.Check
              type="checkbox"
              id={`${type} Notification`}
              label={`Receive order status update via ${type}`}
            />
          </div>
        ))}

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
}
