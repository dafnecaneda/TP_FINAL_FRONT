import React from "react";
import Logo from "../public/imgs/navbar/logo.png";
import { Link } from "react-router-dom";
export const Navbar = () => {
  let user = localStorage.getItem("token");
  console.warn(user);
  return (
    <>
      {localStorage.getItem("token") ? (
        <nav className="mt-4 navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {" "}
              <img src={Logo} width="50px" height="50px" alt="Logo" />{" "}
              <a className="navbar-brand" href="/">
                {" "}
                PetStorage
              </a>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to={"/Login"}
                    className="nav-link navlink text-primary active"
                    aria-current="page"
                    href="login"
                  >
                    Logout
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/YourPets"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="yourpets"
                  >
                    Pets
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"YourMr"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="mr"
                  >
                    Medical Records
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    title={user}
                    to={"/"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="mr"
                  >
                    Name: {user}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <nav className="mt-4 navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              {" "}
              <img src={Logo} width="50px" height="50px" alt="Logo" />{" "}
              <a className="navbar-brand" href="/">
                {" "}
                PetStorage
              </a>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    to={"/Login"}
                    className="nav-link navlink text-primary active"
                    aria-current="page"
                    href="login"
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/Signup"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="signup"
                  >
                    Signup
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"/"}
                    className="nav-link navlink"
                    aria-current="page"
                    href=""
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to={"YourMr"}
                    className="nav-link navlink"
                    aria-current="page"
                    href="mr"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </>
  );
};
