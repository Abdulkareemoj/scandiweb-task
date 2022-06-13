import { Routes, Route } from 'react-router-dom';
import "./Styles.scss";
import React from "react";
import Productlist from "./Components/Productlist";
import Navbar from "./Components/Navbar";
import Productpage from "./Components/Productpage";
// import ExchangeRates from ".";



export default function App() {
    return  (
        <Routes>
            <Route path='/' element={<Navbar />}>
                <Route index element={<Productlist />}/>
                <Route path='/ppg' element={<Productpage mainimage={'ghj'} img1={'vfgh'} img2={'saf'} img3={''} pname={'rt'} price={'2'} />
}/>
            </Route>
        </Routes>
    );
}