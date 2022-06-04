import React from "react";
class ProductCard extends React.Component {
	render() {
		return (
			<div class="products-container">
				<div class="product-card">
					<div class="product-image">
						{/* <img src={this.props.product.image} alt="Placeholder image"></img> */}
						<img src={this.props.productImage} alt="place holder" />
					</div>
					
						<p class="product-name">{this.props.productName}</p>
						{/* <p>{this.props.productName}</p> */}
						{/* {this.props.product.short_description}
                    <br></br>
                </div> */}
						<a class="product-price" href="#">
							<strong>Price</strong>
						</a>
					
				</div>
			</div>
		);
	}
}

export default ProductCard;
