import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup_resturtant.css";
import axios from "axios";
import google from "./images/google.png";
import NavBar from "../NavBar/index";

export default function SignupResturtant() {
  const [typing, setTyping] = useState("");
  const [mouse, setMouse] = useState("");

  const [resturtant, setResturtant] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const checkPassword = (e) => {
    if (e.target.value.length > 8) {
      if (e.target.value.match(/[a-z]+/) || e.target.value.match(/[A-Z]+/)) {
        if (e.target.value.match(/[0-9]+/)) {
          setPassword(e.target.value);
          setPasswordError("");
        } else {
          setPasswordError("password has to contains digits");
        }
      } else {
        setPasswordError("password has to contains letters");
      }
    } else {
      setPasswordError("password has to be at least 8 characters");
    }
  };
  const checkConfirmPassword = (e) => {
    if (e.target.value === password) {
      setConfirmPasswordError("");
    } else {
      setConfirmPasswordError("password donesn't match");
    }
  };
  const handleSubmit = (e) => {
    axios
      .post("http://127.0.0.1:5000/react/signup_resturtant", {
        resturtantname: resturtant,
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
      }) /*.then(res => {
        const token = res.data;
        this.props.setToken(token);
        this.setState({loggedIn: true});
    })*/
      .catch((err) => {
        console.log(err);
      });
  };

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
        <span className="signup-resturtant-title">
          Sign up as a resturtant owner
        </span>
        <div className="signup-resturtant-content">
          <span>already have account?</span>
          <div
            className={
              mouse === "signin"
                ? "signup-resturtant-signin-onmouse"
                : "signup-resturtant-signin"
            }
            onMouseEnter={() => setMouse("signin")}
            onMouseLeave={() => setMouse("")}
            onClick={() => navigate("/signin")}
          >
            <span>Sign in</span>
          </div>
        </div>
        <div className="signup-resturtant-block">
          <span className="signup-resturtant-content-title">
            Resturtant Name
          </span>
          <div
            className={
              typing === "resturtant"
                ? "signup-resturtant-input-block-ontyping"
                : "signup-resturtant-input-block"
            }
            onClick={() => setTyping("resturtant")}
          >
            <input
              className="signup-resturtant-input"
              onChange={(e) => setResturtant(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="signup-resturtant-names">
          <div className="signup-resturtant-block">
            <span className="signup-resturtant-content-title">First Name</span>
            <div
              className={
                typing === "firstname"
                  ? "signup-resturtant-name-input-block-ontyping"
                  : "signup-resturtant-name-input-block"
              }
              onClick={() => setTyping("firstname")}
            >
              <input
                className="signup-resturtant-name-input"
                onChange={(e) => setFirstname(e.target.value)}
              ></input>
            </div>
          </div>
          <div style={{ width: "20px" }}></div>
          <div className="signup-resturtant-block">
            <span className="signup-resturtant-content-title">Last Name</span>
            <div
              className={
                typing === "lastname"
                  ? "signup-resturtant-name-input-block-ontyping"
                  : "signup-resturtant-name-input-block"
              }
              onClick={() => setTyping("lastname")}
            >
              <input
                className="signup-resturtant-name-input"
                onChange={(e) => setLastname(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
        <div className="signup-resturtant-block">
          <span className="signup-resturtant-content-title">Email</span>
          <div
            className={
              typing === "email"
                ? "signup-resturtant-input-block-ontyping"
                : "signup-resturtant-input-block"
            }
            onClick={() => setTyping("email")}
          >
            <input
              className="signup-resturtant-input"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="signup-resturtant-block">
          <span className="signup-resturtant-content-title">Password</span>
          <div
            className={
              passwordError !== ""
                ? "signup-resturtant-input-block-onerror"
                : typing === "password"
                ? "signup-resturtant-input-block-ontyping"
                : "signup-resturtant-input-block"
            }
            onClick={() => setTyping("password")}
          >
            <input
              className="signup-resturtant-input"
              onChange={checkPassword}
            ></input>
          </div>
          {passwordError !== "" && (
            <span className="signup-resturtant-content-error">
              {passwordError}
            </span>
          )}
        </div>
        <div className="signup-resturtant-block">
          <span className="signup-resturtant-content-title">
            Confirm Password
          </span>
          <div
            className={
              confirmPasswordError !== ""
                ? "signup-resturtant-input-block-onerror"
                : typing === "confirmPassword"
                ? "signup-resturtant-input-block-ontyping"
                : "signup-resturtant-input-block"
            }
            onClick={() => setTyping("confirmPassword")}
          >
            <input
              className="signup-resturtant-input"
              onChange={checkConfirmPassword}
            ></input>
          </div>
          {confirmPasswordError !== "" && (
            <span className="signup-resturtant-content-error">
              {confirmPasswordError}
            </span>
          )}
        </div>
        <div
          className={
            mouse === "signup"
              ? "signup-resturtant-submit-onmouse"
              : "signup-resturtant-submit"
          }
          onMouseEnter={() => setMouse("signup")}
          onMouseLeave={() => setMouse("")}
          onClick={handleSubmit}
        >
          <span className="signup-resturtant-google-content">Sign up</span>
        </div>
        <div
          className={
            mouse === "google"
              ? "signup-resturtant-google-onmouse"
              : "signup-resturtant-google"
          }
          onMouseEnter={() => setMouse("google")}
          onMouseLeave={() => setMouse("")}
        >
          <div className="signup-resturtant-google-icon-bg">
            <img
              src={google}
              alt="google"
              className="signup-resturtant-google-icon"
            ></img>
          </div>
          <span className="signup-resturtant-google-content">
            Continue with Google
          </span>
        </div>
      </div>
    </div>
  );
}
