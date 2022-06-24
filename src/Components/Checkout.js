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


//     this.state = {
//       name: "React"
//     };
//     this.onChangeValue = this.onChangeValue.bind(this);
//   

 

class Productpage extends React.Component {
    state = {
		value: "XS",
		value2: "color1"
	};
	onChange= e=> {
		this.setState({value :e.target.value});
	}
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

            {/* <div onChange={this.onChangeValue}>  */}
            <label>XS 
                <input 
                className="size-style" 
                type="radio" 
                value="XS" 
                checked={value === "XS"}
                onChange={this.onChange} 
                /> 
                </label>
            <label>S
                <input 
                className="size-style" 
                type="radio" 
                value="S" 
                checked={value === "S"}
                onChange={this.onChange} 
                />
                </label>
            <label>M
                <input 
                className="size-style" 
                type="radio" 
                value="M" 
                checked={value === "M"}
                onChange={this.onChange} 
                />
            </label>
            <label>L
                <input 
                className="size-style"
                type="radio"
                value="L" 
                checked={value === "L"}
                onChange={this.onChange} 
                /> 
                </label>


           
					{/* <div onChange={this.onChangeValue}>  */}
					<input className="size-style" type="radio" value="XS" name="size" /> XS
					<input className="size-style"  type="radio" value="S" name="size" /> S
					<input className="size-style" type="radio" value="M" name="size" /> M
					<input className="size-style" type="radio" value="L" name="size" /> L
				

<h2 className="color-choice">COLOR</h2>
            <label>color1
                <input 
                className="color-style" 
                type="radio" 
                value="color1" 
                checked={value2 === "color1"}
                onChange={this.onChange} 
                />
                </label>

                <label>color2
                <input 
                className="color-style" 
                type="radio" 
                value="color2" 
                checked={value2 === "color2"}
                onChange={this.onChange} 
                />
                </label>

                <label>color3
                <input 
                className="color-style" 
                type="radio" 
                value="color3" 
                checked={value2 === "color3"}
                onChange={this.onChange} 
                />
                </label>

            <h2 className="price-choice">PRICE</h2>
            <p className="product-price">{price}</p>

            <input className="cta-button" type="button" value="ADD TO CART" name="ADD" /> 
            </div>
      
		);
	}
}

export default Productpage;
