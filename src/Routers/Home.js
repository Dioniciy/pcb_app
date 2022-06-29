import React from "react";
import PCB_element from "../Components/PCB"
import './Home.scss';
import axios from "axios";
//import CardList from "components/CardList";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
//import { selectActiveFilters } from "features/filters/selectors";
import { useEffect, useState } from "react";
//import { getRequestUrl } from "../../helpers/setRequestUrl";
import { getDevices, upload_devices } from "../features/products/actions.js";
//import { selectProducts } from "../../features/products/selector";
//import { Header } from "components/Header";
import { URL_SEARCH } from "../Configuration/index";


function Drow_element(element)
{
 
   return <PCB_element 
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

export function Home() {

  const dispatch = useDispatch();
  let devices = useSelector((state) => state.devices.devices);
  //console.log(devices);
  // =  axios.get("http://localhost:4000/items");
  //console.log(axios.get("http://localhost:4000/items"));
  //.then((res) => {
    //dispatch(productCardAction(GET_PRODUCTS, res.data));
  //}
  //axios.get("http://localhost:4000/items);
  
  let url;
  

  
  let  isLoading = 0;
  
  useEffect(
    () => {
      
  }
    
  );
  

    return  (
       <section className="container">
          {
          isLoading
          ? (<div className="loader">
            <span className="Loader__text"> "Loading..." </span>
          </div>)
          : (
              <div className = "elements">
              {
                (devices || []).map((element) => Drow_element(element) ) 
              }
              </div>
            ) 
        }
      </section>
    );
}


export default Home;

