import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
import google from "./images/google.png";
import NavBar from "./../NavBar/index";

export default function Signup() {
  const thisWidth = window.innerWidth;
  const thisHeight = window.innerHeight;
  const [typing, setTyping] = useState("");
  const [mouse, setMouse] = useState("");

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <div
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "rgb(0, 0, 0, 10%)",
        }}
      ></div>
      <div className="signup">
        <span className="signup-title">Sign up</span>
        <div className="signup-content">
          <span>already have account?</span>
          <div
            className={
              mouse === "signin" ? "signup-signin-onmouse" : "signup-signin"
            }
            onMouseEnter={() => setMouse("signin")}
            onMouseLeave={() => setMouse("")}
            onClick={() => navigate("/signin")}
          >
            <span>Sign in</span>
          </div>
        </div>
        <div className="signup-names">
          <div className="signup-block">
            <span className="signup-content-title">First Name</span>
            <div
              className={
                typing === "firstname"
                  ? "signup-name-input-block-ontyping"
                  : "signup-name-input-block"
              }
              onClick={() => setTyping("firstname")}
            >
              <input
                className="signup-name-input"
                onChange={(e) => setFirstname(e.target.value)}
              ></input>
            </div>
          </div>
          <div style={{ width: "20px" }}></div>
          <div className="signup-block">
            <span className="signup-content-title">Last Name</span>
            <div
              className={
                typing === "lastname"
                  ? "signup-name-input-block-ontyping"
                  : "signup-name-input-block"
              }
              onClick={() => setTyping("lastname")}
            >
              <input
                className="signup-name-input"
                onChange={(e) => setLastname(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="signup-block">
          <span className="signup-content-title">Email</span>
          <div
            className={
              typing === "email"
                ? "signup-input-block-ontyping"
                : "signup-input-block"
            }
            onClick={() => setTyping("email")}
          >
            <input
              className="signup-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="signup-block">
          <span className="signup-content-title">Password</span>
          <div
            className={
              typing === "password"
                ? "signup-input-block-ontyping"
                : "signup-input-block"
            }
            onClick={() => setTyping("password")}
          >
            <input
              className="signup-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="signup-block">
          <span className="signup-content-title">Confirm Password</span>
          <div
            className={
              typing === "confirmPassword"
                ? "signup-input-block-ontyping"
                : "signup-input-block"
            }
            onClick={() => setTyping("confirmPassword")}
          >
            <input
              className="signup-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div
          className={
            mouse === "signup" ? "signup-submit-onmouse" : "signup-submit"
          }
          onMouseEnter={() => setMouse("signup")}
          onMouseLeave={() => setMouse("")}
        >
          <span className="signup-google-content">Sign up</span>
        </div>
        <div
          className={
            mouse === "google" ? "signup-google-onmouse" : "signup-google"
          }
          onMouseEnter={() => setMouse("google")}
          onMouseLeave={() => setMouse("")}
        >
          <div className="signup-google-icon-bg">
            <img src={google} alt="google" className="signup-google-icon"></img>
          </div>
          <span className="signup-google-content">Continue with Google</span>
        </div>
      </div>
      <span>signup page</span>
    </div>
  );
}
