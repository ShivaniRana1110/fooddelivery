import React from "react";
import fa from "../../src/assests/images/fa.jpg"
import fb from "../../src/assests/images/fb.jpg"
import fc from "../../src/assests/images/fc.jpg"
import fd from "../../src/assests/images/fd.jpg"

import {Link} from "react-router-dom"
export default function chinesefood() {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/chinesefood",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }});}
    return (
        <div>
            <div>
      <div class="container mt-5">
        <h1>CHINESE</h1>
        <h3>The Land Of Spices.</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="image-container">
          <img src={fa} alt="Image 1" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/theflavourfactory" className="image-container"> <h3>The Flavour Factory</h3></Link>
              {/* <h6>The Land Of Spices.</h6> */}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={fb} alt="Image 2" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/tasteofindia" className="image-container"> <h3>Taste Of India</h3></Link>
              {/* <h6>The Essence Of Delicious India.</h6> */}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={fc} alt="Image 3" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/foodfusion" className="image-container"> <h3>Food Fusion</h3></Link>
              {/* <h6>The Heart Of Incredible India.</h6> */}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  
        </div>
    );
}