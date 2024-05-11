import React from 'react'

export default function Sizzleandstir() {
  return (
    <div>
<div class="container mt-5">
  <h1 class="text-center mb-4">MENU</h1>

  <div class="row">
    {/* <!-- Card 1 --> */}
    <div class="col-md-3">
      <div class="card">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image"/>
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
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

    {/* <!-- Card 2 --> */}
    <div class="col-md-3">
      <div class="card">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image"/>
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
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

    {/* <!-- Card 3 --> */}
    <div class="col-md-3">
      <div class="card">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image"/>
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
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

    {/* <!-- Card 4 --> */}
    <div class="col-md-3">
      <div class="card">
        <img src="https://via.placeholder.com/150" class="card-img-top" alt="Card Image"/>
        <div class="card-body">
          <h5 class="card-title">Card 4</h5>
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
