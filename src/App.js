import "./Styles.scss";
import React from "react";
import Productlist from "./Components/Productlist";
import Navbar from "./Components/Navbar";
import LinkList from './LinkList';


export default function App() {
	return  (
		<div className="container">
			<Navbar />
			<Productlist />
			{/* <Cart />
			<Productpage /> */}
		</div>
	);
}
