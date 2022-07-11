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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/signedup" element={<Signedup />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/SignUp" element={<Signup />}></Route>
        <Route path="/YourPets" element={<YourPets />}>
          <Route path=":invoiceNumber" element={<SearchPet />}></Route>
          <Route path="AddPet" element={<AddPet />}></Route>
        </Route>
        <Route path="/YourMr" element={<Mr />}>
          <Route path=":invoiceNumber" element={<SearchMr />}></Route>
          <Route path="AddMr" element={<AddMr />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
