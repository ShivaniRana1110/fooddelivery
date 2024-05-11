import React,{useEffect,useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";
import Cardd from "../components/Cardd";
import Card3 from "../components/Card3";
import Review from "../components/Review";



export default function Home() {

  
  
   



  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <Carousal/>
      </div>

      <div>
        <Cardd/>
      </div>
      
        <div>
        <Card />
      </div>

      <div>
        <Card3/>
      </div>

      <div>
        <Review/>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
