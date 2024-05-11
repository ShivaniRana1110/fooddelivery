import React from "react";
import toprated from "../../src/assests/images/toprated.jpg"
import budget from "../../src/assests/images/budget.jpg"
import nearyou from "../../src/assests/images/nearyou.jpg"
import {Link} from "react-router-dom"


export default function Card() {
  return (
<div>
    <div class="container mt-5">
      <h1>WHAT ARE YOU LOOKING FOR?</h1>
  <div class="row">
    <div class="col-md-4">
      <div class="image-container">
        <img src={toprated} alt="Image 1" class="img-fluid rounded"/>
        <div class="text-container">
          
            {/* <h3>Top Rated Kitchen</h3> */}
            <Link to="/toprated" className="image-container"> <h3>Top Rated Kitchens</h3></Link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container">
        <img src={budget} alt="Image 2" class="img-fluid rounded"/>
        <div class="text-container">
          <Link to="/budget" className="image-container"> <h3>Budget Friendly Kitchens</h3></Link>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container">
        <img src={nearyou} alt="Image 3" class="img-fluid rounded"/>
        <div class="text-container">
          {/* <p>
            <h3>Nearest Kitchen</h3>
          </p> */}
          <Link to="/nearyou" className="image-container"> <h3>Nearest Kitchens</h3></Link>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

  //  </div>

  );
}
