import React, {useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import "./Orders.css";
import axios from "axios";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";
import logo from "../../../logo.svg";

export default function Orders() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  return (<div className="App">
    <AuthedNavBar/>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        WIP: Orders
      </a>
    </header>
  </div>);
}