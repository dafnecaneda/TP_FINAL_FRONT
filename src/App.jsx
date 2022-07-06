import React from "react";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { Navbar } from "./components/Navbar";
import Signup from "./components/Signup";
import { Home } from "./components/Home";
import { SearchPet } from "./components/SearchPet";
import HowTo from "./components/HowTo";
// import { SearchMr } from "./components/SearchMr"
// import  AddMr  from "./components/AddMr"
// import AddPet from "./components/AddPet"

function App() {
  return (
    <>
      <Navbar />
      <Home />

      <Footer />
    </>
  );
}

export default App;
