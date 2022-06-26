import React from 'react'
import Dog from '../public/imgs/home/dumbodog.png'
export const Home = () => {
  return (
    <>
    
  <div class="px-4 py-5 my-5 text-center">
    <img class="dog d-block mx-auto mb-4" src={Dog} alt="" width="700" height="450"/>
    <h1 class="display-5 lh-1 fw-bold">Tired of loosing track of your Pet's Clinical Records?</h1>
    <div class="col-lg-6 mx-auto">
      <p class="lead mb-4">If you own more than one pet and/ or your pet is going under vet studies, you will love this App! 
      We offer a platform connected to our DataBase to keep your Pets medical records organized</p>
      <h5 class="fw-bold mb-4 lh-1 text-primary" > <a class="text-decoration-none" href='/'> Don't panick ! Get immediate care with PetAmbulance.</a></h5>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button type="button" class="homebtn btn btn-primary btn-rounded  btn-lg px-4 gap-3">Sign Up</button>

      </div>
    </div>
  </div>

    </>
  )
}
