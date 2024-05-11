import React,{useEffect,useState} from 'react'
import Menuu from '../components/Menuu';

export default function Platterperfection() {
const [foodCat,setFoodCat]=useState([]);
const [foodItem,setFoodItem]=useState([]);


const loadData = async ()=>{
    let response = await fetch("http://localhost:5000/api/foodData",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        }
    });
    response= await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0]);
    setFoodCat(response[1]);
    
}
useEffect(()=>{
    loadData()
},[]
)




  return (
    <div>
       <div className='container'>
        {
            foodCat !==[]
            ? foodCat.map((data)=>{
                return (
                    <div>{data}</div>
                )
                
            })
            :<div>
                """"""""""
            </div>
        }
         <Menuu/>
       </div>
      
    </div>
  )
}


