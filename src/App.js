import { Routes, Route } from 'react-router-dom';
import "./Styles.scss";
import React from "react";
import Productlist from "./Components/Productlist";
import Navbar from "./Components/Navbar";
import Productpage from "./Components/Productpage";
// import data from "./data.json"
// import ExchangeRates from ".";



export default function App() {
    return  (
        <>
        <Navbar /> 
        <Routes>
            <Route path='/' element={<Productlist />}/>
           
                <Route path='/ppg' element={<Productpage productImage={'link1'} img1={'link1'} img2={ 'link2'} img3={'link3'}price={'link5'} productName={'6'} />}/>
           
        </Routes>
        </>
    );
}