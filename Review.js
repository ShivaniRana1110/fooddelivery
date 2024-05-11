import React from "react";
import {Link} from "react-router-dom"




export default function Card() {
    return (
        <div>
            <div class="container mt-5">
  <h1 class="text-center mb-4">Customer Review</h1>

  <div class="row">
    {/* <!-- Review 1 --> */}
    <div class="col-md-3">
      <div class="card review-card">
        <div class="card-body">
          <h5 class="card-title">Ansh</h5>
          <p class="card-text">"I'm really impressed with how easy this food delivery website is to use. The delivery was quicker than I thought.I appreciate that the food is hygienically packed."</p>
          <p class="card-text"><small class="text-muted">Rating:&#9733;&#9733;&#9733;&#9733; </small></p>
        </div>
      </div>
    </div>

    {/* <!-- Review 2 --> */}
    <div class="col-md-3">
      <div class="card review-card">
        <div class="card-body">
          <h5 class="card-title">Pragya</h5>
          <p class="card-text">"I can't praise this food delivery website enough! The variety of restaurants is impressive, and the ordering process is a breeze. What sets them apart is Quality"</p>
          <p class="card-text"><small class="text-muted">Rating: &#9733;&#9733;&#9733;&#9733;&#9733;</small></p>
        </div>
      </div>
    </div>

    {/* <!-- Review 3 --> */}
    <div class="col-md-3">
      <div class="card review-card">
        <div class="card-body">
          <h5 class="card-title">Anshika</h5>
          <p class="card-text">"This website has a lot of good food to choose from, and the delivery is quick. The website is easy to use, and they often have discounts, which is cool."</p>
          <p class="card-text"><small class="text-muted">Rating:&#9733;&#9733;&#9733;</small></p>
        </div>
      </div>
    </div>

    {/* <!-- Review 4 --> */}
    <div class="col-md-3">
      <div class="card review-card">
        <div class="card-body">
          <h5 class="card-title">Rohan</h5>
          <p class="card-text">"There are so many great Kitchens to choose from on this food delivery website! I love that they have lots of different kinds of food." </p>
          <p class="card-text"><small class="text-muted">Rating:&#9733;&#9733;&#9733;&#9733;</small></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

    )};