import React from 'react'
import Logo from "../public/imgs/navbar/logo.png"
export const Navbar = () => {
  return (
  <>
   <nav className="mt-4 navbar navbar-expand-lg navbar-light" >
     <div className="container-fluid"> 
      <a className="navbar-brand" href="/"> <img src={Logo} width="50px" height="50px" alt="Logo"/>  <a className="navbar-brand" href="/"> PetStorage</a></a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>     
       <div className="collapse navbar-collapse" id="navbarTogglerDemo02">  
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <a className="nav-link navlink text-primary active" aria-current="page" href="login">Login</a>
           </li>
            <li className="nav-item">
             <a className="nav-link navlink" aria-current="page" href="signup">Sign Up</a>
           </li>
            <li className="nav-item">
             <a className="nav-link navlink" aria-current="page" href="products">About Us</a>
           </li>
           <li className="nav-item">
             <a className="nav-link navlink" aria-current="page" href="products">Contact Us</a>
           </li>
            <li className="nav-item">
             <a className="nav-link navlink" aria-current="page" href="/">Home</a>
           </li>
         </ul>
       </div>
     </div>
   </nav>
   </>
  )
}
