import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import "./AuthedNavBar.css";

export default function AuthedNavBar() {
  const thisWidth = window.innerWidth;
  const [mouse, setMouse] = useState("");
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="navbar-title" onClick={() => navigate("/home")}>
        <span>GatorEats</span>
      </div>
      <div style={{width: thisWidth * 0.6}}></div>
      <div
        className={
          mouse === "home" ? "navbar-signup-onmouse" : "navbar-signup"
        }
        onMouseEnter={() => setMouse("signup")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/home")}
      >
        <span>Home</span>
      </div>
      <div
        className={
          mouse === "restaurant" ? "navbar-signup-onmouse" : "navbar-signup"
        }
        onMouseEnter={() => setMouse("restaurant")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/restaurant")}
      >
        <span>Restaurant</span>
      </div>
      <div
        className={
          mouse === "orders" ? "navbar-signin-onmouse" : "navbar-signin"
        }
        onMouseEnter={() => setMouse("orders")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/orders")}
      >
        <span>Orders</span>
      </div>
      <div
        className={
          mouse === "account" ? "navbar-signup-onmouse" : "navbar-signup"
        }
        onMouseEnter={() => setMouse("signup")}
        onMouseLeave={() => setMouse("")}
        onClick={() => navigate("/account")}
      >
        <span>Account</span>
      </div>
    </div>
  );
}
