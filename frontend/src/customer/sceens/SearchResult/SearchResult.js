import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./SearchResult.css";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";
import restaurant from "../../../img/restaurant.png";

export default function RestaurantResults() {
  const navigate = useNavigate();
  const data = [
    {
      restaurant: "macdonald",
      zip: "32608",
    },
    {
      restaurant: "kfc",
      zip: "32608",
    },
    {
      restaurant: "tacobell",
      zip: "32608",
    },
    {
      restaurant: "popeyes",
      zip: "32608",
    },
    {
      restaurant: "xxx",
      zip: "32608",
    },
  ];
  var rows = [];
  // navigate(`/restaurant_menu/${data[i].restaurant}`)
  for (let i = 0; i < data.length; i += 4) {
    rows.push(
      <div className="restaurant-results-block">
        {i < data.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() => navigate(`/restaurant_menu/${data[i].restaurant}`)}
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {data[i].restaurant}
            </span>
          </div>
        )}
        {i + 1 < data.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${data[i + 1].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {data[i + 1].restaurant}
            </span>
          </div>
        )}
        {i + 2 < data.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${data[i + 2].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {data[i + 2].restaurant}
            </span>
          </div>
        )}
        {i + 3 < data.length && (
          <div
            className="restaurant-results-block-content"
            onClick={() =>
              navigate(`/restaurant_menu/${data[i + 3].restaurant}`)
            }
          >
            <img
              className="restaurant-results-image"
              src={restaurant}
              alt="restaurant"
            ></img>
            <span className="restaurant-results-name">
              {data[i + 3].restaurant}
            </span>
          </div>
        )}
      </div>
    );
  }

  const params = useParams();
  return (
    <div>
      <AuthedNavBar/>
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
