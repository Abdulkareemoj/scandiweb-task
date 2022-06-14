import React from "react";
import data from "../data.json"



class ProductCard extends React.Component {
		
render(){
	const {productImage, productName} =  this.props
			return (
			<div className="products-container">
				<div className="product-card">
					<div className="product-image">
					{productImage}
					</div>					
						<p className="product-name">
						{productName}
						</p>
						<a className="product-price" href="#">
							<strong>Price</strong>
						</a>				
				</div>
			</div>
		);
	};
	
};

export default ProductCard;
