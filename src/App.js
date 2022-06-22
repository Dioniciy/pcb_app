import React from "react";
import {BrowserRouter, Route, Routes, Redirect} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Detail from "./Components/Detail";
import About from "./Routers/About";
import Home from "./Routers/Home"
import Not_Found from "./Routers/Not_Found.js"
import "./App.scss";

function App() {
     
    return (
        <BrowserRouter>
            <Navigation/>
            <Routes>
                <Route exact path="/" element ={<Home />} />
                <Route path="/about" element ={<About />} /> 
                <Route path="/device/:id" element={<Detail/>} />
                <Route path="/not-found" element={<Not_Found/>} />
                
            </Routes>
        </BrowserRouter>
    );
}

export default App;
//<Route path="/detail" element ={<About />}/>
//<Redirect to="./not-found" />