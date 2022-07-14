import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Warning from "../../public/imgs/icons/warning.png";
import Cat from "../../public/imgs/add/cat.png";
import { useNavigate } from "react-router";

const AddPet = () => {
  const navigate = useNavigate();
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
      const NewPet = { ...values };
      let user = sessionStorage.getItem("token");
      let result = await fetch("https://apipetstorage.herokuapp.com/pets/", {
        method: "POST",
        headers: {
          Authorization: user,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(NewPet),
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
    <main className="container-fluid mb-5 pb-3">
      <div className="container bg-light card border rounded-3">
        <div className="row justify-content-center mt-5">
          <form
            className="col-10 col-sm-8 col-md-6 lg-4"
            onSubmit={formik.handleSubmit}
          >
            <label className="form-label lh-1 fw-bold" htmlFor="name">
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

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="lastName">
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
                <div className="ms-2">{formik.errors.lastName}</div>
              </div>
            )}

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="type">
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

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="breed">
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
                <div className="ms-2">{formik.errors.breed}</div>
              </div>
            )}

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="gender">
              Gender{" "}
            </label>
            <div class="input-group mb-3 ">
              <div class="input-group-prepend">
                <label class="input-group-text" for="inputGroupSelect01">
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
                <div className="ms-2">{formik.errors.gender}</div>
              </div>
            )}

            <label className="lh-1 fw-bold mt-4 form-label" htmlFor="age">
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

            <div class="mb-3">
              <label for="formFileSm" className="mt-4 lh-1 fw-bold form-label">
                Select a picture of your Pet{" "}
              </label>
              <input
                className="form-control form-control-sm"
                id="filename"
                type="file"
                name="filename"
                {...formik.getFieldProps("filename")}
              />
            </div>
            {formik.touched.file && formik.errors.file && (
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
                <div className="ms-2">{formik.errors.file}</div>
              </div>
            )}

            <div className="text-center font-monospace mb-4 fw-bold p-2 lh-1">
              {sessionStorage.getItem("petMsg")}
            </div>

            <button
              type="submit"
              className="formbtn mt-4 color-9 form-btn rounded- btn mb-3 btn-primary"
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

export default AddPet;
