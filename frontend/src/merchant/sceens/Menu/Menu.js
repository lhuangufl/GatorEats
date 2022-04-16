import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./Menu.css";
import axios from "axios";
import AuthedMerchantNavBar from "../../components/NavBar/AuthedMerchantNavBar";
import food from "../../../img/food.png";
import restaurant from "../../../img/restaurant.png";

export default function MerchantMenu(props) {
  const navigate = useNavigate();
  const params = useParams();
  const [mouse, setMouse] = useState("");
  const [data, setData] = useState([]);

  const [value, setValue] = useState("");
  const [count, setCount] = useState(-1);
  useEffect(
    (props) => {
      setCount(count + 1);
      axios
        .get(
          `http://127.0.0.1:8081/api/getfoodmenu?OwnerEmail=${localStorage.getItem('email')}`,
        )
        .then((res) => {
          console.log(res.data);
          const temp = res.data;
          setData(temp);
        })
        .catch((err) => {
          console.log("error: " + localStorage.getItem('email'));
          console.log(err);
        });
    },
    [value]
  );
  const onChange = ({ target }) => setValue(target.value);

  // const data = [
  //   {
  //     name: "burger",
  //     price: 2.99,
  //   },
  //   {
  //     name: "fries",
  //     price: 1.99,
  //   },
  //   {
  //     name: "chicken tenders",
  //     price: 3.99,
  //   },
  //   {
  //     name: "soft drink",
  //     price: 1.59,
  //   },
  //   {
  //     name: "ice cream",
  //     price: 0.99,
  //   },
  //   {
  //     name: "hot wings",
  //     price: 7.99,
  //   },
  //   {
  //     name: "salmon sushi",
  //     price: 6.99,
  //   },
  // ];
  var rows = [];
  // if (data !== undefined) {
  for (let i = 0; i < data.length; i += 3) {
    rows.push(
      <div className="restaurant-menu-block">
        {i < data.length && (
          <div className="restaurant-menu-block-content">
            <img className="restaurant-menu-image" src={food} alt="food"></img>
            <div className="restaurant-menu-food-detail">
              <span className="restaurant-menu-name">{data[i].name}</span>
              <span className="restaurant-menu-price">$ {data[i].price}</span>
              <div
                className={
                  mouse === i
                    ? "restaurant-menu-add-cart-onmouse"
                    : "restaurant-menu-add-cart"
                }
                onMouseEnter={() => setMouse(i)}
                onMouseLeave={() => setMouse("")}
                // onClick={() => navigate("/signin")}
              >
                <span className="restaurant-menu-add-cart-content">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        )}
        {i + 1 < data.length && (
          <div className="restaurant-menu-block-content">
            <img className="restaurant-menu-image" src={food} alt="food"></img>
            <div className="restaurant-menu-food-detail">
              <span className="restaurant-menu-name">{data[i + 1].name}</span>
              <span className="restaurant-menu-price">
                $ {data[i + 1].price}
              </span>
              <div
                className={
                  mouse === i + 1
                    ? "restaurant-menu-add-cart-onmouse"
                    : "restaurant-menu-add-cart"
                }
                onMouseEnter={() => setMouse(i + 1)}
                onMouseLeave={() => setMouse("")}
                // onClick={() => navigate("/signin")}
              >
                <span className="restaurant-menu-add-cart-content">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        )}
        {i + 2 < data.length && (
          <div className="restaurant-menu-block-content">
            <img className="restaurant-menu-image" src={food} alt="food"></img>
            <div className="restaurant-menu-food-detail">
              <span className="restaurant-menu-name">{data[i + 2].name}</span>
              <span className="restaurant-menu-price">
                $ {data[i + 2].price}
              </span>
              <div
                className={
                  mouse === i + 2
                    ? "restaurant-menu-add-cart-onmouse"
                    : "restaurant-menu-add-cart"
                }
                onMouseEnter={() => setMouse(i + 2)}
                onMouseLeave={() => setMouse("")}
                // onClick={() => navigate("/signin")}
              >
                <span className="restaurant-menu-add-cart-content">
                  Add to cart
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  // }

  return (
    <div>
      <AuthedMerchantNavBar />
      <div className="restaurant-menu">
        <div
          style={{
            width: "100%",
            height: "0.1px",
            backgroundColor: "rgb(0, 0, 0, 10%)",
          }}
        ></div>
        <div className="restaurant-menu-title">
          <img
            className="restaurant-menu-icon"
            src={restaurant}
            alt="restaurant"
          ></img>
          <span className="restaurant-menu-title-content">
            {params.restaurant}
          </span>
        </div>
        <div className="restaurant-menu-line"></div>

        {rows}
      </div>
    </div>
  );
}
