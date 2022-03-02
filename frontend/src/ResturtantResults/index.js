import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./resturtant_results.css";
import axios from "axios";
import NavBar from "../NavBar/index";
import resturtant from "./images/resturtant.png";

export default function ResturtantResults() {
  const navigate = useNavigate();
  const data = [
    {
      resturtant: "macdonald",
      zip: "32608",
    },
    {
      resturtant: "kfc",
      zip: "32608",
    },
    {
      resturtant: "tacobell",
      zip: "32608",
    },
    {
      resturtant: "popeyes",
      zip: "32608",
    },
    {
      resturtant: "xxx",
      zip: "32608",
    },
  ];
  var rows = [];
  for (var i = 0; i < data.length; i += 4) {
    rows.push(
      <div className="resturtant-results-block">
        {i < data.length && (
          <div className="resturtant-results-block-content">
            <img
              className="resturtant-results-image"
              src={resturtant}
              alt="resturtant"
            ></img>
            <span className="resturtant-results-name">
              {data[i].resturtant}
            </span>
          </div>
        )}
        {i + 1 < data.length && (
          <div className="resturtant-results-block-content">
            <img
              className="resturtant-results-image"
              src={resturtant}
              alt="resturtant"
            ></img>
            <span className="resturtant-results-name">
              {data[i + 1].resturtant}
            </span>
          </div>
        )}
        {i + 2 < data.length && (
          <div className="resturtant-results-block-content">
            <img
              className="resturtant-results-image"
              src={resturtant}
              alt="resturtant"
            ></img>
            <span className="resturtant-results-name">
              {data[i + 2].resturtant}
            </span>
          </div>
        )}
        {i + 3 < data.length && (
          <div className="resturtant-results-block-content">
            <img
              className="resturtant-results-image"
              src={resturtant}
              alt="resturtant"
            ></img>
            <span className="resturtant-results-name">
              {data[i + 3].resturtant}
            </span>
          </div>
        )}
      </div>
    );
  }

  const params = useParams();
  return (
    <div className="resturtant-results">
      <NavBar />
      <div className="resturtant-results-title">
        <span className="resturtant-results-title-content">
          Result for "{params.address}"
        </span>
      </div>
      {/* <div className="resturtant-results-block">
        <div className="resturtant-results-block-content"></div>
        <div className="resturtant-results-block-content"></div>
        <div className="resturtant-results-block-content"></div>
      </div> */}
      {rows}
    </div>
  );
}
