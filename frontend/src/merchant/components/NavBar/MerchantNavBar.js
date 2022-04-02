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
  //   const [signin, setSignin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="merchant-navbar">
      <div className="merchant-navbar-title" onClick={() => navigate("/")}>
        <span>MerchantAdmin</span>
      </div>
      <div style={{ width: thisWidth * 0.6 }}></div>
      <div
        className={
          mouse === "signup" ? "merchant-navbar-signup-onmouse" : "merchant-navbar-signup"
        }
        onMouseEnter={() => setMouse("signup")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/user/signup")}
      >
        <span>Sign up</span>
      </div>
      <div
        className={
          mouse === "signin" ? "merchant-navbar-signin-onmouse" : "merchant-navbar-signin"
        }
        onMouseEnter={() => setMouse("signin")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/user/signin")}
      >
        <span>Sign in</span>
      </div>
    </div>
  );
}
