import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Warning from "../../public/imgs/icons/warning.png";
import Image from "../../public/imgs/patch/pet.png";

import { useNavigate } from "react-router";
import { Navbar } from "../Navbar";

const PetPatch = () => {
  const navigate = useNavigate();

  let userToken = sessionStorage.getItem("token");

  const PetId = Number(sessionStorage.getItem("petId"));
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      type: "",
      breed: "",
      gender: "",
      age: "",
      file: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .max(15, "Your answer must be 15 characters or less")
        .required("Please provide your Pet's Name.")
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      lastName: yup
        .string()
        .max(15, "Your answer must be 15 characters or less")
        .required("Please provide the Pet Owner Last Name.")
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      type: yup
        .string()
        .max(15, "Your answer must be 15 characters or less")
        .required(
          "What type of Pet do you have? Example: Dog, Cat, Ferret, Rabbit, Parrot, Turtle, etc."
        )
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      breed: yup
        .string()
        .max(50, "Your answer must be 50 characters or less")
        .required(
          "What kind of Breed is your Pet? Example: Mixed, Persian, Labrador, Schnauzer, etc"
        )
        .matches(
          /^[aA-zZ\s]+$/,
          "Only alphabet letters are allowed for this field. "
        ),
      gender: yup.string().required("Please select the gender of your Pet."),
      age: yup
        .number()
        .required(
          " Only numbers accepted on this input. If your pet is not a year old yet you can put the number 0."
        ),
    }),
    onSubmit: async (values) => {
      const patch_pet = { ...values };
      let result = await fetch(`https://apipetstorage.herokuapp.com/${PetId}`, {
        method: "PATCH",
        headers: {
          Authorization: userToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(patch_pet),
      });
      result = await result.json();
      const petId = [result.id];
      const petMsg = [result.message];
      console.log(result);
      sessionStorage.setItem("petMsg", petMsg);
      sessionStorage.setItem("petId", petId);
    },
  });
  return (
    <>
      <Navbar />
      <section>
        <div className=" container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="mb-5 mt-5 rounded-4 card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="lh-1 text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Modify Pet Info.
                      </p>
                      <form
                        className="mx-1 mx-md-4"
                        onSubmit={formik.handleSubmit}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="form-label lh-1 fw-bold"
                              htmlFor="name"
                            >
                              Name{" "}
                            </label>
                            <input
                              className=" form-control"
                              id="name"
                              type="name"
                              name="name"
                              {...formik.getFieldProps("name")}
                            />
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
                            <label
                              className="lh-1 fw-bold mt-4 form-label"
                              htmlFor="lastName"
                            >
                              Last Name{" "}
                            </label>
                            <input
                              className="form-control"
                              id="lastName"
                              type="lastName"
                              name="lastName"
                              {...formik.getFieldProps("lastName")}
                            />
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
                            <label
                              className="lh-1 fw-bold mt-4 form-label"
                              htmlFor="type"
                            >
                              Type{" "}
                            </label>
                            <input
                              className="form-control"
                              id="type"
                              type="text"
                              name="type"
                              {...formik.getFieldProps("type")}
                            />
                            {formik.touched.type && formik.errors.type && (
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
                                <div className="ms-2">{formik.errors.type}</div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="lh-1 fw-bold mt-4 form-label"
                              htmlFor="breed"
                            >
                              Breed{" "}
                            </label>
                            <input
                              className="form-control"
                              id="breed"
                              type="text"
                              name="breed"
                              {...formik.getFieldProps("breed")}
                            />
                            {formik.touched.breed && formik.errors.breed && (
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
                                  {formik.errors.breed}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="lh-1 fw-bold mt-4 form-label"
                              htmlFor="gender"
                            >
                              Gender{" "}
                            </label>
                            <div class="input-group mb-3 ">
                              <div class="input-group-prepend">
                                <label
                                  class="input-group-text"
                                  for="inputGroupSelect01"
                                >
                                  Options
                                </label>
                              </div>
                              <select
                                class="custom-select rounded-3"
                                id="gender"
                                name="gender"
                                {...formik.getFieldProps("gender")}
                              >
                                <option selected>Choose...</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                              </select>
                            </div>
                            {formik.touched.gender && formik.errors.gender && (
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
                                  {formik.errors.gender}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label
                              className="lh-1 fw-bold mt-4 form-label"
                              htmlFor="age"
                            >
                              Age{" "}
                            </label>
                            <input
                              className="form-control"
                              id="age"
                              type="number"
                              name="age"
                              {...formik.getFieldProps("age")}
                            />
                            {formik.touched.age && formik.errors.age && (
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
                                <div className="ms-2">{formik.errors.age}</div>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="text-center mb-4 fw-bold p-2 lh-1">
                          {sessionStorage.getItem("petMsg")}
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
                            className="formbtn mt-4 color-9 form-btn rounded- btn mb-3 btn-primary"
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-4  d-flex align-items-center order-1 order-lg-2">
                      <img
                        src={Image}
                        width="350"
                        height="350"
                        className="img-fluid d-block  mt-5"
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

export default PetPatch;
