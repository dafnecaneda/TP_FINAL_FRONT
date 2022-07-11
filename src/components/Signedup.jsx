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
      <section className="">
        <div className=" container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card rounded-4 mt-5 mb-5 card text-black">
                <div className="card-body ">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 m-5  order-2 order-lg-1">
                      <p className="lh-1 text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        You have created a new Account !
                      </p>
                      <div className="mb-5">
                        <div className="bg-primary text-center card bg-opacity-10 rounded  py-5 px-4">
                          <h5 className="fw-bold text-uppercase text-primary mb-0">
                            Your ID: {userID}
                          </h5>
                          <span className=" mt-3 mb-5 font-monospace text-muted">
                            Please save and keep this number somewhere handy,
                            you will need it to acces your pets data, and their
                            medical records.
                          </span>
                        </div>
                        <div className="text-center">
                          <button
                            type="button"
                            class="btn-hover color-9 mt-5 btn-primary "
                          >
                            <Link
                              to={"/YourPets/AddPet"}
                              className="text-decoration-none text-white"
                            >
                              Add first Pet
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-4  d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={Image}
                        className="img-fluid d-block mt-5"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signedup;
