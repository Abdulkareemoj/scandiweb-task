import React from "react";
import data from '../data.json'
import ProductCard from './ProductCard.js'

class Productlist extends React.Component {
		render() {
			return <div className="container containerpall">
			<h1>	Category Name
			</h1>

				{data.map((item) => { 
					return <ProductCard key={item.productId} productImage={item.productImage} productName={item.productName} />
				})}
			</div>
		}
	}	

	
export default Productlist;