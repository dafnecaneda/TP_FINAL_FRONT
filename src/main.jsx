import React from "react";
import ReactDOM from "react-dom/client";
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./public/css/index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { YourPets } from "./components/YourPets";
import { SearchPet } from "./components/SearchPet";
import AddPet from "./components/AddPet";
import { Mr } from "./components/Mr";
import { SearchMr } from "./components/SearchMr";
import AddMr from "./components/AddMr";
import Signedup from "./components/Signedup";
import IndexPet from "./components/IndexPet";
import IndexMr from "./components/IndexMr";
import UserPatch from "./components/userPatch";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/signedup" element={<Signedup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Patch" element={<UserPatch />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/YourPets" element={<YourPets />}>
          <Route index element={<IndexPet />}></Route>
          <Route path=":invoiceNumber" element={<SearchPet />}></Route>
          <Route path="AddPet" element={<AddPet />}></Route>
        </Route>
        <Route path="/YourMr" element={<Mr />}>
          <Route index element={<IndexMr />}></Route>
          <Route path=":invoiceNumber" element={<SearchMr />}></Route>
          <Route path="AddMr" element={<AddMr />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
