import React from "react";
import YT from "../public/imgs/footer/youtube.png";
import FB from "../public/imgs/footer/facebook.png";
import IG from "../public/imgs/footer/instagram.png";
import WU from "../public/imgs/footer/whatsapp.png";
import DOG from "../public/imgs/footer/dogfooter.webp";
import Logo from "../public/imgs/navbar/logo.png";
const Footer = () => {
  return (
    <>
      <footer class="section2">
        <div class="container">
          <div class="row text-center d-flex justify-content-center pt-5 mb-3">
            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase fw-bold">
                <a class="nav-link a" href="products">
                  About Us
                </a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase pb-2 fw-bold">
                <a class="nav-link a" href="contactUs">
                  Contact Us
                </a>
              </h6>
            </div>

            <div class="col-md-2 mb-3">
              <h6 class="text-uppercase fw-bold">
                <a class="nav-link a" href="contactUs">
                  Home
                </a>
              </h6>
            </div>
          </div>

          <div class="row pb-3">
            <div class="col-md-12">
              <div class="row text-center d-flex justify-content-center mb-3">
                <div class="col-md-2 mb-3">
                  <a
                    class="navbar-brand"
                    href="http://facebook.com"
                    target="_blank"
                  >
                    <img
                      src={FB}
                      class=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="facebook icon"
                    />
                  </a>
                </div>

                <div class="col-md-2 mb-3">
                  <a
                    class="navbar-brand"
                    href="http://youtube.com"
                    target="_blank"
                  >
                    <img
                      src={YT}
                      class=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="youtube icon"
                    />
                  </a>
                </div>

                <div class="col-md-2 mb-3">
                  <a
                    class="navbar-brand"
                    href="http://whatsapp.com"
                    target="_blank"
                  >
                    <img
                      src={WU}
                      class=" img-fluid media-object"
                      width="40px"
                      height="40px"
                      alt="whatsapp icon"
                    />
                  </a>
                </div>

                <div class="col-md-2 mb-3">
                  <a
                    class="navbar-brand"
                    href="http://instagram.com"
                    target="_blank"
                  >
                    <img
                      src={IG}
                      class=" img-fluid media-object"
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

        <div class="footer-copyright text-center ">
          {" "}
          <p>PetStorage© 2022 Copyright</p>{" "}
        </div>

        <div class="footer-copyright text-center">
          <a
            class="navbar-brand a fw-bold"
            href="/images/cv/dafne-caneda-resume.pdf"
          >
            by Dafne Caneda 2022
          </a>
        </div>

        <img
          src={DOG}
          width="500px"
          height="500px"
          class="img-fluid mx-auto d-block pt-3"
          alt="cat"
        />
      </footer>
    </>
  );
};

export default Footer;
