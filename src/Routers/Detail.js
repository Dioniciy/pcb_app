import React from "react";
import {
  useLocation,
} from 'react-router-dom';
import {useSelector} from "react-redux";
import "./Detail.scss" 
import "./Home.scss"
import {Navigate } from "react-router-dom";
import { useEffect } from "react";

function Drow_element(element)
{
   return <Drow_detail 
        key = {element.id}
        id = {element.id}
        title = {element.title} 
        in_voltage = {element.in_voltage} 
        price = {element.price} 
        price_unit = {element.price_unit}
        description = {element.description} 
        image = {element.image}
     />
}
function Drow_detail({ id, title, in_voltage, price, price_unit, description, image}) {
  return (
      <div>
          <img  src = {require(`../../../source/${image}`)} alt={title} title={title}></img>
          <div className="element_column">
              <h3 className="element_title">{title}</h3>
              <h5 className="element_price">{price} {price_unit}</h5>
              <h5 className="element_in_voltage">{in_voltage}</h5>                
              <p className="element_description">{description}</p >     
          </div>
      </div>
  ) ;

}

function Get_element() {
  let location = useLocation();

  let numEl = parseInt(location.pathname.match(/\d+/), 10);
  //var Home = require("../Routers/Home.js");
  let dev = useSelector((state) => state.devices.devices)
  let id = numEl; //useParams()\
  let item;
  console.log(dev);
  if(typeof dev != "undefined") 
  {
    item =  dev.find((elem) => elem.key == Number(id) )
  }
  
  console.log(item);
  
  return item;
}
function no_exist()
{
  return(
    <div>
      <h1>ERROR DEVICE ID </h1>
    </div>
  )

}
export function Detail()
{
  const element = Get_element();
  useEffect(
    () => {
      
    }
  )

  return(
   <div className="container_det">
     <div className="detail_element">
       {
          typeof element ==="undefined" ? no_exist() : Drow_element(element)
       }
     </div>
   
   </div>
  ) 
}

export default Detail;

