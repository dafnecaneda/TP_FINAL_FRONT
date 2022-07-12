import React from "react";
import Image from "../public/imgs/signup/sdu.png";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
const Signedup = () => {
  let userID = localStorage.getItem("userId");
  return (
    <>
      <Navbar />
      <div class="bg1 px-4 py-5 mt-5 text-center">
        <img
          class="dog d-block mx-auto mb-4"
          src={Image}
          alt=""
          width="490"
          height="400"
        />
        <h1 class="display-5 lh-1 fw-bold">Your Account</h1>
        <div class="col-lg-6 mx-auto">
          <p class="font-monospace mt-5 mb-4">
            In this section you can Modify you account information like, Name,
            Last Name, Email, and Reset your password.
          </p>
          <h5 class="fw-bold mb-4 lh-1 text-primary">
            {" "}
            <a class="text-decoration-none" href="/">
              {" "}
              Have all your Pets files in one App.
            </a>
          </h5>
          <div class="d-grid gap-2 d-sm-flex justify-content-center">
            <button
              type="button"
              class="btn-hover color-9  btn-primary fw-bold btn-lg px-4 gap-3"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signedup;
