import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthedMerchantNavBar from "../../components/NavBar/AuthedMerchantNavBar";
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
        <AuthedMerchantNavBar />
    </div>
  );
}
