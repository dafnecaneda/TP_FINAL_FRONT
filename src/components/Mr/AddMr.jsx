import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Warning from "../../public/imgs/icons/warning.png";
import Cat from "../../public/imgs/add/cat.png";
import { useNavigate } from "react-router";
import "../../public/css/index.css";
const AddMr = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      field: "",
      report: "",
    },
    validationSchema: yup.object({
      field: yup
        .string()
        .max(15, "Must be 30 characters or less")
        .required("Please specify the field of the medical report."),
      report: yup
        .string()
        .max(500, "Must be 500 characters or less")
        .required("Please provide details of the results."),
    }),
    onSubmit: async (values) => {
      const NewMR = { ...values };
      let user = sessionStorage.getItem("token");
      let result = await fetch("https://apipetstorage.herokuapp.com/mr/", {
        method: "POST",
        headers: {
          Authorization: user,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(NewMR),
      });
      result = await result.json();
      let msg = [result.message];
      console.log(result);
      sessionStorage.setItem("msg", msg);
      // navigate("/YourPets");
    },
  });
  return (
    <main className="container-fluid mb-5 pb-3">
      <div className="container bg-light card border rounded-3">
        <div className="row justify-content-center mt-5">
          <form
            className="col-10 col-sm-8 col-md-6 lg-4"
            onSubmit={formik.handleSubmit}
          >
            <label className="form-label lh-1 fw-bold" htmlFor="field">
              Field{" "}
            </label>
            <input
              className=" form-control"
              id="field"
              type="field"
              name="field"
              {...formik.getFieldProps("field")}
            />
            {formik.touched.field && formik.errors.field && (
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
                <div className="ms-2">{formik.errors.field}</div>
              </div>
            )}

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="report">
              Report{" "}
            </label>
            <textarea
              className="form-control"
              id="report"
              type="report"
              name="report"
              rows="3"
              {...formik.getFieldProps("report")}
            />
            {formik.touched.report && formik.errors.report && (
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
                <div className="ms-2">{formik.errors.report}</div>
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="formFileSm" className="mt-4 form-label">
                You may include an Image of the Report
              </label>
              <input
                className="form-control form-control-sm"
                id="filename"
                type="file"
                name="filename"
              />
            </div>
            <div className="text-center mb-4 fw-bold p-2 lh-1">
              {sessionStorage.getItem("msg")}
            </div>
            <button
              type="submit"
              className="formbtn color-9 form-btn rounded- btn mb-3 btn-primary"
            >
              Submit
            </button>
            <div className="  d-flex align-items-end flex-column  ">
              {" "}
              <img className="cat " src={Cat} width="180" height="140" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default AddMr;
