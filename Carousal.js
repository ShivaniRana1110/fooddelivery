import React from "react";
import bg1 from "../../src/assests/images/bg1.jpg";
import bgg2 from "../../src/assests/images/bgg2.jpg";
import bgg3 from "../../src/assests/images/bgg3.jpg";
import bgg4 from "../../src/assests/images/bgg4.jpg";

export default function Carousal() {
  return (
    <div>
     <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit: "contain !important"}}>
  <div className="carousel-inner" id="carousel">
    <div className="carouse-caption" style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src={bg1} className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bgg2} className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bgg3} className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={bgg4} className="d-block w-100" style={{filter:"brightness(80%)"}} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  );
}
