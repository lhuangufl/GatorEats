import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthedNavBar from "../components/NavBar/AuthedNavBar";

const McDonaldURL =
  "https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj";

export default function Orders() {
  const navigate = useNavigate();
  const [mouse, setMouse] = useState("");
  return (
    <div className="App">
      <AuthedNavBar />
      <div
        style={{
          width: "100%",
          height: "0.1px",
          backgroundColor: "rgb(0, 0, 0, 10%)",
        }}
      ></div>
      <div className="home">
        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col mb-5">
                <div className="card h-100">
                  <img
                    className="card-img-top"
                    src="https://yt3.ggpht.com/ytc/AKedOLS5rTsrjzAgo0yJdrdHBSdEskUL4JsSwCvDCfcKdw=s900-c-k-c0x00ffffff-no-rj"
                    alt="..."
                  />

                  <div className="card-body p-4">
                    <div className="text-center">
                      <Link to={"/singleitem"}>
                        <h5 className="fw-bolder">McDonald</h5>
                      </Link>
                      $12.35
                    </div>
                  </div>

                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <a className="btn btn-outline-dark mt-auto" href="#">
                        View details
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
