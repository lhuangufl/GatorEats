import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MerchantNavBar from "../../components/NavBar/MerchantNavBar";
import homeBackground from "./images/homeBackground.svg";
import location from "./images/location.svg";
import deliver from "./images/deliver.png";
import restaurant from "./images/restaurant.png";
import "./Homepage.css";

export default function MerchantHome() {
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
        <MerchantNavBar />
    </div>
  );
}
