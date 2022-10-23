import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";
import contactgirl from "../public/imgs/contactus/contactus.png";

const ContactUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg1">
        <div className="container col-xl-10 col-xxl-8 px-4 py-5">
          <div className="row align-items-center g-lg-5 py-5">
            <div className="col-lg-7 text-center text-lg-start">
              <h1 className="display-4 fw-bold lh-1 mb-3">Contact Us</h1>
              <p className="col-lg-10 fs-4">
                Please fill up the form with as many details as possible about
                your consultation, and our help team will get back to you
                shortly.
              </p>
              <img
                src={contactgirl}
                className="img-fluid d-block m-5"
                alt="Contact Girl Image"
              />
            </div>

            <div className="col-md-10 mx-auto col-lg-5">
              <form className=" card card-body p-4 p-md-5 border rounded-4 ">
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-5">
                  <div>
                    <label
                      className=" lh-1 fw-bold form-label"
                      htmlFor="report"
                    >
                      Consultation
                    </label>
                  </div>
                  <textarea className="form-control" id="floatingInput" />
                </div>
                <div className="d-flex justify-content-center  ">
                  <button className=" formbtn color-9 form-btn " type="submit">
                    Send
                  </button>
                </div>
                {/* <hr class="my-4" />
              <small class="text-muted">
                By clicking Send, you agree to the terms of use.
              </small> */}
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
