import React from "react";

const DATA = [
	{
		img1: "link1",
		img2: "link2",
		img3: "link3",
	},
];

//forget this
// const productSize = ["S", "M", "X", "XXL"];
//   //map
//   const sizeData = productSize?.map((item) => ({
//     id: `input_${item}`,
//     value: item,
//   }));
//   let [sizeValue, setSizeValue] = useState("");
//   console.log(sizeValue);


//     was trying with this before

// class Productpage extends React.Component {
	// state = {
	// 	sizes: "XS",
	// 	colors: "color1"
	// };

	// onChange= e=> {
	// 	this.setState({[e.target.name] : e.target.value});
	// }
		//     this.onChangeValue = this.onChangeValue.bind(this);
		//   }

		
// render() {
	// const [colors, setColors] = useState("color 1");
	// const [sizes, setSizes] = useState("small");
  
	const { productImage, img1, img2, img3, price, productName, productItem, productDesc } = this.props;
	

class Productpage extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: "color 1",
      sizes: "small"
    };
  }
  render() {
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


      <div>
        <h2 className="size-choice">SIZE</h2>
        <div className="sizebutton-style">
          <input
            onChange={(e) => this.setState({ sizes: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="small"
            name="colors"
            value="small"
          />
          <label
            className={`${
              this.state.sizes === "small" ? "button-selected" : "button"
            }`}
            for="small"
          >
            small
          </label>
          <input
            onChange={(e) => this.setState({ sizes: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="medium"
            name="colors"
            value="medium"
          />
          <label
            className={`${
              this.state.sizes === "medium" ? "button-selected" : "button"
            }`}
            for="medium"
          >
            medium
          </label>
          <input
            onChange={(e) => this.setState({ sizes: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="large"
            name="colors"
            value="large"
          />
          <label
            className={`${
              this.state.sizes === "large" ? "button-selected" : "button"
            }`}
            for="large"
          >
            large
          </label>
          <input
            onChange={(e) => this.setState({ sizes: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="xlarge"
            name="colors"
            value="xlarge"
          />
          <label
            className={`${
              this.state.sizes === "xlarge" ? "button-selected" : "button"
            }`}
            for="xlarge"
          >
            xlarge
          </label>
        </div>

        <h2 className="color-choice">COLOR</h2>

        <div className="colorbutton-style">
          <input
            onChange={(e) => this.setState({ colors: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="color1"
            name="colors"
            value="color 1"
          />
          <label
            className={`${
              this.state.colors === "color 1" ? "button-selected" : "button"
            }`}
            for="color1"
          >
            color 1
          </label>
          <input
            onChange={(e) => this.setState({ colors: e.target.value })}
            className="hidden_radio"
            type="radio"
            id="color2"
            name="colors"
            value="color 2"
          />
          <label
            className={`${
              this.state.colors === "color 2" ? "button-selected" : "button"
            }`}
            for="color2"
          >
            color 2
          </label>
        </div>
        <h2 className="price-choice">PRICE</h2>
				<p className="product-price">{price}</p>

				<input className="cta-button" type="button" value="ADD TO CART" name="ADD" />
				 </div>{" "}
			<p className="product-desc">{productDesc}</p>
		</div>
    </div>
	);
				}
			}
export default Productpage;