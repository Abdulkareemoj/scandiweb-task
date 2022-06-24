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


//     


class Productpage extends React.Component {
	state = {
		value: "XS",
		value2: "color1"
	};
	onChange= e=> {
		this.setState({[e.target.name] : e.target.value});
	}
		//     this.onChangeValue = this.onChangeValue.bind(this);
		//   }

render() {
	const { value, value2 } = this.state;
	const { productImage, img1, img2, img3, price, productName, productItem, productDesc } = this.props;
	return (
		<div className="page-container  container containerpall">
			<div className="product-thumbnail">
				<img
					src={img1}
					className="product-thumbnail"
					alt={`${productName}`}
				/>
				<img
					src={img2}
					className="product-thumbnail"
					alt={`${productName}`}
				/>
				<img
					src={img3}
					className="product-thumbnail"
					alt={`${productName}`}
				/>
			</div>
			<div className="product-image">
				<img src={productImage} alt={`${productName}`} />
			</div>
			<div className="product-details">
				<strong>
					{" "}
					<p className="product-name"> {productName}</p>
				</strong>
				<p className="product-item">{productItem}</p>

				<h2 className="size-choice">SIZE</h2>

				{/* <div onChange={this.onChangeValue}>  */}
				<label>XS 
					<input 
					className="size-style" 
					type="radio" 
					value="XS" 
					name="value"
					checked={value === "XS"}
					onChange={this.onChange} 
					/> 
					</label>
				<label>S
					<input 
					className="size-style" 
					type="radio" 
					value="S" 
					name="value"
					checked={value === "S"}
					onChange={this.onChange} 
					/>
					</label>
				<label>M
					<input 
					className="size-style" 
					type="radio" 
					value="M" 
					name="value"
					checked={value === "M"}
					onChange={this.onChange} 
					/>
				</label>
				<label>L
					<input 
					className="size-style"
					type="radio"
					value="L" 
					name="value"
					checked={value === "L"}
					onChange={this.onChange} 
					/> 
					</label>


				<h2 className="color-choice">COLOR</h2>
				<label>color1
					<input 
					className="color-style" 
					type="radio" 
					value="color1" 
					name="value2"
					checked={value2 === "color1"}
					onChange={this.onChange} 
					/>
					</label>

					<label>color2
					<input 
					className="color-style" 
					type="radio" 
					value="color2" 
					name="value2"
					checked={value2 === "color2"}
					onChange={this.onChange} 
					/>
					</label>

					<label>color3
					<input 
					className="color-style" 
					type="radio" 
					value="color3" 
					name="value2"
					checked={value2 === "color3"}
					onChange={this.onChange} 
					/>
					</label>

				<h2 className="price-choice">PRICE</h2>
				<p className="product-price">{price}</p>

				<input className="cta-button" type="button" value="ADD TO CART" name="ADD" />
				 </div>{" "}
			<p className="product-desc">{productDesc}</p>
		</div>
	);
				}
			}
export default Productpage;
