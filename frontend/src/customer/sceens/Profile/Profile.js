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

  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

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
        console.log(window.localStorage.getItem("email"));
        // console.log(params.address);
        setEmail(res.data.email);
        setName(res.data.name);
        setId(res.data.id);
      })
      .catch((err) => {
        console.log(window.localStorage.getItem("email"));
        console.log(err);
      });
  }, [value]);
  const onChange = ({ target }) => setValue(target.value);

  const handleSubmit = (e) => {
    axios
      // .post("http://127.0.0.1:5000/react/signin", {
      .put("http://127.0.0.1:8081/api/updateuserprofile", {
        email: email,
        name: name,
        id: id,
      })
      .then((res) => {
        console.log("+++ " + res.data);
        localStorage.removeItem("email");
        localStorage.setItem("email", email);
        console.log("++++  " + window.localStorage.getItem("email"));
        // navigate("/user/profile");
      })
      .catch((err) => {
        console.log(err);
      });
    localStorage.removeItem("email");
    localStorage.setItem("email", email);
    // TODO: Add auth
  };
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
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Full name</Form.Label>
          <Form.Control
            value={name}
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="1234 Main St" id="address" />
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

        <Button variant="primary" type="submit" onClick={handleSubmit}>
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
