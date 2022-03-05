import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./SearchResult.css";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";
import restaurant from "../../../img/restaurant.png";

export default function RestaurantResults() {
  const navigate = useNavigate();
  const params = useParams();
  const [resData, setResData] = useState([]);
  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);
  var rows = [];
  useEffect(() => {
    setCount(count + 1);
    axios
      .post("http://127.0.0.1:5000/react/search_result", {
        zipcode: params.address,
      })
      .then((res) => {
        const temp = res.data.data;
        setResData(temp);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);
  const onChange = ({ target }) => setValue(target.value);
  // console.log(1);
  // let resData = [
  //   {
  //     restaurant: "macdonald",
  //     zip: "32608",
  //   },
  //   {
  //     restaurant: "kfc",
  //     zip: "32608",
  //   },
  //   {
  //     restaurant: "tacobell",
  //     zip: "32608",
  //   },
  //   {
  //     restaurant: "popeyes",
  //     zip: "32608",
  //   },
  //   {
  //     restaurant: "xxx",
  //     zip: "32608",
  //   },
  // ];

  // navigate(`/restaurant_menu/${data[i].restaurant}`)
  for (let i = 0; i < resData.length; i += 4) {
    rows.push(
      <div className="restaurant-results-block">
        {i < resData.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${resData[i].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {resData[i].restaurant}
            </span>
          </div>
        )}
        {i + 1 < resData.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${resData[i + 1].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {resData[i + 1].restaurant}
            </span>
          </div>
        )}
        {i + 2 < resData.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${resData[i + 2].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {resData[i + 2].restaurant}
            </span>
          </div>
        )}
        {i + 3 < resData.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${resData[i + 3].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {resData[i + 3].restaurant}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="restaurant-results">
      <AuthedNavBar />
      <div
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "rgb(0, 0, 0, 10%)",
        }}
      ></div>
      <div className="restaurant-results-title">
        <span className="restaurant-results-title-content">
          Result for "{params.address}"
        </span>
      </div>
      {/* <div className="restaurant-results-block">
        <div className="restaurant-results-block-content"></div>
        <div className="restaurant-results-block-content"></div>
        <div className="restaurant-results-block-content"></div>
      </div> */}
      {rows}
    </div>
  );
}
