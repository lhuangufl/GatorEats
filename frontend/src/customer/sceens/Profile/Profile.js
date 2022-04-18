import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";
import { Button, Col, Form, Nav, Row } from "react-bootstrap";
import "./Profiel.css";
import axios from "axios";

export default function Profile() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  const [count, setCount] = useState(-1);
  const [value, setValue] = useState("");
  const [resData, setResData] = useState();

  useEffect(() => {
    setCount(count + 1);
    axios
      .get(
        `http://127.0.0.1:8081/api/getuserprofile?email=${window.localStorage.getItem(
          "email"
        )}`,
        { email: window.localStorage.getItem("email") }
      )
      .then((res) => {
        // console.log(params.address);
        console.log(res.data);
        const temp = res.data;
        setResData(temp);
      })
      .catch((err) => {
        console.log(window.localStorage.getItem("email"));
        console.log(err);
      });
  }, [value]);
  const onChange = ({ target }) => setValue(target.value);
  return (
    <div>
      <AuthedNavBar />
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
              id="email"
              placeholder="gator-eat-test@gmacil.com"
            />
          </Form.Group>

          {/* <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="*********"
              id="password"
            />
          </Form.Group> */}
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" id="address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="Apartment 1234" id="address2" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control placeholder="Gainesville" id="city" />
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
            <Form.Control placeholder="32603" id="zipcode" />
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
