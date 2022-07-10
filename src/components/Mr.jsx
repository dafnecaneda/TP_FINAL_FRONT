import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import HeaderImage from "../public/imgs/mr/mr.png";

export const Mr = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="py-5 text-center">
          <img
            className="d-block mx-auto mb-4"
            src={HeaderImage}
            alt=""
            width="290"
            height="330"
          />
          <h2 className="lh-1 fw-bold">MEDICAL RECORDS</h2>
          <p className="lead">
            Here you can Add and Search for the Records of your Pet.
          </p>
          <button className="btn-hover color-9">
            <Link to={"SearchMr"} className="text-decoration-none text-white">
              Search MR
            </Link>
          </button>
          <button className="btn-hover color-9">
            <Link to={"AddMr"} className="text-decoration-none text-white">
              Add MR
            </Link>
          </button>
        </div>
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};
