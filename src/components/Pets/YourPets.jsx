import React from "react";
import HeaderImage from "../../public/imgs/searchpet/searchpet.png";
import { Link, Outlet } from "react-router-dom";
import { Navbar } from "../Navbar";
import Footer from "../Footer";

export const YourPets = () => {
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
            height="250"
          />
          <h2 className="lh-1 fw-bold 3">YOUR PETS</h2>
          <p className="lead">
            Here you can Add, Search, and Delete your Pets information.
          </p>
          <button className="btn-hover color-9">
            <Link to={"SearchPet"} className="text-decoration-none text-white">
              Search Pet
            </Link>
          </button>
          <button className="btn-hover color-9">
            <Link to={"AddPet"} className="text-decoration-none text-white">
              Add Pet
            </Link>
          </button>
        </div>
        <Outlet></Outlet>
      </div>

      <Footer />
    </>
  );
};
