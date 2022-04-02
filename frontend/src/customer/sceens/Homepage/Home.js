import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";
import homeBackground from "./images/homeBackground.svg";
import location from "./images/location.svg";
import deliver from "./images/deliver.png";
import restaurant from "./images/restaurant.png";
import "./Homepage.css";

export default function Home() {
  const thisWidth = window.innerWidth;
  const thisHeight = window.innerHeight;
  const [mouse, setMouse] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const [token, setToken] = useState("");
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);
  useEffect(() => {
    setCount(count + 1);
    setToken(window.localStorage.getItem("token"));
    if (window.localStorage.getItem("token") === null) {
      navigate("/");
    }
  }, [value]);
  const onChange = ({ target }) => setValue(target.value);

  //   const [signin, setSignin] = useState(false);

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
        <AuthedNavBar />
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
            onClick={() =>
              address !== "" && navigate(`/search/${address}`)
            }
          >
            <span>find my food</span>
          </div>
        </div>
      </div>
    </div>
  );
}
