import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.scss";

function Navigation(){
    return (
        <div className='nav_block'>
            <div className="nav">
                <Link to="/">Головна</Link>
            </div>
            <div className="nav">
                <Link to="/about">Про компанію</Link>
            </div>
        </div>
        
    )
}

export default Navigation;