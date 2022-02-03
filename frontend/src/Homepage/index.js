import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import homeBackground from "./images/homeBackground.svg";
import location from "./images/location.svg";
import deliver from "./images/deliver.png";
import resturtant from "./images/resturtant.png";
import "./homepage.css";

export default function Homepage() {
  const thisWidth = window.innerWidth;
  const thisHeight = window.innerHeight;
  const [mouse, setMouse] = useState("");
  const [address, setAddress] = useState("");
  //   const [signin, setSignin] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="home">
      {/* <img
        src={homeBackground}
        style={{ width: thisWidth }}
        alt="homeBackground"
      ></img> */}
      {/* {signin && <Redirect to="/app" />} */}
      <div
        style={{
          width: "100%",
          height: thisHeight,
          backgroundImage: `url(${homeBackground})`,
        }}
      >
        <div className="home-navbar">
          <div className="home-navbar-title">
            <span>GatorEats</span>
          </div>
          <div style={{ width: thisWidth * 0.6 }}></div>
          <div
            className={
              mouse === "signup"
                ? "home-navbar-signup-onmouse"
                : "home-navbar-signup"
            }
            onMouseEnter={() => setMouse("signup")}
            onMouseLeave={() => setMouse("")}
            onClick={() => navigate("/signup")}
          >
            <span>Sign up</span>
          </div>
          <div
            className={
              mouse === "signin"
                ? "home-navbar-signin-onmouse"
                : "home-navbar-signin"
            }
            onMouseEnter={() => setMouse("signin")}
            onMouseLeave={() => setMouse("")}
            onClick={() => navigate("/signin")}
          >
            <span>Sign in</span>
          </div>
        </div>
        <div className="home-title">
          <span>Search foods near to you</span>
        </div>
        <div className="home-find-block">
          <div className="home-input-block">
            <img
              src={location}
              alt="location"
              style={{ height: "30px", marginLeft: "10px" }}
            ></img>
            <input
              className="home-input"
              type="text"
              placeholder="Enter you zip code or address"
              onChange={(e) => setAddress(e.target.value)}
              value={address}
            ></input>
          </div>
          <div
            className={
              address === ""
                ? "home-submit-disable"
                : mouse === "submit"
                ? "home-submit-onmouse"
                : "home-submit-enable"
            }
            onMouseEnter={() => setMouse("submit")}
            onMouseLeave={() => setMouse("")}
          >
            <span>find my food</span>
          </div>
        </div>
      </div>

      <div className="home-bottom">
        <div className="home-bottom-sections">
          <img
            className="home-bottom-sections-image"
            src={deliver}
            alt="deliver"
          ></img>
          <span
            onMouseEnter={() => setMouse("deliver")}
            onMouseLeave={() => setMouse("")}
            className={
              mouse === "deliver"
                ? "home-bottom-sections-link-onmouse"
                : "home-bottom-sections-link"
            }
          >
            Become a food deliver
          </span>
        </div>
        <div className="home-bottom-sections-mid"></div>
        <div className="home-bottom-sections">
          <img
            className="home-bottom-sections-image"
            src={resturtant}
            alt="resturtant"
          ></img>
          <span
            onMouseEnter={() => setMouse("deliver")}
            onMouseLeave={() => setMouse("")}
            className={
              mouse === "deliver"
                ? "home-bottom-sections-link-onmouse"
                : "home-bottom-sections-link"
            }
          >
            Become a resturtant holder
          </span>
        </div>
        <div className="home-bottom-sections-mid"></div>
        <div className="home-bottom-sections"></div>
      </div>
    </div>
  );
}