import React from "react";
import one from "../public/imgs/howto/1.png";
import two from "../public/imgs/howto/2.png";
import three from "../public/imgs/howto/3.png";

const HowTo = () => {
  return (
    <div class="bg2  pt-3  pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 py-3">
        <h2 class="display-5 lh-1 fw-bold">Easy to Use !</h2>
        <p class="lead font-monospace fst-italic">
          Let's get you started with these easy steps.
        </p>
      </div>
      <div class="bg-body pb-5 mb-5 mx-auto howto">
        <h2 class="pt-5 pb-3 lh-1 fw-bold font-monospace">
          Register your Pets
        </h2>
        <h6 class="px-3 mb-4 font-monospace">
          After your had SignedUp/LoggedIn you first have to Add a Pet to your
          Account.
        </h6>
        <h6 class="font-monospace mb-4 px-3">
          When you complete the Registration of your Pet we will provide you an
          ID that will correspond to that Pet only.
        </h6>
        <img class="phone" src={two} width="400" height="700" />
        <img class="phone" src={one} width="400" height="700" />
        <img class="phone" src={three} width="400" height="700" />
      </div>
    </div>
  );
};

export default HowTo;
