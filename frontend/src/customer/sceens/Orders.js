import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Orders.css";
import AuthedNavBar from "../../components/NavBar/AuthedNavBar";

export default function Orders() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  return (<div className="App">
    <AuthedNavBar/>
    <div className="home">
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder"> Reactjs shop in style</h1>
            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
          </div>
        </div>
      </header>

      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-5">
              <div className="card h-100">

                <img className="card-img-top"
                     src="https://therichpost.com/wp-content/uploads/2021/05/dummyimage400x300.jpg" alt="..."/>

                <div className="card-body p-4">
                  <div className="text-center">

                    <Link to={'/singleitem'}><h5 className="fw-bolder">Fancy Product</h5></Link>

                    $40.00 - $80.00
                  </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>);
}
