import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import "./index.css";
import App from "./App";
import Welcome from "./customer/sceens/Homepage/Welcome";
import Signin from "./customer/sceens/Auth/SignIn";
import Signup from "./customer/sceens/Auth/SignUp";
import RestaurantResults from "./customer/sceens/SearchResult/SearchResult";
import RestaurantMenu from "./customer/components/Restaurant/Menu";
import Home from "./customer/sceens/Homepage/Home";
import Orders from "./customer/sceens/Orders";
import Profile from "./customer/sceens/Profile/Profile";
// import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.min.css";
import Restaurant from "./customer/sceens/Restaurant";
import Cart from "./customer/sceens/Cart";
import Payment from "./customer/sceens/Payment/Payment";
import MerchantSignUp from "./merchant/sceens/Auth/Signup";
import MerchantSignIn from "./merchant/sceens/Auth/Signin";
import MerchantHome from "./merchant/sceens/Homepage/Home";
import MerchantMenu from "./merchant/sceens/Menu/Menu";
import MerchantPayment from "./merchant/sceens/Payment/Payment";
import MerchantProfile from "./merchant/sceens/Profile/Profile";
import MerchantOrders from "./merchant/sceens/Orders";
import Checkout from "./customer/sceens/Checkout/CheckoutForm";
import Pay from './customer/sceens/Checkout/Pay'
import ApplePay from "./customer/components/Checkout/ApplePay";
import CardForm from "./customer/components/Checkout/Card";
import GooglePay from "./customer/components/Checkout/GooglePay";
import WeChatPay from "./customer/components/Checkout/WechatPay";
import SepaDebitForm from "./customer/components/Checkout/SeptDebit";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/user/signin/" element={<Signin/>}></Route>
        <Route path="/user/signup/" element={<Signup/>}></Route>
        <Route path="/user/home/" element={<Home/>}></Route>
        <Route path="/user/orders/" element={<Orders/>}></Route>
        <Route path="/user/profile/" element={<Profile/>}></Route>
        <Route path="/user/payment/" element={<Payment/>}></Route>
        <Route path="/user/cart/" element={<Cart/>}></Route>
        <Route path="/user/checkout/" element={<Checkout/>}></Route>
        <Route path="/user/checkout/card" element={<CardForm/>}></Route>
        <Route path="/user/checkout/" element={<Checkout/>}></Route>
        <Route path="/user/checkout/pay" element={<Pay stripePromise={loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx')} />} />
        <Route path="/user/checkout/card" element={<CardForm/>}></Route>
        <Route path="/user/checkout/apple_pay" element={<ApplePay/>}></Route>
        <Route path="/user/checkout/google_pay" element={<GooglePay/>}></Route>
        <Route path="/user/checkout/wechat_pay" element={<WeChatPay/>}></Route>
        <Route path="/user/checkout/sept_debit" element={<SepaDebitForm/>}></Route>

        <Route path="/search/:address" element={<RestaurantResults/>}></Route>
        <Route path="/restaurant/" element={<Restaurant/>}></Route>
        <Route path="/restaurant/:id" element={<RestaurantMenu/>}></Route>
        
        <Route path="/merchant/signin/" element={<MerchantSignIn/>}></Route>
        <Route path="/merchant/signup/" element={<MerchantSignUp/>}></Route>
        <Route path="/merchant/home/" element={<MerchantHome/>}></Route>
        <Route path="/merchant/orders/" element={<MerchantOrders/>}></Route>
        <Route path="/merchant/profile/" element={<MerchantProfile/>}></Route>
        <Route path="/merchant/payment/" element={<MerchantPayment/>}></Route>
        <Route path="/merchant/menu/" element={<MerchantMenu/>}></Route>

        <Route
          path="/restaurant_results/:address"
          element={<RestaurantResults />}
        ></Route>
        <Route
          path="/restaurant_menu/:restaurant"
          element={<RestaurantMenu />}
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