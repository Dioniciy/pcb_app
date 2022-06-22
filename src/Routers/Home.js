import React from "react";
import PCB_element from "../Components/PCB"
import './Home.scss';

//import CardList from "components/CardList";
import { useDispatch, useSelector } from "react-redux";
//import { useHistory } from "react-router-dom";
//import { selectActiveFilters } from "features/filters/selectors";
import { useEffect, useState } from "react";
//import { getRequestUrl } from "../../helpers/setRequestUrl";
import { getDevices } from "../features/products/actions.js";
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
  //const [searchValue, setSearchValue] = useState("");
  //const history = useHistory();
  const dispatch = useDispatch();
 // const slidersState = useSelector(selectSliders);
 // const filters = useSelector(selectActiveFilters);
  //const currentPage = useSelector(selectCurrentPage);
 // const sliders = Object.values(slidersState);
 // const devices = useSelector();
  let devices = useSelector((state) => state.devices.devices)
 // const numberOfProducts = useSelector(selectProducts("numberOfProducts"));
  const prodUrl = URL_SEARCH;
  const url = prodUrl;
  // getRequestUrl({
  //   prodUrl,
  //   filters,
  //   searchValue,
  //   sliders,
  //   currentPage,
  // });
  
  let  isLoading = 1;
  useEffect(() => {
     dispatch(getDevices(url));
    }, [url],
    isLoading = 0
  );

   
  // get_server_data = async() =>{
  //   this.setState({ isLoading: false});
  // };

  // componentDidMount() {
   
  //    this.get_server_data();
  // }

  
   //console.log(devices);
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

