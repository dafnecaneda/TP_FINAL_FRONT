import React from "react";
import { Link } from "react-router-dom";
import Ghost from "../public/imgs/catch.png";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

const Catch = () => {
  return (
    <>
      <Navbar />
      <div className="bg1 wh-100">
        <div class="container col-xxl-8 px-4 py-5">
          <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div class="mx-auto col-10 col-sm-8 col-lg-6">
              <img
                src={Ghost}
                class="d-block mx-lg-auto  img-fluid"
                alt="Bootstrap Themes"
                width="500"
                height="300"
                loading="lazy"
              />
            </div>
            <div class="col-lg-6">
              <h1 class="display-5 fw-bold lh-1 mb-3">ERROR 404</h1>
              <h2 class="display-5  lh-1 mb-3">Not Found x_x</h2>
              <p class="lead">
                Either this section doesn't exists or is currently under
                construction. If you need help{" "}
                <Link to={"/ContactUs"} className="navbar-brand lh-1 fw-bold">
                  {" "}
                  Contact Us
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Catch;
