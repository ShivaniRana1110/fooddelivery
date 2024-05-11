import React from "react";
import coffee from "../../src/assests/images/coffee.jpg";
import dosa from "../../src/assests/images/dosa.jpg";
import fries from "../../src/assests/images/fries.jpg";
import idli from "../../src/assests/images/idli.jpg";
import paneertikka from "../../src/assests/images/paneertikka.jpg";
import sambharrice from "../../src/assests/images/sambharrice.jpg";
import splatter from "../../src/assests/images/splatter.jpg";

export default function Annaskitchen() {
  return (
    <div>
      <div class="container mt-5">
        <h1 class="text-center mb-4">MENU</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4">
          {/* <!-- Card 1 --> */}
          <div class="col">
            <div class="card">
              <img src={dosa} class="card-img-top" alt="Card Image 1" />
              <div class="card-body">
                <h5 class="card-title">Masala Dosa</h5>
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
                    <div className="d-inline h-100 fs-5 ">
                      <h6>Total Price</h6>
                    </div>
                  </div>
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div class="col">
            <div class="card">
              <img src={splatter} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">South Indian Platter </h5>
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

          {/* Card3 */}
          <div class="col">
            <div class="card">
              <img src={coffee} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">Filter Coffee</h5>
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

          {/* Card4 */}
          <div class="col">
            <div class="card">
              <img src={idli} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">Idli</h5>
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
              <img src={sambharrice} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">Sambhar Rice</h5>
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
              <img src={fries} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">Fries</h5>
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
                      <option value="half">Small</option>
                      <option value="full">Large</option>
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
              <img src={dosa} class="card-img-top" alt="Card Image 2" />
              <div class="card-body">
                <h5 class="card-title">Masala Dosa</h5>
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

          {/* Card8 */}
          <div class="col">
            <div class="card">
              <img src={paneertikka} class="card-img-top" alt="Card Image 2" />
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
        </div>
      </div>
    </div>
  );
}
