import React from "react";


const DATA = [{
	img1: "link1",
	img2: "link2",
	img3: "link3"
		
}];
class Productpage extends React.Component {
	render() {
		const {productImage,img1,img2,img3,price, productName} =  this.props
		return (
			<div className="page-container">
			
			<div className="product-thumbnail">
				<img src= {img1} className="product-image" alt={`${productName}`} />
				<img src= {img2} className="product-image" alt={`${productName}`} />
				<img src= {img3} className="product-image" alt={`${productName}`}/>
			</div>
			
			<div className="product-card">
					<img src= {productImage} className="product-image" alt={`${productName}`} />
				
				</div> 
			   <div className="product-details">
			   <p className="product-name">{productName}</p>
					<p className="product-price"> {price}</p>
			   </div> </div>
		)};
		
	} 
export default Productpage;
