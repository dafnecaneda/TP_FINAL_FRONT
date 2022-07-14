import React, { useEffect, useState } from "react";
import Delete from "../../public/imgs/icons/delete.png";
import Download from "../../public/imgs/icons/download.png";
import Edit from "../../public/imgs/icons/edit.png";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import "../../public/css/index.css";
export const SearchMr = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMr, setSearchMr] = useState([]);
  let user = sessionStorage.getItem("token");
  useEffect(() => {
    fetch("https://apipetstorage.herokuapp.com/mr", {
      method: "GET",
      headers: {
        Authorization: user,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSearchMr(data));
  }, []);
  const deleteMr = async (param) => {
    await fetch(`https://apipetstorage.herokuapp.com/mr/${param}`, {
      method: "DELETE",
      headers: {
        Authorization: user,
        "Content-Type": "application/json",
      },
    });
    navigate("/YourMr/SearchMr");
  };
  console.log(searchMr);
  return (
    <>
      <div className="container-fluid pb-3">
        <header className="py-3 mb-3 border-bottom">
          <div
            className="container-fluid d-grid gap-3 align-items-center"
            sx={{ gridTemplateColumns: "1fr 2fr" }}
          >
            <div className="d-flex align-items-center">
              <form className="w-100 me-3" role="search">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search by User ID..."
                  aria-label="Search"
                  onChange={(e) => {
                    let userid = e.target.value;
                    setSearchParams({ userid });
                  }}
                />
              </form>
              <div className="flex-shrink-0">
                <button
                  type="button"
                  className="formbtn color-9 btn btn-primary btn-sm px-4 rounded- gap-3"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-5 mb-5 bg-light border rounded-3">
          <div className="row text-center justify-content-center">
            <h4 className="m-4 fw-bold lh-1">Pet Search results:</h4>
            {searchMr
              .filter((param) => {
                const userid = searchParams.get("userid");
                if (!userid) return true;
                else {
                  const stringID = String(userid);
                  const postID = String(param.userid);
                  return postID.startsWith(stringID);
                }
              })
              .slice(0, 5)
              .map((e) => {
                return (
                  <>
                    <div className="col-xl-3 col-sm-6 m-5">
                      <div className="bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                        <h5 className=" text-primary fw-bold">{e.field}</h5>
                        <span className="text-uppercase ">
                          USER ID: # {e.userid}
                        </span>
                        <p className="text-center">{e.report}</p>
                        <span className="text-uppercase list-inline-item text-muted">
                          MR ID: # {e.id}
                        </span>
                        <ul className="social mb-0 list-inline mt-3">
                          {/* <li className="list-inline-item">
                            <a href="#" className="social-link">
                              <img
                                src={Edit}
                                alt=""
                                width="50"
                                height="50"
                                className="img-fluid "
                              />
                            </a>
                          </li>
                          <li className="list-inline-item">
                            <a href="#" className="social-link">
                              <img
                                src={Download}
                                alt=""
                                width="50"
                                height="50"
                                className="img-fluid "
                              />
                            </a>
                          </li> */}
                          <li className="list-inline-item">
                            <Link
                              className="navbar-brand list-inline-item"
                              onClick={() => deleteMr(e.id)}
                              to={"/YourMr"}
                            >
                              <img
                                src={Delete}
                                alt=""
                                width="50"
                                height="50"
                                className="img-fluid "
                              />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end of card */}
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
