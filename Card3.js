import React from "react";
import fa from "../../src/assests/images/fa.jpg"
import fb from "../../src/assests/images/fb.jpg"
import fc from "../../src/assests/images/fc.jpg"
import fd from "../../src/assests/images/fd.jpg"
import fe from "../../src/assests/images/fe.jpg"
import ff from "../../src/assests/images/ff.jpg"
import fg from "../../src/assests/images/fg.jpg"
import fh from "../../src/assests/images/fh.jpg"
import fl from "../../src/assests/images/fl.jpg"




import {Link} from "react-router-dom"


export default function Card() {
    return (
        <div>
            <div class="container mt-5">
                <h1>STILL CONFUSED?</h1>
                <h6>Don't worry we have some suggestions for you.</h6>
  <div class="row">
    <div class="col-md-4 ">
      <div class="image-container3 mt-4">
        <img src={fa} alt="Image 1" class="img-fluid rounded" />
        <div class="text-overlay">
          <p>
            
            <Link to="/tasteofindia" className="image-container"> <h3>The Taste Of India</h3></Link>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 ">
        <img src={fb}  alt="Image 2" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
            
            <Link to="/theflavourfactory" className="image-container">  <h3>The Flavour Factory</h3></Link>
          </p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 ">
        <img src={fc}  alt="Image 3" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/foodfusion" className="image-container"> <h3>Food Fusion</h3></Link></p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={fd}  alt="Image 4" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/sizzleandstir" className="image-container"> <h3>Sizzle And Stir</h3></Link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={fe}  alt="Image 5" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/platterperfection" className="image-container"> <h3>Platter Perfection</h3></Link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={ff}  alt="Image 6" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/annaskitchen" className="image-container"> <h3>Annas Kitchen</h3></Link>
         </p>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={fg}  alt="Image 7" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/chefsbestfriend" className="image-container"> <h3>Chef 's Best Friend</h3></Link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={fh}  alt="Image 8" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/foodies" className="image-container"> <h3>Foodies</h3></Link></p>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div class="image-container3 mt-4 rounded">
        <img src={fl}  alt="Image 9" class="img-fluid rounded"/>
        <div class="text-overlay">
          <p>
          <Link to="/thetraditionalkitchen" className="image-container"> <h3>The Traditional Kitchen</h3></Link></p>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>

        );
}
  
   


