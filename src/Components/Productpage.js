import React from "react";

import data from '../data.json'
class Productpage extends React.Component {
	render() {
		const {mainimage,img1,img2,img3,pname,price, productName} =  this.props
		return (
			<div className="page-container">
			
			<div className="product-thumbnail">
				<img src= {img1} className="product-image" />
				<img src= {img2} className="product-image" />
				<img src= {img3} className="product-image" />
			</div>
			
			<div className="product-card">
					<img src= {mainimage} className="product-image" />
				
				</div> 
			   <div className="product-details">
			   <p className="product-name">{pname}</p>
					<p className="product-price"> {price}</p>
			   </div>
			</div>
		  );
		};
		
	} 
export default Productpage;
