import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthedMerchantNavBar from "../components/NavBar/AuthedMerchantNavBar";

const McDonaldURL =
  "https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj";

export default function MerchantOrders() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  return (
    <div className="App">
      <AuthedMerchantNavBar />
      <span>Order[WIP]</span>
      </div>
  );
}
