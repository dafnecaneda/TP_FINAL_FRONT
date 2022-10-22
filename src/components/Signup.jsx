import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Warning from "../public/imgs/icons/warning.png";
import Image from "../public/imgs/signup/su.png";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router";
import "../public/css/index.css";
const Signup = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  let tokenSu = null;
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(15, "Your answer must be 15 characters or less")
        .required("Please provide your First Name.")
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      lastName: yup
        .string()
        .max(15, "Your answer must be 15 characters or less")
        .required("Please provide your Last Name.")
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      email: yup
        .string()
        .email("Field should contain a valid e-mail")
        .max(255)
        .required("E-mail is required"),
      password: yup
        .string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])[A-Za-z\d]{8,}$/,
          "Must Contain 8 Characters and must include, One Uppercase, One Lowercase, One Number."
        ),
    }),
    onSubmit: async (values) => {
      const NewUser = { ...values };
      let result = await fetch("https://apipetstorage.herokuapp.com/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(NewUser),
      });
      result = await result.json().then(setToken(result.JWT));
      let userName = [result.name, result.lastName];
      let Message = [result.msg];
      let userId = [result.userid];
      let userEmail = [result.email];
      let tokenSu = result.JWT;
      console.log(result);
      console.log(tokenSu);
      sessionStorage.setItem("token", tokenSu);
      sessionStorage.setItem("userName", userName);
      sessionStorage.setItem("userId", userId);
      sessionStorage.setItem("userEmail", userEmail);
      sessionStorage.setItem("Message", Message);
      navigate("/userAccount");
    },
  });

  return (
    <>
      <Navbar />
      <section className="bg1">
        <div className=" container  h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="mb-5 mt-5 rounded-4 card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="lh-1 text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className=" form-control"
                              id="name"
                              type="text"
                              name="name"
                              {...formik.getFieldProps("name")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Name
                            </label>
                            {formik.touched.name && formik.errors.name && (
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
                                <div className="ms-2">{formik.errors.name}</div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className=" form-control"
                              id="lastName"
                              type="text"
                              name="lastName"
                              {...formik.getFieldProps("lastName")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                            >
                              Your Last Name
                            </label>
                            {formik.touched.lastName && formik.errors.lastName && (
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
                                  {formik.errors.lastName}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

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

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              className=" form-control"
                              id="password"
                              type="password"
                              name="password"
                              {...formik.getFieldProps("password")}
                            />
                            <label
                              className="form-label"
                              htmlFor="form3Example4c"
                            >
                              Password
                            </label>
                            {formik.touched.password && formik.errors.password && (
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
                                  {formik.errors.password}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="formbtn mt-4 color-9 form-btn  mb-3"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-4  d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={Image}
                        className="img-fluid d-block ms-5 mt-5"
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

export default Signup;
