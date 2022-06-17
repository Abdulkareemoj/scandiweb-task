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
			<div className="page-container  container containerpall">
			
			<div className="product-thumbnail">
				<img src= {img1} className="product-thumbnail" alt={`${productName}`} />
				<img src= {img2} className="product-thumbnail"alt={`${productName}`} />
				<img src= {img3} className="product-thumbnail" alt={`${productName}`}/>
			</div>
			
			<div className="product-image">
					<img src= {productImage} alt={`${productName}`} />
				
				</div> 

			   <div className="product-details">

			   <strong>  <p className="product-name"> {productName}</p></strong>
			   <p className="product-name">{productName}</p>
			   <h2>
				SIZE
			   </h2> 	 
			   <input type="radio" value="XS" name="size" /> XS
        <input type="radio" value="S" name="size" /> S
        <input type="radio" value="M" name="size" /> M
		<input type="radio" value="L" name="size" /> L

<h2>COLOR</h2>
<input type="radio" value="Male" name="color1" /> Male
        <input type="radio" value="color2" name="size" /> Female
        <input type="radio" value="color3" name="size" /> Other

<h2>PRICE</h2>
					<p className="product-price">{price}</p>
					<input type="button" value="ADD TO CART" name="ADD" /> ADD TO CART
								   </div> </div>
		)};
		
	} 
export default Productpage;
