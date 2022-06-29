import React, { useCallback, useEffect } from "react";
import {  useSelector, useDispatch } from "react-redux";
import {BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./Components/Navigation";
import Detail from "./Routers/Detail";
import About from "./Routers/About";
import Home from "./Routers/Home"
import Not_Found from "./Routers/Not_Found.js"
import "./App.scss";
import Footer from "./Components/Footer"
import Header from "./Components/Header.js"
import {addToWishlist} from "./features/products/actions"

function App() {
    let devices = useSelector((state) => state.devices.devices);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(typeof devices === "undefined")
        {
           dispatch (addToWishlist());
           console.log("dowm")
        }
    }, [])
    
    return (
        <BrowserRouter>
            <Header/>
            <Navigation />
            
            <Routes>
                
                <Route  path="/" element ={<Home />} />
                <Route  path="/about" element ={<About />} /> 
                <Route  path="/device/:id" element={<Detail/>} />
                <Route  path="/not-found" element={<Not_Found/>} />
                <Route path = "*"  element={<Navigate replace to="/not-found" />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
//<Route path="/detail" element ={<About />}/>
//<Redirect to="./not-found" />