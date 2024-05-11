import React from "react";
import chinesefood from "../../src/assests/images/chinesefood.jpg"
import southfood from "../../src/assests/images/southfood.jpg"
import northfood from "../../src/assests/images/northfood.jpg"
import {Link} from "react-router-dom"




export default function Card() {
    return (
  <div>
      <div class="container mt-5">
        <h1>WHAT'S ON YOUR MIND?</h1>
    <div class="row">
      <div class="col-md-4">
        <div class="image-container">
          <img src={chinesefood} alt="Image 1" class="img-fluid rounded"/>
          <div class="text-container">
            <p>
            <Link to="/chinesefood" className="image-container"> <h3>CHINESE</h3></Link>
              <h6>The Land Of Spices.</h6>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={southfood} alt="Image 2" class="img-fluid rounded"/>
          <div class="text-container">
            <p>
            <Link to="/southfood" className="image-container"> <h3>SOUTH INDIAN</h3></Link>
              <h6>The Essence Of Delicious India.</h6>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={northfood} alt="Image 3" class="img-fluid rounded"/>
          <div class="text-container">
            <p>
            <Link to="/northfood" className="image-container"> <h3>NORTH INDIAN</h3></Link>
              <h6>The Heart Of Incredible India.</h6>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
    //  </div>
  
    );
  }
  

