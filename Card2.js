import React from 'react'
import ff from "../../src/assests/images/ff.jpg"

export default function Card2() {
  return (
    <div>
     
      <div>
      <div class="container mt-5">
      <h1>STILL CONFUSED?</h1>
      <h6>Don't worry we have some suggestions for you.</h6>
  <div class="card mt-3" style={{"width": "18rem"}}>
    <div class="card-body">
      {/* <!-- Parent container to control the image size --> */}
      <div class="card-img-container">
        <img src={ff} class="card-img-top img-fluid" alt="Card Image"/>
      </div>
      <h5 class="card-title">The Taste Of India</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
      <div classNameName="container w-100">
              <select classNameName="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              <select classNameName="m-2 h-100 bg-success rounded">
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div classNameName="d-inline h-100 fs-5 ">Total Price</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </div>
  )
}
