import React from "react";
import data from "../data.json"



class ProductCard extends React.Component {
		
render(){
	const {productImage, productName, price} =  this.props
			return (
			<div className="products-container">
				<div className="product-card">
					<div className="product-image">
					{productImage}
					</div>					
						<p className="product-name">
						{productName}
						</p>
						<p className="product-price">
							<strong>Price{price}</strong>
						</p>				
				</div>
			</div>
		);
	};
	
};

export default ProductCard;
