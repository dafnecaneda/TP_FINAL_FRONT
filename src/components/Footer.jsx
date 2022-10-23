import React from "react";
import YT from "../public/imgs/footer/youtube.png";
import FB from "../public/imgs/footer/facebook.png";
import IG from "../public/imgs/footer/instagram.png";
import WU from "../public/imgs/footer/whatsapp.png";
import DOG from "../public/imgs/footer/dogfooter.webp";
import Logo from "../public/imgs/navbar/logo.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="section2">
        <div className="container">
          <div className="row text-center d-flex justify-content-center pt-5 ">
            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase fw-bold">
                <Link to={"/AboutUs"} className="nav-link a" href="products">
                  About Us
                </Link>
              </h6>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase pb-2 fw-bold">
                <Link to={"/ContactUs"} className="nav-link a" href="products">
                  Contact Us
                </Link>
              </h6>
            </div>

            <div className="col-md-2 mb-3">
              <h6 className="text-uppercase fw-bold">
                <Link to={"/"} className="nav-link a" href="products">
                  Home
                </Link>
              </h6>
            </div>
          </div>

          <div className="row pb-3">
            <div className="col-md-12">
              <div className="row text-center d-flex justify-content-center mb-3">
                <div className="col-md-2 mb-3">
                  <a
                    className="navbar-brand"
                    href="http://facebook.com"
                    target="_blank"
                  >
                    <img
                      src={FB}
                      className=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="facebook icon"
                    />
                  </a>
                </div>

                <div className="col-md-2 mb-3">
                  <a
                    className="navbar-brand"
                    href="http://youtube.com"
                    target="_blank"
                  >
                    <img
                      src={YT}
                      className=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="youtube icon"
                    />
                  </a>
                </div>

                <div className="col-md-2 mb-3">
                  <a
                    className="navbar-brand"
                    href="http://whatsapp.com"
                    target="_blank"
                  >
                    <img
                      src={WU}
                      className=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="whatsapp icon"
                    />
                  </a>
                </div>

                <div className="col-md-2 mb-3">
                  <a
                    className="navbar-brand"
                    href="http://instagram.com"
                    target="_blank"
                  >
                    <img
                      src={IG}
                      className=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="instagram icon"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-copyright text-center ">
          {" "}
          <p>PetStorage© 2022 Copyright</p>{" "}
        </div>

        <div className="footer-copyright text-center">
          <a
            className="navbar-brand a fw-bold"
            href="/images/cv/dafne-caneda-resume.pdf"
          >
            by Dafne Caneda 2022
          </a>
        </div>

        <img src={DOG} width="360px" className="mx-auto d-block" alt="dog" />
      </footer>
    </>
  );
};

export default Footer;
