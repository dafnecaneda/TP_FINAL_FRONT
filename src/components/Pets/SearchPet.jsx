import React, { useEffect, useState } from "react";
import Delete from "../../public/imgs/icons/delete.png";
import Add from "../../public/imgs/icons/add.png";
import Edit from "../../public/imgs/icons/edit.png";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
export const SearchPet = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchPet, setSearchPet] = useState([]);
  let user = sessionStorage.getItem("token");
  useEffect(() => {
    fetch("https://apipetstorage.herokuapp.com/pets", {
      method: "GET",
      headers: {
        Authorization: user,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setSearchPet(data));
  }, []);
  const deletePet = async (param) => {
    await fetch(`https://apipetstorage.herokuapp.com/pets/${param}`, {
      method: "DELETE",
      headers: {
        Authorization: user,
        "Content-Type": "application/json",
      },
    });
    navigate("/YourPets/SearchPet");
  };
  console.log(searchPet);
  return (
    <>
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
          {/* start of card */}

          {searchPet
            .filter((param) => {
              const userid = searchParams.get("userid");
              if (!userid) return true;
              else {
                const stringID = String(userid);
                const postID = String(param.userid);
                return postID.startsWith(stringID);
              }
            })
            .map((e) => {
              return (
                <>
                  <div className="col-xl-3 col-sm-6 m-5">
                    <div className="text-center  bg-primary cards bg-opacity-10 rounded  py-5 px-4">
                      {/* <img
                src="https://images.theconversation.com/files/466154/original/file-20220531-26-v4usft.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                alt=""
                width="200"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
                /> */}
                      <h5 className="d-flex align-items-center m-2 justify-content-center text-primary fw-bold">
                        {e.name} {e.lastName}
                      </h5>
                      <span className="d-flex fw-bold align-items-center m-2 justify-content-center text-uppercase  ">
                        USER ID: # {e.userid}
                      </span>
                      <span className="d-flex align-items-center justify-content-center m-2 text-uppercase">
                        PET ID: # {e.id}
                      </span>
                      <span className="d-flex align-items-center justify-content-center m-2 text-uppercase">
                        AGE : {e.age}
                      </span>
                      <span className="d-flex align-items-center justify-content-center m-2 text-uppercase  ">
                        Type : {e.type}
                      </span>
                      <span className="d-flex align-items-center justify-content-center m-2 text-uppercase  ">
                        breed : {e.breed}
                      </span>
                      <span className="d-flex align-items-center justify-content-center m-2 text-uppercase  ">
                        gender : {e.gender}
                      </span>
                      <ul className="social mb-0 list-inline mt-3">
                        {/* <li className="list-inline-item">
                          <Link
                            className="navbar-brand list-inline-item"
                            to={"/PetPatch"}
                          >
                            <img
                              src={Edit}
                              alt=""
                              width="50"
                              height="50"
                              className="img-fluid "
                            />
                          </Link>
                        </li> */}
                        <li className="list-inline-item">
                          <Link
                            className="navbar-brand list-inline-item"
                            to={"/YourMr/AddMr"}
                          >
                            <img
                              src={Add}
                              alt=""
                              width="50"
                              height="50"
                              className="img-fluid "
                            />
                          </Link>
                        </li>

                        <li className="list-inline-item">
                          <Link
                            className="navbar-brand list-inline-item"
                            onClick={() => deletePet(e.id)}
                            to={"/YourPets"}
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
                </>
              );
            })}

          {/* end of card */}
        </div>
      </div>
    </>
  );
};
