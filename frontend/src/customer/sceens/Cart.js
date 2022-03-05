import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthedNavBar from "../components/NavBar/AuthedNavBar";

export default function Cart() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  return (
    <div className="cart">
      <AuthedNavBar/>
      <section className="py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row">
            <div className="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

              <div className="table-responsive">
                <table className="table">
                  <thead>
                  <tr>
                    <th scope="col" className="border-0 bg-light">
                      <div className="p-2 px-3 text-uppercase">Item</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Price</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Quantity</div>
                    </th>
                    <th scope="col" className="border-0 bg-light">
                      <div className="py-2 text-uppercase">Note</div>
                    </th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row" className="border-0">
                      <div className="p-2">
                        <img
                          src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
                          alt=""
                          width="70" className="img-fluid rounded shadow-sm"/>
                        <div className="ms-3 d-inline-block align-middle">
                          <h5 className="mb-0"><a href="#"
                                                  className="text-dark d-inline-block align-middle">Hamburger</a>
                          </h5>
                        </div>
                      </div>
                    </th>
                    <td className="border-0 align-middle"><strong>$7.99</strong></td>
                    <td className="border-0 align-middle"><strong>1</strong></td>
                    <td className="border-0 align-middle"><a href="#" className="text-dark"><i
                      className="bi bi-trash"></i>No pickles</a></td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="p-2">
                        <img
                          src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvY2ElMjBjb2xhfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                          alt=""
                          width="70" className="img-fluid rounded shadow-sm"/>
                        <div className="ms-3 d-inline-block align-middle">
                          <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Coke</a></h5>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle"><strong>$2.99</strong></td>
                    <td className="align-middle"><strong>2</strong></td>
                    <td className="align-middle"><a href="#" className="text-dark"><i className="bi bi-trash"></i></a>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="p-2">
                        <img
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/french-fries-royalty-free-image-1634646257.jpg"
                          alt=""
                          width="70" className="img-fluid rounded shadow-sm"/>
                        <div className="ms-3 d-inline-block align-middle">
                          <h5 className="mb-0"><a href="#" className="text-dark d-inline-block">Fries</a></h5>
                        </div>
                      </div>
                    </th>
                    <td className="align-middle"><strong>$1.99</strong></td>
                    <td className="align-middle"><strong>1</strong></td>
                    <td className="align-middle"><a href="#" className="text-dark"><i className="bi bi-trash"></i></a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>

            </div>
          </div>

          <div className="row py-5 p-4 bg-white rounded shadow-sm">
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Coupon code</div>
              <div className="p-4">
                <p className="mb-4"><em>If you have a coupon code, please enter it in the box below</em></p>
                <div className="input-group mb-4 border rounded-pill p-2">
                  <input type="text" placeholder="Apply coupon" aria-describedby="button-addon3"
                         className="form-control border-0"/>
                  <div className="input-group-append border-0">
                    <button id="button-addon3" type="button" className="btn btn-dark px-4 rounded-pill"><i
                      className="fa fa-gift mr-2"></i>Apply coupon
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Instructions for seller</div>
              <div className="p-4">
                <p className="mb-4"><em>If you have some information for the seller you can leave them in the box
                  below</em></p>
                <textarea name="" cols="30" rows="2" className="form-control"></textarea>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="bg-light rounded-pill px-4 py-3 text-uppercase fw-bold">Order summary</div>
              <div className="p-4">
                <p className="mb-4"><em>Shipping and additional costs are calculated based on values you have
                  entered.</em></p>
                <ul className="list-unstyled mb-4">
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Order
                    Subtotal </strong><strong>$12.97</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong className="text-muted">Service
                    Fee</strong><strong>$3.00</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong
                    className="text-muted">Tax</strong><strong>$1.02</strong></li>
                  <li className="d-flex justify-content-between py-3 border-bottom"><strong
                    className="text-muted">Total</strong>
                    <h5 className="fw-bold">$16.99</h5>
                  </li>
                </ul>
                <a href="#" className="btn btn-dark rounded-pill py-2 d-md-block">Procceed to checkout</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>

  );
}
