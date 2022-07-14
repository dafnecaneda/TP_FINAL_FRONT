import React from "react";
import ReactDOM from "react-dom/client";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { YourPets } from "./components/Pets/YourPets";
import { SearchPet } from "./components/Pets/SearchPet";
import AddPet from "./components/Pets/AddPet";
import { Mr } from "./components/Mr/Mr";
import { SearchMr } from "./components/Mr/SearchMr";
import AddMr from "./components/Mr/AddMr";
import UserAccount from "./components/User/UserAccount";
import IndexPet from "./components/Pets/IndexPet";
import IndexMr from "./components/Mr/IndexMr";
import UserPatch from "./components/User/UserPatch";
import ForgotPass from "./components/User/ForgotPass";
import Catch from "./components/Catch";
import PetPatch from "./components/Pets/PetPatch";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/userAccount" element={<UserAccount />}></Route>
        <Route path="/forgotPass" element={<ForgotPass />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Patch" element={<UserPatch />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/YourPets" element={<YourPets />}>
          <Route index element={<IndexPet />}></Route>
          <Route path=":invoiceNumber" element={<SearchPet />}></Route>
          <Route path="AddPet" element={<AddPet />}></Route>
        </Route>
        <Route path="PetPatch" element={<PetPatch />}></Route>
        <Route path="/YourMr" element={<Mr />}>
          <Route index element={<IndexMr />}></Route>
          <Route path=":invoiceNumber" element={<SearchMr />}></Route>
          <Route path="AddMr" element={<AddMr />}></Route>
        </Route>
        <Route path="*" element={<Catch />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
