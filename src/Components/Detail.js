import React from "react";
import {
  useLocation,
} from 'react-router-dom';
import {useSelector} from "react-redux";

function Get_element() {
  let location = useLocation();

  let numEl = parseInt(location.pathname.match(/\d+/), 10);
  //var Home = require("../Routers/Home.js");
  let nfts = useSelector((state) => state.devices.devices)
  let id = numEl; //useParams()\
  let item =  nfts.find((elem) => elem.id == Number(id) )
  console.log(item);
  
  return <div>
   
  </div>;
}


class Detail extends React.Component {


  componentDidMount() {
  }

  render() {
        return <span>
        <Get_element/>
        </span>  
  }
}

export default Detail;
