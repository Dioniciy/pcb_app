import React from "react";
import {
  useLocation,
} from 'react-router-dom';
import {useSelector} from "react-redux";
import "./detail_element.scss" 

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
      <div className="detail_element">
          <img  src = {image} alt={title} title={title}></img>
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
  let nfts = useSelector((state) => state.devices.devices)
  let id = numEl; //useParams()\
  let item =  nfts.find((elem) => elem.id == Number(id) )
  console.log(item);
  
  return item;
}


export function Detail()
{
  const elem = Get_element();


  return(
      <span>
        {Drow_element(elem)}
      </span>  
  ) 
}

export default Detail;

