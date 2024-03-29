import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Image from "../../public/imgs/forgot/mail.png";
import Robot from "../../public/imgs/forgot/forgot.png";
import Warning from "../../public/imgs/icons/warning.png";
import { Navbar } from "../Navbar";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const ForgotPass = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
    }),
    onSubmit: async (values) => {
      const login_user = { ...values };
      let result = await fetch(
        "https://apipetstorage.herokuapp.com/users/forgot-password/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(login_user),
        }
      );
      result = await result.json().then(setToken(result.JWT));
      let tokenSu = result.JWT;
      let message = result.message;
      console.log(message);
      console.log(tokenSu);
      sessionStorage.setItem("token", tokenSu);
      sessionStorage.setItem("message", message);
    },
  });
  return (
    <>
      <Navbar />
      <section className="">
        <div className=" container vh-100 ">
          <div className="row d-flex justify-content-center  align-items-center">
            <div className="col-lg-12 vh-100 col-xl-11">
              <div className="card rounded-4 mb-5 mt-5 text-black">
                <div className="card-body  p-mb-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="lh-1 text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-5">
                        Forgot Password ?
                      </p>

                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className=" form-control"
                              id="email"
                              type="email"
                              name="email"
                              {...formik.getFieldProps("email")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example3c"
                            >
                              Your Email
                            </label>
                            {formik.touched.email && formik.errors.email && (
                              <div
                                className="alert alert-danger d-flex align-items-center m-2"
                                role="alert"
                              >
                                <img
                                  className="img-fluid "
                                  src={Warning}
                                  width="30"
                                  height="30"
                                  alt="Warning"
                                />
                                <div className="ms-2">
                                  {formik.errors.email}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center mb-4 fw-bold p-2 lh-1">
                          {sessionStorage.getItem("message")}
                        </div>

                        <div class="text-center">
                          <p>
                            Not a member? <Link to={"/signup"}>Register</Link>
                          </p>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="formbtn mt-4 color-9 form-btn rounded- btn mb-3 btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-4  d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={Robot}
                        className="img-fluid d-block mx-5 mt-5"
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
    </>
  );
};

export default ForgotPass;
