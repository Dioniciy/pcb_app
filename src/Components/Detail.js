import React from "react";
import {
  useLocation,
} from 'react-router-dom';


function Get_element() {
  let location = useLocation();

  var numEl = parseInt(location.pathname.match(/\d+/), 10);
  var Home = require("../Routers/Home.js");

  return <div></div>;
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
