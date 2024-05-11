import React from 'react'
import burger from "../../src/assests/images/burger.jpg"
import coffee from "../../src/assests/images/coffee.jpg"
import fries from "../../src/assests/images/fries.jpg"
import momos  from "../../src/assests/images/momos.jpg"
import paneertikka from "../../src/assests/images/paneertikka.jpg"
import pastaw  from "../../src/assests/images/pastaw.jpg";
import pizza from "../../src/assests/images/pizza.jpg";
import spagheti from "../../src/assests/images/spagheti.jpg"


export default function Flavourfactory() {
  return (
    <div>
      <div class="container mt-5">
      <h1 class="text-center mb-4">MENU</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    {/* <!-- Card 1 --> */}
    <div class="col">
      <div class="card">
        <img src={burger} class="card-img-top" alt="Card Image 1"/>
        <div class="card-body">
          <h5 class="card-title">Burger</h5>
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
                <option value="half">Small</option>
                <option value="full">Large</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div></p>
        </div>
      </div>
    </div>

    {/* <!-- Card 2 --> */}
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
                <option value="half">Small</option>
                <option value="full">Large</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div></p>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card">
        <img src={spagheti} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Spagheti</h5>
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
            </div></p>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card">
        <img src={pizza} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Pizza</h5>
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
                <option value="half">Regular</option>
                <option value="full">Medium</option>
                <option value="full">Large</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div></p>
        </div>
      </div>
    </div>

    <div class="col">
      <div class="card">
        <img src={pastaw} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">White Sauce Pasta</h5>
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
            </div></p>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card">
        <img src={fries} class="card-img-top" alt="Card Image 2"/>
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
            </div></p>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card">
        <img src={momos} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Momos</h5>
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
            </div></p>
        </div>
      </div>
    </div>


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
            </div></p>
        </div>
      </div>
    </div>

    

  </div>
</div>
    </div>
  )
}
