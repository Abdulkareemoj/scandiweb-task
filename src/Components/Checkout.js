import React from "react";

const DATA = [
	{
		img1: "link1",
		img2: "link2",
		img3: "link3",
	},
];
 

// const productSize = ["S", "M", "X", "XXL"];
//   //map
//   const sizeData = productSize?.map((item) => ({
//     id: `input_${item}`,
//     value: item,
//   }));
//   let [sizeValue, setSizeValue] = useState("");
//   console.log(sizeValue);

// constructor() {
//     super();
//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   }

 

class Productpage extends React.Component {
	render() {
		const { productImage, img1, img2, img3, price, productName,productItem,productDesc } = this.props;
		return (
			 
				<div className="product-details">
					<strong>
						{" "}
						<p className="product-name"> {productName}</p>
					</strong>
					<p className="product-item">{productItem}</p>
					<h2 className="size-choice">SIZE</h2>
	 
					<input className="size-style" type="radio" value="XS" name="size" /> XS
					<input className="size-style"  type="radio" value="S" name="size" /> S
					<input className="size-style" type="radio" value="M" name="size" /> M
					<input className="size-style" type="radio" value="L" name="size" /> L
				 
						<h2 className="color-choice">COLOR</h2>
					<input type="radio" value="Male" name="color1" /> Male
					<input type="radio" value="color2" name="size" /> Female
					<input type="radio" value="color3" name="size" /> Other
					<h2 className="price-choice">PRICE</h2>
					<p className="product-price">{price}</p>
					<input className="cta-utto" type="button" value="ADD TO CART" name="ADD" /> 
                    </div>{" "}
<div>
			<p className="product-desc">{productDesc}</p>
			</div>
		);
	}
}
export default Productpage;
