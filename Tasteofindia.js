import React from 'react';
import burger from "../../src/assests/images/burger.jpg"
import coffee from "../../src/assests/images/coffee.jpg"
import curry from "../../src/assests/images/curry.jpg"
import dosa from "../../src/assests/images/dosa.jpg"
import fries from "../../src/assests/images/fries.jpg"
import idli from "../../src/assests/images/idli.jpg"
import kadirice from "../../src/assests/images/kadirice.jpg"
import momos  from "../../src/assests/images/momos.jpg"
import mushroom  from "../../src/assests/images/mushroom.jpg"
import naan from "../../src/assests/images/naan.jpg"
import noodles from "../../src/assests/images/noodles.jpg"
import paneertikka from "../../src/assests/images/paneertikka.jpg"
import pastaw  from "../../src/assests/images/pastaw.jpg";
import pizza from "../../src/assests/images/pizza.jpg";
import soup from "../../src/assests/images/soup.jpg"
import springroll from "../../src/assests/images/springroll.jpg"

export default function Tasteofindia() {
  return (
    <div>
          <div class="container mt-5">
          <h1 class="text-center mb-4">MENU</h1>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    {/* <!-- Card 1 --> */}
    <div class="col">
      <div class="card">
        <img src={curry} class="card-img-top" alt="Card Image 1"/>
        <div class="card-body">
          <h5 class="card-title">Chaap</h5>
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
              <div className="d-inline h-100 fs-5 "><h6>Total Price</h6></div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

    {/* <!-- Card 2 --> */}
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

     {/* Card3 */}
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

     {/* Card4 */}
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
              {/* <select className="m-2 h-100 bg-success rounded"> 
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select> */}
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>

    {/* Card7 */}
    <div class="col">
      <div class="card">
        <img src= {coffee} class="card-img-top" alt="Card Image 2"/>
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
                <option value="full">Medium</option>
                <option value="full">Large</option>
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
            </div>
            
          </p>
        </div>
      </div>
    </div>


      {/* Card9 */}
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
            </div>
            
          </p>
        </div>
      </div>
    </div>


      {/* Card10 */}
    <div class="col">
      <div class="card">
        <img src={springroll} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Spring Roll</h5>
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

     {/* Card11 */}
    <div class="col">
      <div class="card">
        <img src={soup} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Soup</h5>
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

     {/* card12 */}
    <div class="col">
      <div class="card">
        <img src={idli} class="card-img-top" alt="Card Image 2"/>
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

     {/* Card13 */}
    <div class="col">
      <div class="card">
        <img src={burger} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Burger</h5>
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
                <option value="full">Large</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
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
            </div>
            
          </p>
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
                <option value="half">Half</option>
                <option value="full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5 ">Total Price</div>
            </div>
            
          </p>
        </div>
      </div>
    </div>


    <div class="col">
      <div class="card">
        <img src={dosa} class="card-img-top" alt="Card Image 2"/>
        <div class="card-body">
          <h5 class="card-title">Dosa</h5>
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
