import React from "react";

class Productpage extends React.Component {
	render() {
		return (
			<div>
			
			<div className="product-thumbnail">
				<img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
				<img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
				<img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
			</div>
			
			<div className="product-card">
					<img src={urlFor(image && image[0])} width={250} height={250} className="product-image" />
				
				</div> 
			   <div className="product-card">
			   <p className="product-name">{name}</p>
					<p className="product-price"> {price}</p>
			   </div>
			</div>
		  );
		};
		
	} 
export default Productpage;
