import "./Styles.scss";
import React from "react";
import Productlist from "./Components/Productlist";
import Navbar from "./Components/Navbar";
// import { ApolloProvider,ApolloClient, Cache, InMemoryCache } from "@apollo/client";
// import Producttile from "./Components/Producttile";
// import Cart from "./Components/Cart";
// import Productpage from "./Components/Productpage";

// const client = new ApolloClient({
// 	uri: 'http://localhost:4000/',
// 	cache: new InMemoryCache();
// })
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
