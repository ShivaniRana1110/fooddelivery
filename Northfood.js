import React from "react";
import ff from "../../src/assests/images/ff.jpg"
import fl from "../../src/assests/images/fl.jpg"
import fi from "../../src/assests/images/fi.jpg"
import {Link} from "react-router-dom"
export default function northfood() {
    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/northfood",{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        }});}
    return (
        <div>
            <div>
      <div class="container mt-5">
        <h1>NORTH INDIAN</h1>
        <h3>The Heart Of Incredible India.</h3>
    <div class="row">
      <div class="col-md-4">
        <div class="image-container">
          <img src={fl} alt="Image 1" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/tasteofindia" className="image-container"> <h3>Taste Of India</h3></Link>
             
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={fi} alt="Image 2" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/foodies" className="image-container"> <h3>Foodies</h3></Link>
              {/* <h6>The Essence Of Delicious India.</h6> */}
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="image-container">
          <img src={ff} alt="Image 3" class="img-fluid"/>
          <div class="text-container">
            <p>
            <Link to="/chefsbestfriend" className="image-container"> <h3>Chef 's Best Friend</h3></Link>
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
