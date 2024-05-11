import React from 'react'

import coffee from "../../src/assests/images/coffee.jpg"
import curry from "../../src/assests/images/curry.jpg"
import kadirice from "../../src/assests/images/kadirice.jpg"
import mushroom  from "../../src/assests/images/mushroom.jpg"
import naan from "../../src/assests/images/naan.jpg"
import noodles from "../../src/assests/images/noodles.jpg"
import paneertikka from "../../src/assests/images/paneertikka.jpg"
import pastar from "../../src/assests/images/pastar.jpg"
import sambharrice from "../../src/assests/images/sambharrice.jpg"
import dalmakhni from "../../src/assests/images/dalmakhni.jpg"
import briyanii from "../../src/assests/images/briyanii.jpg"
import butterroti from "../../src/assests/images/butterroti.jpg"


export default function Thetraditionalkitchen() {
  return (
    <div>
       <div class="container mt-5">
       <h1 class="text-center mb-4">MENU</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    {/* <!-- Card 1 --> */}
    <div class="col">
      <div class="card">
        <img src={sambharrice} class="card-img-top" alt="Card Image 1"/>
        <div class="card-body">
          <h5 class="card-title">Curry Rice</h5>
          <p class="card-text">Some text for Card 1.
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

    {/* <!-- Card 2 --> */}
    <div class="col">
      <div class="card">
        <img src={curry} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Chaap</h5>
          <p class="card-text">Some text for Card 2.
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

     {/* Card3 */}
    <div class="col">
      <div class="card">
        <img src={naan} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Naan</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Butter</option>
                <option value="full">NA</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

     {/* Card4 */}
    <div class="col">
      <div class="card">
        <img src={paneertikka} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Paneer Tikka</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>


    {/* Card5 */}
    <div class="col">
      <div class="card">
        <img src={mushroom} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Mushroom</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>
    


     {/* Card6 */}
    <div class="col">
      <div class="card">
        <img src={briyanii} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Briyani</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

    {/* Card7 */}
    <div class="col">
      <div class="card">
        <img src={butterroti} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Butter Roti</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>


      {/* Card8 */}
    <div class="col">
      <div class="card">
        <img src={dalmakhni} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Dal Makhani</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>


      {/* Card9 */}
    <div class="col">
      <div class="card">
        <img src={kadirice} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Kadi Rice</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>


      {/* Card10 */}
    <div class="col">
      <div class="card">
        <img src={coffee} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Coffee</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Medium</option>
                <option value="full">Large</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

     {/* Card11 */}
    <div class="col">
      <div class="card">
        <img src={noodles} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Noodles</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

     {/* card12 */}
    <div class="col">
      <div class="card">
        <img src={pastar} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Red Sauce Pasta</h5>
          <p class="card-text">
          <div className="container w-100">
              {/* for quantity numbers total price */}
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>
              {/* creating class for half and full */}
              <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

    
    

    

  </div>
</div>

    </div>
  )
}
