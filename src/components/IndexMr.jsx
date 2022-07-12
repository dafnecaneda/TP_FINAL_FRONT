import React from "react";

const IndexMr = () => {
  let userID = localStorage.getItem("userId");
  let userName = localStorage.getItem("userName");
  return (
    <>
      <section className="">
        <div className=" container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card-body ">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 mb-5  border-2 border-lg-1">
                    <div className="bg-primary text-center m- card bg-opacity-10 rounded  py-5 px-4">
                      <h5 className="fw-bold text-uppercase text-primary mb-4">
                        Hello {userName} !
                      </h5>
                      <span className="   font-monospace text-muted">
                        Please use your ID : {userID} to acces your Pets Medical
                        Records.
                      </span>
                    </div>
                    <div className="text-center"></div>
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

export default IndexMr;
