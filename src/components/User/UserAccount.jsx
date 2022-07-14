import React from "react";
import Image from "../../public/imgs/user/ya.png";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { Navbar } from "../Navbar";
import Delete from "../../public/imgs/icons/delete.png";
import Edit from "../../public/imgs/icons/edit.png";
const UserAccount = () => {
  let userID = sessionStorage.getItem("userId");
  let userName = sessionStorage.getItem("userName");
  let userEmail = sessionStorage.getItem("userEmail");
  let Message = sessionStorage.getItem("Message");
  return (
    <>
      <Navbar />
      <div class="bg1 px-4 py-5 mt-5 text-center">
        <img
          class="Yaf d-block mx-auto mb-4"
          src={Image}
          alt=""
          width="380"
          height="330"
        />
        <h1 class="display-5 lh-1 fw-bold">Hello {userName} ! </h1>
        <div class="col-lg-6 text-center mx-auto">
          <h3 class="font-monospace fw-bold  mt-5 ">{Message}</h3>
          <p class="font-monospace mt-5 mb-4">
            Here you can check your Account Setting and modify as needed.
          </p>
          <div className="d-flex mt-5  justify-content-center text-center">
            <div className="bg-primary card  bg-opacity-10 rounded  py-5 px-4">
              <h5 class="fw-bold text-center d-flex justify-content-center  mb-4 lh-1 text-primary">
                Your information:
              </h5>

              <ul className="navbar-nav mb-2">
                <li className="font-monospace fw-bold mb-3">
                  User ID : # {userID}
                </li>
                <li className="font-monospace fw-bold mb-3">
                  Name: {userName}
                </li>
                <li className="font-monospace fw-bold ">Email : {userEmail}</li>
              </ul>
              <ul className="social mb-0 list-inline mt-3">
                <li className="list-inline-item">
                  <Link to={"/Patch"} className="social-link">
                    <img
                      src={Edit}
                      alt=""
                      width="50"
                      height="50"
                      className="img-fluid "
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" m-5">
          <button className="btn-hover color-9">
            <Link
              to={"/YourPets/AddPet"}
              className="text-decoration-none text-white"
            >
              Add Pet
            </Link>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserAccount;
