import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

export default function NavBar() {
  const thisWidth = window.innerWidth;
  const [mouse, setMouse] = useState("");
  //   const [signin, setSignin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-title" onClick={() => navigate("/")}>
        <span>GatorEats</span>
      </div>
      <div style={{ width: thisWidth * 0.6 }}></div>
      <div
        className={
          mouse === "signup" ? "navbar-signup-onmouse" : "navbar-signup"
        }
        onMouseEnter={() => setMouse("signup")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/signup")}
      >
        <span>Sign up</span>
      </div>
      <div
        className={
          mouse === "signin" ? "navbar-signin-onmouse" : "navbar-signin"
        }
        onMouseEnter={() => setMouse("signin")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/signin")}
      >
        <span>Sign in</span>
      </div>
    </div>
  );
}
