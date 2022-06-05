import React from "react";
import Productlist from './Productlist.js'
class ProductCard extends React.Component {
		
		const Productlist = (props) => {
			const { productId, productImage, productName, ProductCard, Productlist } = props;

			return (
			<div class="products-container">
				<div class="product-card">
					<div class="product-image">
					(productImage={item.productImage})
					</div>					
						<p class="product-name">
						(productName={item.productName})
						</p>
						<a class="product-price" href="#">
							<strong>Price</strong>
						</a>				
				</div>
			</div>
		);
	};
	


export default ProductCard;
