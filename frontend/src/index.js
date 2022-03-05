import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import Welcome from "./customer/sceens/Homepage/Welcome";
import Signin from "./customer/sceens/Auth/SignIn";
import Signup from "./customer/sceens/Auth/SignUp";
import SignupRestaurant from "./merchant/components/Auth/Signup";
import RestaurantResults from "./customer/sceens/SearchResult/SearchResult";
import RestaurantMenu from "./customer/components/Restaurant/Menu/Menu";
import Home from "./customer/sceens/Homepage/Home";
import Orders from "./customer/sceens/Orders";
import Profile from "./customer/sceens/Profile";
// import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restaurant from "./customer/sceens/Restaurant";
import Cart from "./customer/sceens/Cart";
import Payment from "./customer/sceens/Payment";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/app" element={<App/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/orders" element={<Orders/>}></Route>
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route
          path="/restaurant/"
          element={<Restaurant/>}
        ></Route>
        <Route path="/signup_restaurant" element={<SignupRestaurant/>}></Route>

        <Route
          path="/restaurant_results/:address"
          element={<RestaurantResults/>}
        ></Route>
        <Route
          path="/restaurant_menu/:restaurant"
          element={<RestaurantMenu/>}
        ></Route>
        <Route
          path="/about"
          element={
            <div>
              <span>about</span>
            </div>
          }
        ></Route>
        <Route
          path="*"
          element={
            <div>
              <span>404</span>
            </div>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
