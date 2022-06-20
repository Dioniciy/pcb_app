import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.scss";

function Navigation(){
    return (
        <div className="nav">
        <Link to="/">Головна</Link>
        <Link to="/about">Про компанію</Link>
        </div>
    );
}

export default Navigation;